import React from "react";

const TextInput = ({ title, innerText, isLeft, colSpan }) => {
  let labelClassName;

  switch (colSpan) {
    case 1:
      labelClassName = `col-span-1 hover:cursor-pointer`;
      break;
    case 2:
      labelClassName = `col-span-2 hover:cursor-pointer`;
      break;
    case 3:
      labelClassName = `col-span-3 hover:cursor-pointer`;
      break;
    case 4:
      labelClassName = `col-span-4 hover:cursor-pointer`;
      break;
  }

  return isLeft ? (
    <label className={labelClassName}>
      <p className="text-slate-700 mb-2">{title}</p>
      <div className="flex flex-row-reverse border border-slate-500 rounded-md overflow-hidden hover:cursor-pointer hover:border-slate-900 h-11 has-[:focus]:border-lime">
        <input
          type="text"
          name="mortgage-amount"
          className="w-full outline-none hover:cursor-pointer pl-4 font-bold  min-w-fit peer"
        />
        <div className="h-full text-center w-fit p-4 bg-slate-100 text-slate-700 flex items-center peer-focus:bg-lime">
          <p className="text-center w-full font-bold">{innerText}</p>
        </div>
      </div>
    </label>
  ) : (
    <label className={labelClassName}>
      <p className="text-slate-700 mb-2">{title}</p>
      <div className="flex border border-slate-500 rounded-md overflow-hidden hover:cursor-pointer hover:border-slate-900 h-11 has-[:focus]:border-lime">
        <input
          type="text"
          name="mortgage-amount"
          className="w-full outline-none hover:cursor-pointer pl-4 font-bold peer"
        />
        <div className="h-full text-center w-fit p-4 bg-slate-100 text-slate-700 flex items-center peer-focus:bg-lime">
          <p className="text-center w-full font-bold">{innerText}</p>
        </div>
      </div>
    </label>
  );
};

export default TextInput;
