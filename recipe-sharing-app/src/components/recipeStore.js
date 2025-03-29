import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),
  addFavorite: (recipe) => set((state) => ({
    favorites: [...state.favorites, recipe]
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter(recipe => recipe.id !== id)
  })),
  getRecommendations: () => {
    const favorites = get().favorites;
    if (favorites.length === 0) return [];
    
    const allRecipes = get().recipes;
    return allRecipes.filter(recipe =>
      !favorites.includes(recipe) && 
      favorites.some(fav => recipe.ingredients.some(ing => fav.ingredients.includes(ing)))
    );
  }
}));

export default useRecipeStore;
