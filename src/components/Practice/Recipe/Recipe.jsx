// components/Recipe/Recipe.jsx

export default function Recipe({ recipe }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={recipe.image}
        alt="레시피 이미지"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{recipe.name}</h3>
      <p className="text-gray-600 mb-2">
        요리 시간: {recipe.prepTimeMinutes + recipe.cookTimeMinutes}분
      </p>
      <p className="text-gray-600 mb-2">난이도: {recipe.difficulty}</p>
      <p className="text-gray-600">칼로리: {recipe.caloriesPerServing}kcal</p>
    </div>
  );
}
