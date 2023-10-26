"use client"

import React, { useState } from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-none rounded-full w-full py-2 px-4 text-black 
                dark:text-white font-semibold focus:outline-none 
                  focus:ring-2 focus:ring-growwOrange focus:border-transparent"
      />
      <button onClick={handleSearch}></button>
    </div>
  );
}

export default SearchBar