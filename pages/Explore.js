"use client";
import React, { useState } from 'react';

const Explore = () => {
  const [selectedTab, setSelectedTab] = useState('Top Gainers');
  const topGainersData = [1,2,3,4];
  const topLosersData = [5,6,7,8];

  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            value="Top Gainers"
            checked={selectedTab === 'Top Gainers'}
            onChange={handleTabChange}
          />
          <span className="ml-2">Top Gainers</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            value="Top Losers"
            checked={selectedTab === 'Top Losers'}
            onChange={handleTabChange}
          />
          <span className="ml-2">Top Losers</span>
        </label>
      </div>

      <div className="card-grid">
        {selectedTab === 'Top Gainers' &&
          topGainersData.map((item, index) => (
            <h1>CARD DATA</h1>
          ))}
        {selectedTab === 'Top Losers' &&
          topLosersData.map((item, index) => (
            <h1>CARD DATA</h1>
          ))}
      </div>
    </div>
  );
};

export default Explore;