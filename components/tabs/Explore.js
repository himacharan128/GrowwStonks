'use client'

import { getTopGainers, getTopLosers } from "@api/data";
import Card from "@components/cards/Card";
import { useEffect, useState } from "react";

export default function Explore() {

  const [tab, setTab] = useState('Top Gainers');
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gainersData = await getTopGainers();
      setGainers(gainersData);
      console.log(gainersData);
      const losersData = await getTopLosers(); 
      setLosers(losersData);
    }

    fetchData();
  }, []);

  const handleTabChange = (e) => {
    setTab(e.target.value);
  }

  let content;
  if (tab === 'Top Gainers') {
    content = gainers.map(gainer => <Card key={gainer.id} data={gainer} />);
  } else if (tab === 'Top Losers') {
    content = losers.map(loser => <Card key={loser.id} data={loser} />);
  }

  return (
    <div className="explore-page">
      
      <div className="tabs flex justify-center my-4">

        <div className="inline-flex items-center">
          
          <label>
            <input 
              type="radio"
              name="tab"
              className="form-radio text-indigo-600"
              value="Top Gainers"
              checked={tab === 'Top Gainers'}
              onChange={handleTabChange}
            />
            <span className="ml-2">Top Gainers</span>
          </label>
        
          <label className="inline-flex items-center ml-4">
            <input
              type="radio" 
              name="tab"
              className="form-radio text-indigo-600"
              value="Top Losers"
              checked={tab === 'Top Losers'}
              onChange={handleTabChange}
            />
            <span className="ml-2">Top Losers</span>
          </label>

        </div>

      </div>

      <div className="content">
        {content}  
      </div>

    </div>
  );
}































// import Card from '@components/cards/Card';
// import React, { useState, useEffect } from 'react';
// const Explore = () => {
//   const [selectedTab, setSelectedTab] = useState('Top Gainers');
//   const [topGainers, setTopGainers] = useState([]);
//   const [topLosers, setTopLosers] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const { topGainers, topLosers } = await getTopGainersLosers();
//         setTopGainers(topGainers);
//         setTopLosers(topLosers);
//       } catch (error) {
//         console.log('Error fetching data', error);
//       }
//     }
//     fetchData();
//   }, []);
//   const handleTabChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedTab(selectedValue);
//   };
//   return (
//     <div>
//       <div className="flex justify-center my-4">
//         <label className="inline-flex items-center">
//           <input
//             type="radio"
//             className="form-radio text-indigo-600"
//             value="Top Gainers"
//             checked={selectedTab === 'Top Gainers'}
//             onChange={handleTabChange}
//           />
//           <span className="ml-2">Top Gainers</span>
//         </label>
//         <label className="inline-flex items-center ml-4">
//           <input
//             type="radio"
//             className="form-radio text-indigo-600"
//             value="Top Losers"
//             checked={selectedTab === 'Top Losers'}
//             onChange={handleTabChange}
//           />
//           <span className="ml-2">Top Losers</span>
//         </label>
//       </div>
//       <div className="card-grid">
//         {selectedTab === 'Top Gainers' &&
//           topGainers.map((gainer, index) => (
//             <Card key={index} data={gainer} />
//           ))}
//         {selectedTab === 'Top Losers' &&
//           topLosers.map((loser, index) => (
//             <Card key={index} data={loser} />
//           ))}
//       </div>
//     </div>
//   );
// };
// export default Explore;