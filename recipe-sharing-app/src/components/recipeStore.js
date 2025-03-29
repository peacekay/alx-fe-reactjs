import { create } from "zustand";

// setRecipes
const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: " ",

  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

    updateRecipe: (updatedRecipe) => set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  
    setSearchTerm: (term) => set({ searchTerm: term }),
  
    filteredRecipes: () => {
      const { recipes, searchTerm } = get();
      return recipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    },

  
}));

export default useRecipeStore;
