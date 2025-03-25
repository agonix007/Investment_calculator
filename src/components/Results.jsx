import { formatter } from "../util/investment";

export default function Results({ annualData, initialInvestment }) {
  let sumOfTotalInterest = 0;
  let investedCapital = initialInvestment;

  for (const detail of annualData) {
    sumOfTotalInterest += detail.interest;
    detail.totalInterest = sumOfTotalInterest;

    investedCapital += detail.annualInvestment;
    detail.investedCapital = investedCapital;
  }

  return (
    <section>
      {annualData.length === 0 ? (
        <p className="center">Please enter a reasonable duration!</p>
      ) : (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {annualData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(data.totalInterest)}</td>
                <td>{formatter.format(data.investedCapital)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
