import React from "react";
import smallCalculator from "src/assets/images/icon-calculator.svg";
const CalculateRepaymentsBtn = ({ onClick }) => {
  return (
    <button
      className="col-span-4 md:col-span-3 rounded-full h-12 bg-lime flex align justify-center items-center mt-6 hover:bg-opacity-65
     active:bg-darkLime transition-colors transition-opacity"
      onClick={onClick}
    >
      <img src={smallCalculator} alt="" className="w-fit mr-2" />
      <p className="font-bold text-slate-900 block h-fit">
        Calculate Repayments
      </p>
    </button>
  );
};

export default CalculateRepaymentsBtn;
