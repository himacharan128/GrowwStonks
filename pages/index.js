import { useEffect, useState } from "react";
import Card from "../components/Card";
import temporaryData from "../utils/temporaryData.json";

export default function Home({ top_gainers, top_losers }) {
  const [displayStocks, setDisplayStocks] = useState(top_gainers);
  const [gainersClick, setGainersClick] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Update loading state when data is fetched
  }, []);
  const handleGainerClick = (e) => {
    e.preventDefault();
    // console.log("Top Gainers clicked");
    setDisplayStocks(top_gainers);
    setGainersClick(true);
    // console.log("Top Gainers clicked");
  };
  
  const handleLoserClick = (e) => {
    e.preventDefault();
    // console.log("Top Losers clicked");
    setDisplayStocks(top_losers);
    setGainersClick(false);
  };
  

  return (
    <div>
      <div className="p-3 flex justify-center">
        <button
          className={`${
            gainersClick
            ?   "text-black bg-gray-300"
            :   "text-indigo-400 bg-gray-600"
          } px-4 py-2 mx-2 rounded-lg focus:outline-none`}
          onClick={handleGainerClick}
        >
          Top Gainers
        </button>
        <button
          className={`${
            !gainersClick
              ?   "text-black bg-gray-300"
              :   "text-indigo-400 bg-gray-600"
          } px-4 py-2 mx-2 rounded-lg focus:outline-none`}
          onClick={handleLoserClick}
        >
          Top Losers
        </button>
      </div>

      {loading ? (
        <div className="text-center mt-4">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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

    // const data = await response.json();
    // const top_gainers = data?.top_gainers || [];
    // const top_losers = data?.top_losers || [];

    const top_gainers = temporaryData?.top_gainers || [];
    const top_losers = temporaryData?.top_losers || [];
    // console.log(top_gainers)
    // console.log(top_losers)

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
