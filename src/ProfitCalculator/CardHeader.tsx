import logo from '../assets/logo.png';

export const CardHeader = () => {
  const repositoryLink = 'https://github.com/mosoriob/puntual';
  return (
    <header className="flex w-full flex-col justify-start">
      <div className="flex flex-col items-start self-stretch">
        <div className="flex w-full flex-col font-bold justify-start">
          <img src={logo} className="w-16 h-16" alt="React logo" />
          <div className="flex mt-2 w-full flex-col justify-start">
            <h2 className="text-black text-base">Puntual Inc.</h2>
            <h1 className="text-black text-2xl">Profit Calculator</h1>
          </div>
        </div>
        <p className="text-black text-base font-normal leading-6 mt-6">
          This portfolio includes: 10 shares of MSFT (Microsoft) 10 shares of
          AAPL (Apple) The stock data is sourced using the Python yfinance
          library.
        </p>
      </div>
      <a
        href={repositoryLink}
        className="mt-3 w-full text-sm text-blue-500 font-normal no-underline hover:underline"
      >
        Github Repository
      </a>
    </header>
  );
};
