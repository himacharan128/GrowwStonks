import { useRouter } from "next/router";
import React from "react";

function Stock({ stockData }) {
  console.log(stockData);
  return <div>Stock</div>;
}

export default Stock;

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

  const stockData = await response.json();

  return {
    props: {
      stockData,
    },
  };
}
