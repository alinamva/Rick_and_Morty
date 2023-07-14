import React, { useState } from "react";

export default function Filter({
  gender: selectedGender,
  setGender,
  genderArr,
  statusData,
  setStatus,
  trigger,
  status: selectedStatus,
}) {
  return (
    <div className="transparent border  rounded-xl min-w-[240px] h-[400px] p-4 mt-10">
      <h2 className="font-bold text-center text-yellow-200 text-2xl">Filter</h2>
      <div className="grid gap-4 flex-grow">
        <h2 className="text-yellow-200 font-bold text-md">Status</h2>
        <div className="flex gap-3 flex-wrap">
          {statusData.map((status, index) => (
            <Btn
              task={setStatus}
              key={index}
              status={status}
              trigger={trigger}
              selectedStatus={selectedStatus}
            />
          ))}
        </div>
        <h2 className="text-yellow-200 font-bold text-md">Gender</h2>
        <div className="flex gap-3 flex-wrap">
          {genderArr.map((gender, index) => (
            <BtnGender
              gender={gender}
              task={setGender}
              key={index}
              trigger={trigger}
              selectedGender={selectedGender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Btn = ({ status, task, trigger, selectedStatus }) => {
  const handleClick = () => {
    task(status);
    trigger();
    selectedStatus === status && task("");
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        selectedStatus === status ? "bg-yellow-200" : "bg-yellow-100"
      } rounded py-2 px-4 h-10 flex justify-center text-teal-950`}
    >
      {status}
    </button>
  );
};
export const BtnGender = ({ task, trigger, selectedGender, gender }) => {
  const handleClick = () => {
    task(gender);
    trigger();
    selectedGender === gender && task("");
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        selectedGender === gender ? "bg-yellow-200" : "bg-yellow-100"
      } rounded py-2 px-4 h-10 flex justify-center text-teal-950`}
    >
      {gender}
    </button>
  );
};
