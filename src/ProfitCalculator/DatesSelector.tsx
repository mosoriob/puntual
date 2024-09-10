import React from 'react';
import styled from 'styled-components';
import BasicDateCalendar from '../components/BasicDateCalendar';
import dayjs from 'dayjs';

interface DateSelectorProps {
  startDate: dayjs.Dayjs;
  setStartDate: (date: dayjs.Dayjs) => void;
  endDate: dayjs.Dayjs;
  setEndDate: (date: dayjs.Dayjs) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <DateSelectorWrapper>
      <SectionTitle>Select Dates</SectionTitle>
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
    </DateSelectorWrapper>
  );
};

const DateSelectorWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled.h2`
  color: #1a1a1a;
  font: 700 24px Proxima Nova, sans-serif;
`;
