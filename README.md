GrowwStonks - Stocks Explorer[document.pdf](https://github.com/himacharan128/GrowwStonks/files/13200775/document.pdf)


GrowwStonks is a stocks web application built with Next.js, React, and TailwindCSS. Users can search and explore stocks and view price charts.
![Screenshot 2023-10-30 at 4 55 56 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/b6486957-cca1-45ad-84ce-88b1777e7d8d)
![Screenshot 2023-10-30 at 04-56-18 Screenshot](https://github.com/himacharan128/GrowwStonks/assets/82611545/f47c5794-5b4a-4e4d-942b-58db68b21174)
![Screenshot 2023-10-30 at 4 57 00 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/f830c54a-2eea-43d3-8c80-ac97a57dbb22)![Screenshot 2023-10-30 at 4 57 21 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/f4dfcdf4-8b11-423e-9123-a9c1029d6edb)![Screenshot 2023-10-30 at 4 58 17 AM](https://github.com/himacharan128/GrowwStonks/assets/82611545/a0978256-72bd-4590-bd3a-36d23349a8ec)




Features

    Search stocks with autocomplete suggestions
    View top gaining and losing stocks
    Click stock to see overview and price chart
    Light and dark theme
    Responsive design for mobile and desktop

Demo

Live demo hosted on Vercel: https://groww-stonks-gamma.vercel.app/
Local Development
Prerequisites

    Node.js
    npm

Installation

    Clone the repo

Copy code
git clone https://github.com/username/growwstonks

    Install dependencies

Copy code
npm install

    Add environment variables

Copy the .env.local.example file to .env.local and add your AlphaVantage API key

    Run the dev server

Copy code
npm run dev

Open http://localhost:3000 to view the app.
Technologies

    Next.js - React framework for server-side rendering and static site generation
    React - Frontend library for building UI
    Tailwind CSS - Utility-first CSS framework for styling
    Alpha Vantage API - Provides stock data
    Vercel - Deployment and hosting platform
    Redis - In-memory data store, used for caching

File Structure

    pages - Next.js page components
        _app.js - Custom app component
        index.js - Home page
        stocks/[ticker].js - Dynamic stock details page
    components - Reusable React components
    styles - Tailwind CSS and global styles
    utils - Helper modules and utilities
    public - Static assets

Contributing

Contributions are welcome! Please open an issue or submit a pull request.
License

This project is open source and available under the MIT License.
