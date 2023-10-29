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
  const hrStyle = {
    border: "1px solid black", // Set the border color to black
  };
  const triangleStyle = {
    color: isPositiveChange ? "green" : isNegativeChange ? "red" : "black",
  };

  const triangleSymbol = isPositiveChange ? "▲" : isNegativeChange ? "▼" : "";
  const formattedChangePercentage = change_percentage.replace("-", "");
  return (
    <Link href={`/${ticker}`}>
      <div className="bg-slate-400 p-4 m-4 cursor-pointer rounded-md shadow-md text-center">
        <div className="flex justify-between mb-2">
          <p className="text-lg font-bold text-black">{ticker}</p>
          <p className="text-base font-semibold" style={triangleStyle}>
            {triangleSymbol} {formattedChangePercentage}
          </p>
        </div>
        <hr className="mb-2" style={hrStyle} />

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
