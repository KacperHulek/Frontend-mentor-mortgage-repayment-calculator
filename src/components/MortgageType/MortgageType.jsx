import React from "react";

const MortgageType = ({ value, label }) => {
  return (
    <li className="col-span-4">
      <label className="overflow-hidden hover:cursor-pointer">
        <div className="flex flex-row items-center rounded-md border border-slate-500 hover:border-lime">
          <input
            type="radio"
            name="mortgage-type"
            value={value}
            className="h-11 w-5 ml-4"
          />
          <p className=" pl-4 font-bold text-slate-900 h-fit leading-none">
            {label}
          </p>
        </div>
      </label>
    </li>
  );
};

export default MortgageType;
