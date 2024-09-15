import React from "react";
import TextInput from "./components/TextInput/TextInput.jsx";
import MortgageTypeList from "./components/MortgageTypeList/MortgageTypeList.jsx";
import CalculateRepaymentsBtn from "./components/CalculateRepaymentsBtn/CalculateRepaymentsBtn.jsx";

// - Lime: hsl(61, 70%, 52%)
// - Red: hsl(4, 69%, 50%)

// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Slate 100: hsl(202, 86%, 94%)
// - Slate 300: hsl(203, 41%, 72%)
// - Slate 500: hsl(200, 26%, 54%)
// - Slate 700: hsl(200, 24%, 40%)
// - Slate 900: hsl(202, 55%, 16%)
// - Weights: 500, 700

const app = () => {
  const mortgageTypes = [
    { value: "repayment", label: "Repayment" },
    { value: "interest-only", label: "Interest Only" },
  ];

  return (
    // wrapper
    <div className="flex h-full w-full items-center justify-center">
      <main className="grid grid-cols-2 h-fit max-w-4_5xl bg-white rounded-2xl">
        {/* calculator */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-2 bg-white rounded-l-2xl p-10">
          <h1 className="text-2xl text-slate-900 col-span-3 mb-8 font-bold">
            Mortgage calculator
          </h1>
          <button className="underline text-right align-top mb-8 text-slate-700 hover:text-slate-900">
            Clear all
          </button>
          <TextInput
            title="Mortgage Amount"
            innerText="£"
            isLeft={true}
            colSpan={4}
          />
          <TextInput
            title="Mortgage Term"
            innerText="years"
            isLeft={false}
            colSpan={2}
          />
          <TextInput
            title="Interest Rate"
            innerText="%"
            isLeft={false}
            colSpan={2}
          />

          <MortgageTypeList
            mortgageTypes={mortgageTypes}
            title="Mortgage type"
          />

          <CalculateRepaymentsBtn />
        </div>
        <div className="bg-slate-900 flex flex-col items-center justify-center p-10 rounded-r-2xl rounded-bl-gigaxl">
          <img
            src="src\assets\images\illustration-empty.svg"
            alt=""
            className="w-fit"
          />
          <h1 className="text-white text-2xl mb-4">Results shown here</h1>
          <p className="text-slate-300 text-center">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be
          </p>
        </div>
      </main>
    </div>
  );
};

export default app;
