import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

interface BasicDateCalendarProps {
  value: dayjs.Dayjs;
  setValue: (newValue: dayjs.Dayjs) => void;
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
  label?: string;
}

export default function BasicDateCalendar({
  value,
  setValue,
  minDate,
  maxDate,
  label,
}: BasicDateCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => newValue !== null && setValue(newValue)}
        minDate={minDate}
        maxDate={maxDate}
      />
    </LocalizationProvider>
  );
}
