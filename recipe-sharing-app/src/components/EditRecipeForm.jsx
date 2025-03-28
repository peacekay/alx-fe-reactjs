import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, { title, description });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(`/recipe/${id}`)}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
