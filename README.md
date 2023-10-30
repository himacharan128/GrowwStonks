


# GrowwStonks - Stocks Explorer Web App
## Overview

GrowwStonks is a web application built with Next.js that allows users to explore and view information on stocks and ETFs. The app has two main pages:

- Explore Page - Shows top gainers and losers using data from Alpha Vantage API.
- Stock/ETF Details Page - Displays overview and price chart for a specific stock or ETF.
  
## Looks like..
<table>
  <tr>
    <td><img src="https://github.com/himacharan128/GrowwStonks/assets/82611545/b6486957-cca1-45ad-84ce-88b1777e7d8d" alt="Screenshot 1"></td>
    <td><img src="https://github.com/himacharan128/GrowwStonks/assets/82611545/f47c5794-5b4a-4e4d-942b-58db68b21174" alt="Screenshot 2"></td>
    <td><img src="https://github.com/himacharan128/GrowwStonks/assets/82611545/f830c54a-2eea-43d3-8c80-ac97a57dbb22" alt="Screenshot 3"></td>
    <td><img src="https://github.com/himacharan128/GrowwStonks/assets/82611545/f4dfcdf4-8b11-423e-9123-a9c1029d6edb" alt="Screenshot 4"></td>
    <td><img src="https://github.com/himacharan128/GrowwStonks/assets/82611545/a0978256-72bd-4590-bd3a-36d23349a8ec" alt="Screenshot 5"></td>
  </tr>
</table>

This code will create a table with five cells, each containing one of your screenshots. You can adjust the layout, size, and spacing of the images by modifying the HTML and applying CSS styles as needed. Make sure to replace the image URLs with the actual URLs of your screenshots.


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

## Dependencies

- Next.js: The core framework used for building the web application.
- ioredis: A Redis client library for caching API responses.
- React and React-DOM: Fundamental libraries for building the UI.
- react-google-charts: A library for displaying line graphs.
- tailwindcss: A utility-first CSS framework for styling.
- Other dependencies for linting, theming, and handling next server-side rendering.
  
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

## Installation and Local Development

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/himacharan128/GrowwStonks.git
   
2. Navigate to the project directory:
   ```bash
   cd GrowwStonks
4. Install the dependencies:
   ```bash
   прm install
6. Obtain your Alpha Vantage API key and set it in the project. You can do this by creating a env.local file in the root of your project and adding your API key like this:
   ```bash
   ALPHA_VANTAGE_API_KEY=your-api-key-here
7. Start the development server:
npm run dev
8. Open your web browser and access the app at http://localhost:3000.
## Deployment
The app is deployed on Vercel and is hosted at https://groww-stonks-gamma.vercel.app/. The source code is available on GitHub at https:// github.com/himacharan128/GrowwStonks.
   
### Additional documentation [document.pdf](https://github.com/himacharan128/GrowwStonks/files/13200775/document.pdf)
   
   
