# Puntual - Portfolio Profit and Annualized Return Calculator

This project is a simple web application for calculating the profit and annualized return of a stock portfolio between two dates. The app is built using Vite, React, and Material UI (MUI) for the frontend.

The portfolio is fixed and consists of the following stocks:

- Apple Inc. (AAPL) x 10 shares
- Microsoft Corporation (MSFT) x 10 shares

The class logic for calculating the profit and annualized return is located in the [`src/models/portfolio.ts`](src/models/portfolio.ts) file.

## Features

- Select start and end dates using a date picker.
- Calculate the profit between the selected dates.
- Calculate the annualized return based on the portfolio's profit.
- Responsive design with Material UI components.

## Live Demo

Check out the live demo of the app: [Puntual App](https://puntual.netlify.app/)

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/mosoriob/puntual.git
```

2.  **Navigate to the project folder**:

```bash
cd puntual
```

3.  Install dependencies\*\*:

```bash
npm install
```

4.  **Run the development server**:

```bash
npm run dev
```

4.  Open `http://localhost:5173` in your browser to view the application.

## Usage

1.  Use the date picker to select the start and end dates.
2.  The app will display the portfolio's profit and annualized return based on the selected dates.

## Technologies Used

- **Vite**: A fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Material UI (MUI)**: A popular React UI framework.
