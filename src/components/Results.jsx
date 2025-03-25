import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const annualData = calculateInvestmentResults(input);
  const initialInvestment = input.initialInvestment;

  // let sumOfTotalInterest = 0;
  // for (const detail of annualData) {
  //   sumOfTotalInterest += detail.interest;
  //   detail.totalInterest = sumOfTotalInterest;

  //   investedCapital += detail.annualInvestment;
  //   detail.investedCapital = investedCapital;
  // }

  return (
    <section>
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
          {annualData.map((data) => {
            const totalInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment;

            const investedCapital = data.valueEndOfYear - totalInterest;

            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
