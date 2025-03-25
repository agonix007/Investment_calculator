import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INVESTMENT_DETAILS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 5,
};

function App() {
  const [investmentDetails, setInvestmentDetails] =
    useState(INVESTMENT_DETAILS);

  const inputIsValid = investmentDetails.duration >= 1;

  function handleValueChange(event) {
    setInvestmentDetails((prevInvestmentDetails) => {
      return {
        ...prevInvestmentDetails,
        [event.target.id]: +event.target.value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        onValueChange={handleValueChange}
        investmentDetails={investmentDetails}
      />
      {!inputIsValid && (
        <p className="center">Duration must be at least 1 year.</p>
      )}
      {inputIsValid && <Results input={investmentDetails} />}
    </>
  );
}

export default App;
