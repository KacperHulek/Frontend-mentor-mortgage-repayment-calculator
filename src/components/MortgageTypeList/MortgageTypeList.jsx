import React from "react";
import MortgageType from "../MortgageType/MortgageType";

const MortgageTypeList = ({ mortgageTypes, title, onChange, selectedMortgageType, error  }) => {
  return (
    <>
      <h2 className="col-span-4 text-slate-700">{title}</h2>
      <ul className="space-y-2 col-span-4">
        {mortgageTypes.map((type) => (
          <MortgageType
            key={type.value}
            {...type}
            onChange={() => onChange(type.value)}
            checked={selectedMortgageType === type.value}
          />
        ))}
      </ul>
      {error && <p className="text-red text-sm mt-1 col-span-4">{error}</p>}
    </>
  );
};

export default MortgageTypeList;
