"use client";
import Card from '@components/home/Card';
import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [selectedTab, setSelectedTab] = useState('Top Gainers');
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { topGainers, topLosers } = await getTopGainersLosers();
        setTopGainers(topGainers);
        setTopLosers(topLosers);
      } catch (error) {
      }
    }

    fetchData();
  }, []);

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
          topGainers.map((gainer, index) => (
            <Card key={index} data={gainer} />
          ))}

        {selectedTab === 'Top Losers' &&
          topLosers.map((loser, index) => (
            <Card key={index} data={loser} />
          ))}
      </div>
    </div>
  );
};

export default Explore;
