import Link from "next/link";

function Card({
  ticker,
  price,
  volume,
  change_amount,
  change_percentage,
}) {
  const isPositiveChange = parseFloat(change_amount) > 0;
  const isNegativeChange = parseFloat(change_amount) < 0;

  const triangleStyle = {
    color: isPositiveChange ? "green" : isNegativeChange ? "red" : "black",
  };

  const triangleSymbol = isPositiveChange ? "▲" : isNegativeChange ? "▼" : "";
  const formattedChangePercentage = change_percentage.replace("-", "");
  return (
    <Link href={`/stock/${ticker}`}>
      <div className="bg-slate-400 p-4 m-4 cursor-pointer rounded-md shadow-md text-center">
        {/* 1st Row */}
        <div className="flex justify-between mb-2">
          <p className="text-lg font-bold text-black">{ticker}</p>
          <p className="text-base font-semibold" style={triangleStyle}>
            {triangleSymbol} {formattedChangePercentage}
          </p>
        </div>
        <hr className="mb-2" />

        <div className="mb-2 text-sm">
          <p>Price: ${price}</p>
          <p>Volume: {volume}</p>
          <p>Change Amount: ${change_amount}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
