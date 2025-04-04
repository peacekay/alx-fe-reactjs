import { useState } from 'react';

function AddRecipeForm() {
  // State to store input values
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // State to handle validate errors
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    const newErrors = {};

    if (!title) newErrors.title = 'Title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!steps) newErrors.steps = 'Preparation steps are required.';

    // Ensure ingredients has at least 2 items
    const ingredientsList = ingredients.split(',').map(item => item.trim());
    if (ingredientsList.length < 2) newErrors.ingredients = 'Please provide at least two ingredients.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, log the data (you can later send it to an API)
    console.log({ title, ingredientsList, steps });
    
    // Clear the form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="ingredients">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.ingredients && <p className="text-red-500 text-xs">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="steps">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.steps && <p className="text-red-500 text-xs">{errors.steps}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
