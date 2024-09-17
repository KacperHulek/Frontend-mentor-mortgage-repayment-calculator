import React from "react";

const Results = ({ monthlyRepayment, totalRepayment }) => {
  return (
    <>
      <h1 className="text-2xl text-white justify-items-start mb-4">
        Your results
      </h1>
      <p className="text-slate-300 mb-9">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <div
        className="bg-darkSlate rounded-md p-8 shadow-lime
      shadow-[0_-5px_0px_0px_rgba(0,0,0,0.3)]"
      >
        <h2 className="text-slate-300 mb-4">Your monthly repayments</h2>
        <p className="text-5xl text-lime mb-8">£{monthlyRepayment}</p>
        <hr className="h-0 my-8border border-slate-100 border-opacity-25 mb-8" />
        <h2 className="text-slate-300">Total you'll repay over the term</h2>
        <p className="text-white text-xl">£{totalRepayment}</p>
      </div>
    </>
  );
};

export default Results;
