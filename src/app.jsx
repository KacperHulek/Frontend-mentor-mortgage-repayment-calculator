import React from "react";

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
  return (
    // wrapper
    <div className="flex h-full w-full items-center justify-center">
      <main className="grid grid-cols-2 h-fit max-w-4_5xl bg-white rounded-2xl">
        {/* calculator */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-2 bg-white rounded-l-2xl p-10">
          <h1 className="text-2xl text-slate-900 col-span-3 mb-8 font-bold">
            Mortgage calculator
          </h1>
          <button className="underline text-right align-top mb-8 text-slate-700">
            Clear all
          </button>
          <label
            htmlFor="mortgage-amount"
            className="col-span-4 text-slate-700"
          >
            Mortgage Amount
          </label>
          <div className="flex col-span-4 border border-slate-500 rounded-md overflow-hidden">
            <div className="h-full text-center w-12 bg-slate-100 text-slate-700 flex items-center">
              <p className="text-center w-full font-bold">£</p>
            </div>
            <input
              type="text"
              name="mortgage-amount"
              className="w-full h-11 outline-none"
            />
          </div>
          <label htmlFor="mortgage-term" className="col-span-2 text-slate-700">
            Mortgage Term
          </label>
          <label htmlFor="interest-rate" className="col-span-2 text-slate-700">
            Interest Rate
          </label>

          <div className="flex col-span-2 border border-slate-500 rounded-md overflow-hidden">
            <input
              type="text"
              name="mortgage-term"
              className="w-full w-full h-11 outline-none"
            />
            <div className="h-full text-center w-28 bg-slate-100 text-slate-700 flex items-center">
              <p className="text-center w-full font-bold">years</p>
            </div>
          </div>

          <div className="flex col-span-2 border border-slate-500 rounded-md overflow-hidden">
            <input
              type="text"
              name="interest-rate"
              className="w-full h-11 outline-none"
            />
            <div className="h-full text-center w-14 bg-slate-100 text-slate-700 flex items-center">
              <p className="text-center w-full font-bold">%</p>
            </div>
          </div>

          <h2 className="col-span-4 text-slate-700">Mortgage type</h2>
          <label
            htmlFor="repayment"
            className="hover:cursor-pointer col-span-4 overflow-hidden"
          >
            <div className="flex flex-row items-center rounded-md border border-slate-500">
              <input
                type="radio"
                name="mortgage-type"
                id="repayment"
                value="repayment"
                className="h-11 w-5 ml-4"
              />
              <p className=" pl-4 font-bold text-slate-900 h-fit leading-none">
                Repayment
              </p>
            </div>
          </label>

          <label
            htmlFor="interest-only"
            className="hover:cursor-pointer col-span-4 overflow-hidden mb-5"
          >
            <div className="flex flex-row items-center rounded-md border border-slate-500">
              <input
              type="radio"
              name="mortgage-type"
              id="interest-only"
              value="interest-only"
                className="h-11 w-5 ml-4"
              />
              <p className=" pl-4 font-bold text-slate-900 h-fit leading-none">
              Interest Only
              </p>
            </div>
          </label>

          <button className="col-span-3 rounded-full h-12 bg-lime flex align justify-center items-center">
            <img src="src\assets\images\icon-calculator.svg" alt="" className="w-fit mr-2"/>
            <p className="font-bold text-slate-900 block h-fit">Calculate Repayments</p>
            </button>
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
