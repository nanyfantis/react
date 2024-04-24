import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='search-bar-container' >
      <input
        className='search-bar-input'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
}

export default SearchBar;
