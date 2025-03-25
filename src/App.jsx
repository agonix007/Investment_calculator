import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { calculateInvestmentResults } from "./util/investment";

const INVESTMENT_DETAILS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 5,
};

function App() {
  const [investmentDetails, setInvestmentDetails] =
    useState(INVESTMENT_DETAILS);

  function handleValueChange(event) {
    setInvestmentDetails((prevInvestmentDetails) => {
      return {
        ...prevInvestmentDetails,
        [event.target.id]: +event.target.value,
      };
    });
  }

  const annualData = calculateInvestmentResults(investmentDetails);
  const initialInvestment = investmentDetails.initialInvestment;

  return (
    <>
      <Header />
      <UserInput
        onValueChange={handleValueChange}
        investmentDetails={investmentDetails}
      />
      <Results annualData={annualData} initialInvestment={initialInvestment} />
    </>
  );
}

export default App;
