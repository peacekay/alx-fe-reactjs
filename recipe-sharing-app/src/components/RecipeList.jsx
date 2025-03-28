import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const { recipes, deleteRecipe } = useRecipeStore();

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? <p>No recipes yet!</p> : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> - {recipe.description}
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
