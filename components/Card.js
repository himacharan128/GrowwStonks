import Link from "next/link";
import { useRouter } from "next/router";

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
    border: "1px solid black",
  };
  const triangleStyle = {
    color: isPositiveChange ? "green" : isNegativeChange ? "red" : "black",
  };

  const router = useRouter()

  const triangleSymbol = isPositiveChange ? "▲" : isNegativeChange ? "▼" : "";
  const formattedChangePercentage = change_percentage.replace("-", "");
  return (
    <div onClick={() => router.push(`/${ticker}`)}>
      <div className="bg-gray-400 p-4 m-4 cursor-pointer rounded-md shadow-md text-center">
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
    </div>
  );
}
export default Card;
