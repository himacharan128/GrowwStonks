import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";

export default function Home({ top_gainers, top_losers }) {
  const [displayStocks, setDisplayStocks] = useState(top_gainers);
  const [gainersClick, setGainersClick] = useState(true);
  const handleGainerClick = (e) => {
    e.preventDefault();
    setDisplayStocks(top_gainers);
    setGainersClick(true);
  };

  const handleLoserClick = (e) => {
    e.preventDefault();
    setDisplayStocks(top_losers);
    setGainersClick(false);
  };
  return (
    <div>
      <div className="bg-neutral-200 p-3 content-around flex">
        <button
          className={`${gainersClick ? " text-sky-500" : "text-black "}`}
          onClick={handleGainerClick}
        >
          Top Gainers
        </button>
        <button
          className={`${!gainersClick ? " text-sky-500" : "text-black "}`}
          onClick={handleLoserClick}
        >
          Top Losers
        </button>
      </div>

      <div className="flex">
        {displayStocks.map((item) => (
          <Card
            ticker={item.ticker}
            price={item.price}
            volume={item.volume}
            change_amount={item.change_amount}
            change_percentage={item.change_percentage}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const apiKey = "6U9NA5NYY4LZ8YAS";

  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const data = await response.json();
  const top_gainers = data?.top_gainers;
  const top_losers = data?.top_losers;

  return {
    props: {
      top_gainers,
      top_losers,
    },
  };
}

