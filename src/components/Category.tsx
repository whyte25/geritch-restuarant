import { Link } from "react-router-dom";

interface MealProp {
  strMeal: string;
  strMealThumb: string;
}

interface CategoryProp {
  meal: MealProp;
}

function Category({ meal }: CategoryProp) {
  const { strMeal: name, strMealThumb: image } = meal;

  return (
    <div className="border p-2 text-center text-deep-gray text-sm border-cream">
      <Link to={`/menu/category/${name}`}>
        <img src={image} alt="" />
        <p className="mt-1">{name}</p>
      </Link>
    </div>
  );
}

export default Category;
