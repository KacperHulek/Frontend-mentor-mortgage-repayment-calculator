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
    <div className="grid grid-cols-2">
      <h1>Mortgage calculator</h1>
      <button>Clear all</button>
      <label htmlFor="mortgage-amount" className="col-span-2">
        Mortgage Amount
      </label>
      <div className="flex col-span-2">
        <input type="text" name="mortgage-amount" className="w-full" />
      </div>
      <label htmlFor="mortgage-term">Mortgage Term</label>
      <label htmlFor="interest-rate">Interest Rate</label>
      <div className="flex">
        <input type="text" name="mortgage-term" />
      </div>
      <div className="flex">
        <input type="text" name="interest-rate" />
      </div>

      <div className="col-span-2 has-[:checked]:bg-blue-100">
        <input
          type="radio"
          name="mortgage-type"
          id="repayment"
          value="repayment"
        />
        <label htmlFor="repayment">Repayment</label>
      </div>

      <div className="col-span-2 has-[:checked]:bg-lime has-[:checked]:bg-opacity-30">
        <input 
          type="radio"
          name="mortgage-type"
          id="interest-only"
          value="interest-only"
        />
        <label htmlFor="interest-only">Interest Only</label>
      </div>

      <button>Calculate Repayments</button>
    </div>
  );
};

export default app;
