import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Filter from "./Filter";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export default function Characters() {
  const [pageIndex, setPageIndex] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const { trigger, data, error } = useSWRMutation(
    `https://rickandmortyapi.com/api/character/?page=${pageIndex}&name=${search}&status=${status}&gender=${gender}`,
    fetcher,
    { keepPreviousData: true }
  );
  const [statusArr] = useState(["Dead", "unknown", "Alive"]);
  const [genderArr] = useState(["Male", "Female", "unknown", "genderless"]);

  useEffect(() => {
    trigger();
  }, [status]);

  useEffect(() => {
    trigger();
  }, [gender]);
  return (
    <div className="px-6 xl:px-10">
      <Searchbar search={search} trigger={trigger} setSearch={setSearch} />
      <div className="block sm:flex justify-between gap-12">
        <Filter
          status={status}
          genderArr={genderArr}
          statusData={statusArr}
          setStatus={setStatus}
          trigger={trigger}
          gender={gender}
          setGender={setGender}
        />
        {error ? (
          <div className="h-full">No Data</div>
        ) : (
          <div className="block sm:flex sm:flex-wrap gap-8 justify-left my-11 m-auto">
            {data?.results?.map((character) => (
              <Link to={`/characters/${character.id}`}>
                <div className="m-auto w-56 rounded-xl text-center group">
                  {(() => {
                    if (character.status === "Dead") {
                      return (
                        <div className="status-div bg-red-500">
                          {character.status}
                        </div>
                      );
                    } else if (character.status === "unknown") {
                      return (
                        <div className="status-div bg-gray-400">
                          {character.status}
                        </div>
                      );
                    } else {
                      return (
                        <div className="status-div bg-blue-300">
                          {character.status}
                        </div>
                      );
                    }
                  })()}

                  <img
                    src={character.image}
                    alt={character.name}
                    className="rounded-xl cursor-pointer"
                  />
                  <h2 className="text-white py-2 group-hover:text-yellow-200 duration-3 00 font-bold">
                    {character.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="py-4 flex gap-3 justify-center">
        <button
          className="btn-primary"
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          Previous
        </button>
        <button
          className="btn-primary"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
