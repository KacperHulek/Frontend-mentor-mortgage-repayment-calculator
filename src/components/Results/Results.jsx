import React from "react";

const Results = () => {
  return (
    <>
      <h1 className="text-lg">Your results</h1>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <div>
        <h2>Your monthly repayments</h2>
        <p>£1234</p>
        {/* horizontal line */}
        <h2>Total you'll repay over the term</h2>
        <p>£4321</p>
      </div>
    </>
  );
};

export default Results;
