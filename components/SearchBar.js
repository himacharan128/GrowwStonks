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
        placeholder="  Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}></button>
    </div>
  );
}

export default SearchBar