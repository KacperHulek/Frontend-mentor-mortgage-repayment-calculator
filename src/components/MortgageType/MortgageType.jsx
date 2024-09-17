import React from "react";

const MortgageType = ({ value, label, onChange, checked }) => {
  return (
    <li className="col-span-4">
      <label className="overflow-hidden hover:cursor-pointer">
        <div
          className="flex flex-row items-center rounded-md border border-slate-500 h-11
         hover:border-lime has-[:checked]:border-lime has-[:checked]:bg-lime has-[:checked]:bg-opacity-15"
        >
          <input
            type="radio"
            name="mortgage-type"
            value={value}
            onChange={onChange}
            checked={checked}
            className=" ml-4 appearance-none text-slate-900 border-2 w-4 h-4 min-w-4 min-h-4 rounded-full grid place-content-center
            before:w-2 before:h-2 before:rounded-full before:border before:bg-slate-900 before:scale-0 checked:before:scale-100
            checked:text-lime checked:before:bg-lime"
          />
          <p className="pl-4 font-bold text-slate-900 h-fit leading-none">
            {label}
          </p>
        </div>
      </label>
    </li>
  );
};

export default MortgageType;
