import React from "react";

const TextInput = ({ title, innerText, isLeft, colSpan }) => {
  const labelClassName = `col-span-${colSpan} hover:cursor-pointer`;
  return isLeft ? (
    <label className={labelClassName}>
      <p className="text-slate-700 mb-2">{title}</p>
      <div className="flex border border-slate-500 rounded-md overflow-hidden hover:cursor-pointer hover:border-slate-900 h-11">
        <div className="h-full text-center w-fit p-4 bg-slate-100 text-slate-700 flex items-center">
          <p className="text-center w-full font-bold">{innerText}</p>
        </div>
        <input
          type="text"
          name="mortgage-amount"
          className="w-full  outline-none hover:cursor-pointer pl-4 font-bold"
        />
      </div>
    </label>
  ) : (
    <label className={labelClassName}>
      <p className="text-slate-700 mb-2">{title}</p>
      <div className="flex border border-slate-500 rounded-md overflow-hidden hover:cursor-pointer hover:border-slate-900 h-11">
        <input
          type="text"
          name="mortgage-amount"
          className="w-full  outline-none hover:cursor-pointer pl-4 font-bold"
        />
        <div className="h-full text-center w-fit p-4 bg-slate-100 text-slate-700 flex items-center">
          <p className="text-center w-full font-bold">{innerText}</p>
        </div>
      </div>
    </label>
  );
};

export default TextInput;
