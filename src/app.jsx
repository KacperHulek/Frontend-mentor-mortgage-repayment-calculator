import React, { useState } from "react";
import TextInput from "./components/TextInput/TextInput.jsx";
import MortgageTypeList from "./components/MortgageTypeList/MortgageTypeList.jsx";
import CalculateRepaymentsBtn from "./components/CalculateRepaymentsBtn/CalculateRepaymentsBtn.jsx";
import Results from "./components/Results/Results.jsx";

const App = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState({});

  const mortgageTypes = [
    { value: "repayment", label: "Repayment" },
    { value: "interest-only", label: "Interest Only" },
  ];

  const validateInputs = () => {
    const newErrors = {};

    if (
      !mortgageAmount ||
      isNaN(mortgageAmount) ||
      parseFloat(mortgageAmount) <= 0
    ) {
      newErrors.mortgageAmount = "Please enter a valid mortgage amount";
    }

    if (
      !mortgageTerm ||
      isNaN(mortgageTerm) ||
      parseInt(mortgageTerm) <= 0 ||
      !Number.isInteger(parseFloat(mortgageTerm))
    ) {
      newErrors.mortgageTerm = "Please enter a valid mortgage term in years";
    }

    if (
      !interestRate ||
      isNaN(interestRate) ||
      parseFloat(interestRate) < 0 ||
      parseFloat(interestRate) > 100
    ) {
      newErrors.interestRate =
        "Please enter a valid interest rate between 0 and 100";
    }

    if (!mortgageType) {
      newErrors.mortgageType = "Please select a mortgage type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRepayments = () => {
    if (validateInputs()) {
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
      setMonthlyRepayment(
        monthlyPayment
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setTotalRepayment(
        totalAmount
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setShowResults(true);
    }
  };

  const handleInputChange = (setter) => (e) => {
    const { value, name } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, "");

    // Ensure only one decimal point
    const parts = numericValue.split(".");
    const formattedValue = parts[0] + (parts.length > 1 ? "." + parts[1] : "");

    setter(formattedValue);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <main className="md:grid grid-cols-2 h-fit max-w-4_5xl bg-white rounded-2xl">
        <div className="grid grid-cols-4 gap-x-4 gap-y-2 bg-white rounded-l-2xl p-6 sm:p-10 ">
          <h1 className="text-2xl text-slate-900 col-span-4 md:col-span-3 md:mb-8 font-bold">
            Mortgage calculator
          </h1>
          <button
            className="underline text-left md:text-right align-top mb-8 text-slate-700 hover:text-slate-900 text-nowrap"
            onClick={() => {
              setMortgageAmount("");
              setMortgageTerm("");
              setInterestRate("");
              setMortgageType("");
              setMonthlyRepayment(null);
              setShowResults(false);
              setErrors({});
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
            onChange={handleInputChange(setMortgageAmount)}
            error={errors.mortgageAmount}
            name="mortgageAmount"
          />
          <TextInput
            title="Mortgage Term"
            innerText="years"
            isLeft={false}
            colSpan={2}
            value={mortgageTerm}
            onChange={handleInputChange(setMortgageTerm)}
            error={errors.mortgageTerm}
            name="mortgageTerm"
          />
          <TextInput
            title="Interest Rate"
            innerText="%"
            isLeft={false}
            colSpan={2}
            value={interestRate}
            onChange={handleInputChange(setInterestRate)}
            error={errors.interestRate}
            name="interestRate"
          />
          <MortgageTypeList
            mortgageTypes={mortgageTypes}
            title="Mortgage type"
            onChange={(value) => {
              setMortgageType(value);
              setErrors((prevErrors) => ({ ...prevErrors, mortgageType: "" }));
            }}
            selectedMortgageType={mortgageType}
            error={errors.mortgageType}
          />
          <CalculateRepaymentsBtn onClick={calculateRepayments} />
        </div>
        <div
          className={`bg-slate-900 ${
            showResults ? "" : "flex"
          } flex-col items-center justify-center p-6 sm:p-10 md:rounded-r-2xl md:rounded-bl-gigaxl`}
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
