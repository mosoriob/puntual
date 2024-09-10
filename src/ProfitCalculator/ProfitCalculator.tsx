import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { CardHeader } from './CardHeader';
import { DateSelector } from './DatesSelector';
import { ValueDisplay } from './ProfitDisplay';
import dayjs, { Dayjs } from 'dayjs';
import { Portfolio, Stock } from '../models/portafolio';
import { CardHeader } from './CardHeader';

export const ProfitCalculator = ({}) => {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs('2023-01-03'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs('2024-08-30'));
  const [profit, setProfit] = useState<number | null>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const portfolio = new Portfolio();
    portfolio.addStock(new Stock('AAPL', 10));
    portfolio.addStock(new Stock('MSFT', 20));
    try {
      const profit = portfolio.profit(startDate.toDate(), endDate.toDate());
      setError(null);
      setProfit(profit);
    } catch (e) {
      setProfit(null);
      setError(e.message);
    }
  }, [startDate, endDate]);

  return (
    <Card>
      <LeftSection>
        <CardHeader />
      </LeftSection>
      <Divider />
      <RightSection>
        <DateSelector
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <ValueDisplay value={profit} title="Profit" />
            <ValueDisplay value={profit} title="Profit" />
          </>
        )}
      </RightSection>
    </Card>
  );
};

const Card = styled.section`
  display: flex;
  max-width: 800px;
  padding: var(--none, 0px) 24px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;

  border-radius: 8px;
  border: 1px solid rgba(26, 26, 26, 0.1);
  background: #fff;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  font-family: Proxima Nova, sans-serif;
`;

const Divider = styled.hr`
  background-color: rgba(26, 26, 26, 0.1);
  align-self: stretch;
  width: 1px;
  height: 592px;
  margin: auto 0;
  border: none;
`;

const RightSection = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
`;