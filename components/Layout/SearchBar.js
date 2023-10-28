import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-none rounded-full w-full py-2 px-4 text-black dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-growwOrange focus:border-transparent"
      />
      <button onClick={handleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <FiSearch size={20} color="gray" />
      </button>
    </div>
  );
};

export default SearchBar;