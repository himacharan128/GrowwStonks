import { useRouter } from "next/router";
import React from "react";
import temporaryData from "../utils/tempCompanyOverview.json";
import chartData from "../utils/chartData.json";
import { Chart } from "react-google-charts";

function Company({ companyData }) {
  const weeklyData = chartData["Weekly Adjusted Time Series"];
  const chartDetails = Object.entries(weeklyData).map(([date, data]) => {
    return [
      date,
      parseFloat(data["1. open"]),
      parseFloat(data["2. high"]),
      parseFloat(data["3. low"]),
      parseFloat(data["4. close"])
    ];
  });

  const chartOptions = {
    title: "Weekly Stock Prices",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      title: "Date"
    },
    vAxis: {
      title: "Price"
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto p-4">
      <div className="flex space-x-2 mb-4 items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 text-black">{companyData.Name}</h1>
        <div className="flex space-x-2">
          <div className=" flex flex-col text-white bg-gray-400 rounded-xl px-4">
            <h1 className="font-semibold">Symbol</h1>
            <h1>{companyData.Symbol}</h1>
          </div>
          <div className="flex flex-col text-white bg-gray-400 rounded-xl px-4">
            <h1 className="font-semibold">Exchange</h1>
            <h1>{companyData.Exchange}</h1>
          </div>
        </div>
      </div>

      {/* Name */}

      {/* Symbol and Exchange (side by side) */}
      {/* <div className="flex text-black mb-3 bg-slate-300 px-6">
        <div className="w-1/2">
          <div className="font-medium">Symbol</div>
          {companyData.Symbol}
        </div>
        <div className="w-1/2">
          <div className="font-medium">Exchange</div>
          {companyData.Exchange}
        </div>
      </div> */}

      {/* Chart */}
      <div className="p-4 border-2 rounded-xl border-gray-200">
        <Chart
          chartType="LineChart"
          width={"100%"}
          height={400}
          data={[
            ["Date", "Open Price", "High Price", "Low Price", "Close Price"],
            ...chartDetails
          ]}
          options={chartOptions}
        />
      </div>

      {/* About Company */}
      <div className="p-4 mt-4 border-2 rounded-xl border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-black">About Company</h2>
        <p className="text-black mb-4">{companyData.Description}</p>

        {/* Sector and Industry Tabs */}
        <div className=" border-gray-400">
          <ul className="flex space-x-1">
            <li className="w-1/2 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">Sector</li>
            <li className="w-1/2 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">Industry</li>
          </ul>
          <div className="p-4">
            <div className="border-t border-gray-200">
              <div className="flex">
                <div className="w-1/2 text-center py-2 text-black">{companyData.Sector}</div>
                <div className="w-1/2 text-center py-2 text-black">{companyData.Industry}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 52 Week Low and High */}
        <div className="border-t border-gray-200">
          <div className="flex">
            <div className="w-1/2 border-r border-gray-200 text-center py-2 text-black">
              52 Week Low: {companyData['52WeekLow']}
            </div>
            <div className="w-1/2 text-center py-2 text-black">
              52 Week High: {companyData['52WeekHigh']}
            </div>
          </div>
        </div>

        {/* Market Data Tabs */}
        <div className="border-t border-gray-200 mt-2">
          <ul className="flex space-x-1">
            <li className="w-1/5 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">Market Cap</li>
            <li className="w-1/5 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">P/E Ratio</li>
            <li className="w-1/5 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">Beta</li>
            <li className="w-1/5 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">Dividend Yield</li>
            <li className="w-1/5 text-center py-2 bg-gray-400 cursor-pointer rounded-xl">Profit Margin</li>
          </ul>
          <div className="p-4">
            <div className="border-t border-gray-200">
              <div className="flex">
                <div className="w-1/5 text-center py-2 text-black">
                  {companyData.MarketCap === "None" ? "N/A" : companyData.MarketCapitalization}
                </div>
                <div className="w-1/5 text-center py-2 text-black">
                  {companyData.PERatio === "None" ? "N/A" : companyData.PERatio}
                </div>
                <div className="w-1/5 text-center py-2 text-black">
                  {companyData.Beta === "None" ? "N/A" : companyData.Beta}
                </div>
                <div className="w-1/5 text-center py-2 text-black">
                  {companyData.DividendYield === "None" ? "N/A" : companyData.DividendYield}
                </div>
                <div className="w-1/5 text-center py-2 text-black">
                  {companyData.ProfitMargin === "None" ? "N/A" : companyData.ProfitMargin}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;



export async function getServerSideProps(context) {
  const { params } = context;
  const { ticker } = params;

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }
  const companyData = await response.json();
  // const companyData=temporaryData
  return {
    props: {
      companyData,
    },
  };
}