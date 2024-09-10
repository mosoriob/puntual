import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { CardHeader } from './CardHeader';
import { DateSelector } from './DatesSelector';
import { ValueDisplay } from './ProfitDisplay';
import dayjs, { Dayjs } from 'dayjs';
import { Portfolio, Stock } from '../models/portfolio';
import { CardHeader } from './CardHeader';

export const ProfitCalculator = ({}) => {
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
        endDate.toDate()
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
            {profit && (
              <ValueDisplay value={`$ ${profit.toFixed(4)}`} title="Profit" />
            )}
            {annualizedReturn && (
              <ValueDisplay
                value={`${annualizedReturn?.toFixed(4)} %`}
                title="Annualized Return"
              />
            )}
          </>
        )}
      </RightSection>
    </Card>
  );
};

const Card = styled.section`
  display: flex;
  max-width: 800px;
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
  @media only screen and (max-width: 400px) {
    padding: 24px 12px;
  }
  @media only screen and (min-width: 401px) {
    padding: 24px;
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

  @media only screen and (max-width: 768px) {
    height: 1px;
    width: 100%;
  }
  @media only screen and (min-width: 769px) {
    height: 600px;
    width: 1px;
  }

  margin: auto 0;
  border: none;
`;

const RightSection = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
`;
