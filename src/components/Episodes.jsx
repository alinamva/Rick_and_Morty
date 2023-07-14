import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export default function Characters() {
  const [pageIndex, setPageIndex] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useSWR(
    `https://rickandmortyapi.com/api/episode/?page=${pageIndex}&name=${search}`,
    fetcher
  );

  if (error) return <div>No Data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Searchbar setSearch={setSearch} />
      <div className="grid sm:grid-cols-2 grid-cols-1 my-11">
        {data?.results?.map((episode) => (
          <Link to={`/episodes/${episode.id}`}>
            {" "}
            <div className="m-auto w-60 rounded text-left group ">
              <h2 className="text-white py-2 cursor-pointer group-hover:text-yellow-200 duration-3 00 font-bold">
                {episode.name}
              </h2>
            </div>
          </Link>
        ))}
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
