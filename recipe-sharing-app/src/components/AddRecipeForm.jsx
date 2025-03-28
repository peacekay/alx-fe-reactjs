import React, { useState } from "react";
import useRecipeStore from "../recipeStore";

const AddRecipeForm = () => {
  const [recipe, SetRecipe] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (recipe.trim() === "") return;
    addRecipe(recipe);
    SetRecipe("");
  };
  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipe}
          onChange={(e) => SetRecipe(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
