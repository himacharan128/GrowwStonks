import React from 'react';
const Card = ({ data }) => {
  const { ticker, price, change_amount, change_percentage, volume } = data;
  return (
    <div className="card p-4 bg-white rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold">{ticker}</h2>
      <div className="mt-2">
        <p className="text-gray-600">Price: {price}</p>
        <p className="text-gray-600">Change Amount: {change_amount}</p>
        <p className="text-gray-600">Change Percentage: {change_percentage}</p>
        <p className="text-gray-600">Volume: {volume}</p>
      </div>
    </div>
  );
};
export default Card;