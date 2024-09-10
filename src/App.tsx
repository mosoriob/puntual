import { useEffect, useState } from 'react';
import './App.css';
import BasicDateCalendar from './components/BasicDateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { Portfolio, Stock } from './models/portafolio';

function App() {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs('2023-01-03'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs('2024-08-30'));

  const [profit, setProfit] = useState<number>(0);

  useEffect(() => {
    const portfolio = new Portfolio();
    portfolio.addStock(new Stock('AAPL', 10));
    portfolio.addStock(new Stock('MSFT', 20));
    try {
      const profit = portfolio.profit(startDate.toDate(), endDate.toDate());
      setProfit(profit);
    } catch (e) {
      console.error(e.message());
    }
  }, [startDate, endDate]);

  return (
    <>
      <BasicDateCalendar
        label="Start Date"
        value={startDate}
        setValue={setStartDate}
        maxDate={endDate}
      />
      <BasicDateCalendar
        label="End Date"
        value={endDate}
        setValue={setEndDate}
        minDate={startDate}
      />
      <span>{profit}</span>
    </>
  );
}

export default App;
