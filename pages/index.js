import { useState } from "react";
import Card from "../components/Card";

export default function Home({ top_gainers, top_losers }) {
  const [displayStocks, setDisplayStocks] = useState(top_gainers);
  const [gainersClick, setGainersClick] = useState(true);
  const [isLoading, setIsLoading] = useState(true);


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
      <div className="p-3 flex justify-center">
        <button
          className={`${
            gainersClick
              ? "text-indigo-400 bg-gray-600"
              : "text-black bg-gray-300"
          } px-4 py-2 mx-2 rounded-lg focus:outline-none`}
          onClick={handleGainerClick}
        >
          Top Gainers
        </button>
        <button
          className={`${
            !gainersClick
              ? "text-indigo-400 bg-gray-600"
              : "text-black bg-gray-300"
          } px-4 py-2 mx-2 rounded-lg focus:outline-none`}
          onClick={handleLoserClick}
        >
          Top Losers
        </button>
      </div>

      {isLoading ? (
        <div className="text-center mt-4">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex">
          {displayStocks.map((item) => (
            <Card
              key={item.ticker}
              ticker={item.ticker}
              price={item.price}
              volume={item.volume}
              change_amount={item.change_amount}
              change_percentage={item.change_percentage}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = `http://localhost:3000/api/topGainersLosers`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const data = await response.json();
    const top_gainers = data?.top_gainers || [];
    const top_losers = data?.top_losers || [];

    return {
      props: {
        top_gainers,
        top_losers,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
