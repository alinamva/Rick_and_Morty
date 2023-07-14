import React from "react";

export default function Searchbar({ search, trigger, setSearch }) {
  return (
    <div className="py-8 m-auto flex justify-center ">
      <input
        placeholder="Search Character"
        className="lg:w-1/3 p-4 bg-transparent border outline-none text-white rounded-l w-[200px] "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="min-w-[60px]  w-1/12 bg-yellow-200 rounded-r"
        onClick={() => {
          trigger();
        }}
      >
        Search
      </button>
    </div>
  );
}
