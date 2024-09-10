import APPL from './AAPL.json';
import MSFT from './MSFT.json';

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
  price(date: Date): number | undefined {
    const dateStr = date.toISOString().split('T')[0];
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

  profit(startDate: Date, endDate: Date): number {
    let startValue = 0;
    let endValue = 0;

    for (const stock of this.stocks) {
      const startPrice = stock.price(startDate);
      const endPrice = stock.price(endDate);
      if (startPrice === undefined) {
        throw new Error(errorMessageNoDataForDate(stock.name, startDate));
      }

      if (endPrice === undefined) {
        throw new Error(errorMessageNoDataForDate(stock.name, endDate));
      }
      startValue += startPrice * stock.shares;
      endValue += endPrice * stock.shares;
    }

    return endValue - startValue;
  }
}

const errorMessageNoDataForDate = (stockName: string, date: Date): string => {
  return `No price data available for stock '${stockName}' on the given date ${formatDate(
    date
  )}`;
};

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
