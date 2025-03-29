import React from "react";
import useRecipeStore from "./recipeStore";

// Link", "react-router-dom
const RecipeList = () => {
    const { filteredRecipes } = useRecipeStore();
  
    return (
      <div>
        <h2>Recipes</h2>
        {filteredRecipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          <ul>
            {filteredRecipes.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default RecipeList;
