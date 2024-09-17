import React, { useState } from "react";
import TextInput from "./components/TextInput/TextInput.jsx";
import MortgageTypeList from "./components/MortgageTypeList/MortgageTypeList.jsx";
import CalculateRepaymentsBtn from "./components/CalculateRepaymentsBtn/CalculateRepaymentsBtn.jsx";
import Results from "./components/Results/Results.jsx";

const App = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const mortgageTypes = [
    { value: "repayment", label: "Repayment" },
    { value: "interest-only", label: "Interest Only" },
  ];

  const calculateRepayments = () => {
    const principal = parseFloat(mortgageAmount);
    const annualRate = parseFloat(interestRate) / 100 / 12;
    const totalPayments = parseFloat(mortgageTerm) * 12;

    let monthlyPayment;
    let totalAmount;

    if (mortgageType === "repayment") {
      monthlyPayment =
        (principal * annualRate * Math.pow(1 + annualRate, totalPayments)) /
        (Math.pow(1 + annualRate, totalPayments) - 1);
    } else {
      // Interest-only calculation
      monthlyPayment = principal * annualRate;
    }

    totalAmount = totalPayments * monthlyPayment;
    setMonthlyRepayment(monthlyPayment.toFixed(2));
    setTotalRepayment(totalAmount);
    setShowResults(true);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <main className="grid grid-cols-2 h-fit max-w-4_5xl bg-white rounded-2xl">
        <div className="grid grid-cols-4 gap-x-4 gap-y-2 bg-white rounded-l-2xl p-10">
          <h1 className="text-2xl text-slate-900 col-span-3 mb-8 font-bold">
            Mortgage calculator
          </h1>
          <button
            className="underline text-right align-top mb-8 text-slate-700 hover:text-slate-900"
            onClick={() => {
              setMortgageAmount("");
              setMortgageTerm("");
              setInterestRate("");
              setMortgageType("repayment");
              setMonthlyRepayment(null);
              setShowResults(false);
            }}
          >
            Clear all
          </button>
          <TextInput
            title="Mortgage Amount"
            innerText="£"
            isLeft={true}
            colSpan={4}
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
          />
          <TextInput
            title="Mortgage Term"
            innerText="years"
            isLeft={false}
            colSpan={2}
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
          />
          <TextInput
            title="Interest Rate"
            innerText="%"
            isLeft={false}
            colSpan={2}
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <MortgageTypeList
            mortgageTypes={mortgageTypes}
            title="Mortgage type"
            onChange={(value) => setMortgageType(value)}
          />
          <CalculateRepaymentsBtn onClick={calculateRepayments} />
        </div>
        <div
          className={`bg-slate-900 ${
            showResults ? "" : "flex"
          } flex-col items-center justify-center p-10 rounded-r-2xl rounded-bl-gigaxl`}
        >
          {!showResults ? (
            <>
              <img
                src="src\assets\images\illustration-empty.svg"
                alt=""
                className="w-fit"
              />
              <h1 className="text-white text-2xl mb-4">Results shown here</h1>
              <p className="text-slate-300 text-center">
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be
              </p>
            </>
          ) : (
            <Results
              monthlyRepayment={monthlyRepayment}
              totalRepayment={totalRepayment}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
