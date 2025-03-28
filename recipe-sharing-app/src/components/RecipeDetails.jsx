import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default RecipeDetails;
