import React from "react";
import rickandmorty from "../assets/rickandmorty.png";

export default function MainPage() {
  return (
    <div className="flex justify-center">
      <img
        src={rickandmorty}
        alt="rickandmorty"
        className="w-1/3 min-w-[200px]  py-12 duration-100 animate-[wiggle_2s_ease-in-out_infinite]"
      />
    </div>
  );
}
