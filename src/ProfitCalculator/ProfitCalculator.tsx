import { useEffect, useState } from 'react';
import { CardHeader } from './CardHeader';
import { DateSelector } from './DatesSelector';
import { ValueDisplay } from './ProfitDisplay';
import dayjs, { Dayjs } from 'dayjs';
import { Portfolio, Stock } from '../models/portfolio';
import { ErrorWrapper } from '../components/ErrorWrapper';

export const ProfitCalculator = () => {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs('2023-01-03'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs('2024-08-30'));
  const [profit, setProfit] = useState<number | null>(0);
  const [annualizedReturn, setAnnualizedReturn] = useState<number | null>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const portfolio = new Portfolio();
    portfolio.addStock(new Stock('AAPL', 10));
    portfolio.addStock(new Stock('MSFT', 10));
    try {
      const profit = portfolio.profit(startDate.toDate(), endDate.toDate());
      const annualizedReturn = portfolio.annualizedReturn(
        startDate.toDate(),
        endDate.toDate(),
      );
      setError(null);
      setProfit(profit);
      setAnnualizedReturn(annualizedReturn);
    } catch (e) {
      setProfit(null);
      setAnnualizedReturn(null);
      setError((e as Error).message);
    }
  }, [startDate, endDate]);

  return (
    <section className="flex flex-wrap rounded-lg border bg-white lg:p-6 p-2 gap-4">
      <CardHeader />
      <hr className="w-full bg-gray-200 border-none" />
      <div className="flex flex-col gap-8 flex-grow">
        <DateSelector
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <ErrorWrapper error={error}>
          <ValueDisplay
            value={profit}
            title="Profit"
            precision={4}
            prefixSymbol="$"
          />
          <ValueDisplay
            value={annualizedReturn}
            title="Annualized Return"
            precision={2}
            suffixSymbol="%"
          />
        </ErrorWrapper>
      </div>
    </section>
  );
};
