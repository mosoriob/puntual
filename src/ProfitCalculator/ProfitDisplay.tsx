import React from 'react';
import styled from 'styled-components';

interface ValueDisplayProps {
  title: string;
  value: number | string;
}

export const ValueDisplay: React.FC<ValueDisplayProps> = ({ title, value }) => {
  return (
    <ProfitWrapper>
      <ProfitTitle>{title}</ProfitTitle>
      <ProfitAmount>{value}</ProfitAmount>
    </ProfitWrapper>
  );
};

const ProfitWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const ProfitTitle = styled.div`
  color: #1a1a1a;
  font-family: 'Proxima Nova';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 33px */
`;

const ProfitAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1a1a1a;

  text-align: center;
  font-family: 'Proxima Nova';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
