import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { setSearchTerm } = useRecipeStore();

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
