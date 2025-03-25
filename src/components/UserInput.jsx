export default function UserInput({ onValueChange, investmentDetails }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={investmentDetails.initialInvestment}
            onChange={onValueChange}
            required
          />
        </div>

        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={investmentDetails.annualInvestment}
            onChange={onValueChange}
            required
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={investmentDetails.expectedReturn}
            onChange={onValueChange}
            required
          />
        </div>

        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={investmentDetails.duration}
            onChange={onValueChange}
            required
          />
        </div>
      </div>
    </section>
  );
}
