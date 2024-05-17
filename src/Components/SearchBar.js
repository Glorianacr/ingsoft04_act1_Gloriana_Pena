import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar películas..."
      />
    </form>
  );
};

export default SearchBar;
