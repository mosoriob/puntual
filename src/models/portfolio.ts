import APPL from './AAPL.json';
import MSFT from './MSFT.json';

const MILISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
const DAYS_IN_A_YEAR = 365;

export class Stock {
  name: string;
  shares: number;
  priceData: { [date: string]: number };

  constructor(name: string, shares: number) {
    this.name = name;
    this.shares = shares;
    switch (name) {
      case 'AAPL':
        this.priceData = APPL;
        break;
      case 'MSFT':
        this.priceData = MSFT;
        break;
      default:
        throw new Error(`No price data available for stock '${name}'`);
    }
  }
  price(date: Date): number {
    const dateStr = formatToISODate(date);
    return this.priceData[dateStr];
  }
}

export class Portfolio {
  stocks: Stock[];

  constructor() {
    this.stocks = [];
  }

  addStock(stock: Stock): void {
    this.stocks.push(stock);
  }

  private calculatePortfolioValue(date: Date): number {
    let value = 0;
    for (const stock of this.stocks) {
      const price = stock.price(date);
      if (price === undefined) {
        throw new Error(errorMessageNoDataForDate(stock.name, date));
      }
      value += price * stock.shares;
    }
    return value;
  }

  profit(startDate: Date, endDate: Date): number {
    const startValue = this.calculatePortfolioValue(startDate);
    const endValue = this.calculatePortfolioValue(endDate);
    return endValue - startValue;
  }

  // Calculate annualized return between two dates using the formula from
  // https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/annual-return/
  // https://www.investopedia.com/terms/a/annual-return.asp
  annualizedReturn(startDate: Date, endDate: Date): number {
    const startValue = this.calculatePortfolioValue(startDate);
    const endValue = this.calculatePortfolioValue(endDate);

    // Calculate the time difference in years
    const daysDiff = calculateDifferenceInDays(startDate, endDate);
    const yearsDiff = daysDiff / DAYS_IN_A_YEAR;
    if (startValue === 0) {
      throw new Error(
        'Start value of the portfolio is zero, cannot compute annualized return',
      );
    }
    if (yearsDiff === 0) {
      throw new Error(
        'Time difference is zero, cannot compute annualized return',
      );
    }

    // Calculate annualized return
    const annualizedReturn = (endValue / startValue) ** (1 / yearsDiff) - 1;

    return annualizedReturn * 100;
  }
}

const calculateDifferenceInDays = (startDate: Date, endDate: Date): number => {
  return (endDate.getTime() - startDate.getTime()) / MILISECONDS_IN_A_DAY;
};

const errorMessageNoDataForDate = (stockName: string, date: Date): string => {
  return `No price data available for stock '${stockName}' on the given date ${formatToISODate(
    date,
  )}`;
};

const formatToISODate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
