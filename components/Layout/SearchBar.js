import { useRouter } from "next/router";
import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      fetchStockSymbols(value);
    } else {
      setSearchResults([]);
    }
  };

  const fetchStockSymbols = async (keywords) => {
    try {
      setLoading(true);
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const response = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.bestMatches || []);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching stock symbols:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnClick = (ticker) => {
    router.push(`/${ticker}`);
    setSearchResults([]);
  };

  return (
    <div className="flex flex-col relative">
      <input
        type="text"
        placeholder="Search stock symbols"
        value={searchTerm}
        onChange={handleChange}
        className="bg-neutral-200 p-2 rounded-xl font-bold outline-none text-black"
      />

      {loading && <p className="text-cyan-500 text-sm">Loading...</p>}
      {searchResults.length > 0 && (
        <div className="absolute max-h-60 overflow-y-scroll rounded-xl text-black shadow-lg bg-white w-full top-14 p-3">
          {searchResults.length > 0 && (
            <>
              <div className="flex space-x-2 p-2">
                <h1 className="bg-neutral-500 text-white font-semibold p-1 px-3 rounded-xl">
                  All
                </h1>
                <h1 className="bg-neutral-400 text-white font-semibold p-1  rounded-xl">
                  Stocks
                </h1>
                <h1 className="bg-neutral-400 text-white font-semibold p-1  rounded-xl">
                  Efts
                </h1>
              </div>
              <ul className="flex flex-col space-y-2 divide-y-2 p-2">
                {searchResults.map((result) => (
                  <li
                    onClick={() => handleOnClick(result["1. symbol"])}
                    className="p-1 cursor-pointer"
                    key={result["1. symbol"]}
                  >
                    {result["2. name"]}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
// import React, { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     console.log('Searching for:', searchTerm);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '8px' }}
//         className="rounded-full w-full py-2 px-4 text-black dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-growwOrange focus:border-transparent"
//       />
//       <button onClick={handleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2">
//         <FiSearch size={20} color="gray" />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;



