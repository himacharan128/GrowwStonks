


# GrowwStonks - Stocks Explorer Web App
[document.pdf](https://github.com/himacharan128/GrowwStonks/files/13200775/document.pdf)
## Overview

GrowwStonks is a web application built with Next.js that allows users to explore and view information on stocks and ETFs. The app has two main pages:

- Explore Page - Shows top gainers and losers using data from Alpha Vantage API.
- Stock/ETF Details Page - Displays overview and price chart for a specific stock or ETF.
![Screenshot 2023-10-30 at 4 55 56 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/b6486957-cca1-45ad-84ce-88b1777e7d8d)
![Screenshot 2023-10-30 at 04-56-18 Screenshot](https://github.com/himacharan128/GrowwStonks/assets/82611545/f47c5794-5b4a-4e4d-942b-58db68b21174)
![Screenshot 2023-10-30 at 4 57 00 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/f830c54a-2eea-43d3-8c80-ac97a57dbb22)![Screenshot 2023-10-30 at 4 57 21 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/f4dfcdf4-8b11-423e-9123-a9c1029d6edb)![Screenshot 2023-10-30 at 4 58 17 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/a0978256-72bd-4590-bd3a-36d23349a8ec)
## Key Features

- Search stocks/ETFs with autocomplete suggestions.
- View top gainers and losers cards.
- Click stock card to see details page.
- Details page has a price chart, overview, and stats.
- Responsive UI for mobile and desktop.
- Light/dark theme toggle.
- Caching and Server-Side Rendering (SSR) to optimize performance.

## Data and APIs

Stock data is fetched from the Alpha Vantage API, and a free API key is required. The main endpoints used are:

- AlphaIntelligence -> TopGainersLosers
- Fundamentaldata -> Companyoverview
- CorestocksAPIs -> Tickersearch

API responses are cached to optimize requests.

## Pages

### Explore Page

- Shows top gaining and losing stocks in tabs.
- Fetches data from /api/topGainersLosers endpoint, which caches the API response.
- Renders Card components in a grid layout, 20 cards per tab.
- Load more button to fetch the next set of cards.
- Clicking a card navigates to the stock details page.

### Stock Details Page

- Dynamic page that accepts stock ticker as a param.
- Fetches stock overview and time series weekly adjusted data from the API.
- Renders overview details and chart of prices.
- Tabs for company information and financial metrics.
- Stock symbol is prefetched server-side if possible.

## Components

- SearchBar - Autocomplete search input that queries ticker search API.
- Card - Displays stock info like name, price, change.
- Header, Footer - Shared header and footer.
- Layout - Wraps pages and provides a consistent layout.
- ThemeToggle - Button to switch between light/dark theme.

## Styling

Tailwind CSS is used for styling along with some custom CSS. Includes configurations for purge/whitelist and theme customization.

## State Management

React useState and useEffect hooks are used for local state management. For more complex scenarios, React Query or Redux could be added.

## Server Side Rendering

Initial page data is prefetched at build time in getStaticProps/getServerSideProps. Further data is loaded on the client side.

## Optimization

- Caching of API requests.
- Image optimization via Next.js Image.
- CDN for assets.
- Lazy loading components/data.
- Server-side rendering where possible.

## Testing

- Unit tests for individual components/functions.
- Integration tests for key pages.
- Manual testing across devices/browsers.

## Installation and Local Development

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/himacharan128/GrowwStonks.git