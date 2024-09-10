import { useState } from 'react';
import './App.css';
import BasicDateCalendar from './components/BasicDateCalendar';
import dayjs, { Dayjs } from 'dayjs';

function App() {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs('2023-01-03'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs('2024-08-30'));

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
    </>
  );
}

export default App;
