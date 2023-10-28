import { useRouter } from "next/router";
import React from "react";

function Card({ ticker, price, volume, change_amount, change_percentage }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${ticker}`)}
      className="bg-slate-400 p-10 m-2 cursor-pointer"
    >
      <h1 className="text-black">{ticker}</h1>
    </div>
  );
}

export default Card;