import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json'; // Assuming you have a data.json file

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe from data based on the ID
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded-lg shadow-lg mb-6"
        />
        <p className="text-lg text-gray-600 mb-6">{recipe.summary}</p>

        <h2 className="text-3xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-3xl font-semibold mt-6 mb-3">Cooking Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      </div>
  );
}

export default RecipeDetail;
