import React, { useState } from 'react';
import useDebounce from './useDebounce';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce((term) => {
    console.log('Searching for:', term);
    // Perform search operation here
  }, 300);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search..."
    />
  );
}