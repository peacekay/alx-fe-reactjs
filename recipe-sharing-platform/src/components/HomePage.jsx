import { useState, useEffect } from "react";
import recipeData from "../data.json"
import AddRecipeForm from "./AddRecipeForm";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData); // Setting the recipe data to state
  }, []);

  return (
    // Link", "react-router-dom
    <div className="container mx-auto p-4">
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Recipe Sharing Platform</h1>
      <AddRecipeForm />
    </div>
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default HomePage;
