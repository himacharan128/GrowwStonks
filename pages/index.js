import Head from "next/head";
import Image from "next/image";

export default function Home({ top_gainers, top_losers }) {
  // Here are your top gainers and top losers
  console.log(top_gainers);
  return <div></div>;
}

export async function getServerSideProps(context) {
  const apiKey = "6U9NA5NYY4LZ8YAS";

  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    return {
      notFound: true, // Return a 404 error page if the API request fails
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
