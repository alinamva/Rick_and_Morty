import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function DetailPage() {
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  const [isloading, setIsLoading] = useState(true);

  let { name, location, origin, gender, image, status, type } = fetchedData;

  useEffect(() => {
    setIsLoading(true);

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setIsLoading(false);
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="flex flex-col justify-center p-8 text-white">
      {/* <Skeleton /> */}
      <div className=" flex flex-col rounded-xl gap-3 max-w-[500px] m-auto p-8 cursor-pointer border shadow-xl shadow-yellow-200/20  hover:shadow-yellow-200/60 duration-500">
        <h1 className="m-auto text-lg font-bold">{name}</h1>
        <img src={image} className=" m-auto rounded-xl" />
        <div className="bg-yellow-200 text-center rounded-xl py-2 text-teal-950">
          {status}
        </div>
        <span>
          <b>Gender:</b> {gender}
        </span>
        <span>
          <b>Type:</b> {type}
        </span>
        <span>
          <b>Location: </b> {location?.name}
        </span>
        <span>
          <b>Origin: </b> {origin?.name}
        </span>
      </div>
    </div>
  );
}
