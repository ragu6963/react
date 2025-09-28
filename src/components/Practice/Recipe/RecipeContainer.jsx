// components/Recipe/RecipeContainer.jsx

import Recipe from "./Recipe";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await axios.get("https://dummyjson.com/recipes");
      const data = response.data;
      setRecipes(data.recipes);
    }

    fetchRecipes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
