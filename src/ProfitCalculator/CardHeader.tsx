import styled from 'styled-components';

export const CardHeader = () => {
  const repositoryLink = 'https://github.com/mosoriob/puntual';
  return (
    <HeaderWrapper>
      <TopSection>
        <InfoContainer>
          {/* <CompanyLogo src={logoSrc} alt={`${companyName} logo`} /> */}
          <TitleWrapper>
            <CompanyName>Puntual Inc.</CompanyName>
            <MainTitle>Profit Calculator</MainTitle>
          </TitleWrapper>
        </InfoContainer>
        <Description>
          This portfolio includes: 10 shares of MSFT (Microsoft) 10 shares of
          AAPL (Apple) The stock data is sourced using the Python yfinance
          library.
        </Description>
      </TopSection>
      <RepositoryLink href={repositoryLink}>Github Repository</RepositoryLink>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: 700;
  justify-content: start;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`;

const CompanyName = styled.h2`
  color: rgba(26, 26, 26, 0.6);
  font-size: 16px;
`;

const MainTitle = styled.h1`
  color: #1a1a1a;
  font-size: 28px;
`;

const Description = styled.p`
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 24px;
`;

const RepositoryLink = styled.a`
  margin-top: 12px;
  width: 100%;
  font-size: 14px;
  color: #0069ff;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
