import Link from "next/link";

function Card({ ticker, price, volume, change_amount, change_percentage }) {
  return (
    <Link href={`/stock/${ticker}`}>
      <div className="bg-slate-400 p-10 m-2 cursor-pointer">
        <p className="text-black">{ticker}</p>
        <p className="text-black">{price}</p>
        <p className="text-black">{volume}</p>
        <p className="text-black">{change_amount}</p>
        <p className="text-black">{change_percentage}</p>
      </div>
    </Link>
  );
}

export default Card;
