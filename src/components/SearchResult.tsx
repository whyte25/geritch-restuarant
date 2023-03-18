import { Link } from "react-router-dom";

interface MealProp {
  strMeal: string;
  strMealThumb: string;
}

interface SearchProp {
  meal: MealProp;
}

function SearchResult({ meal }: SearchProp) {
  const { strMeal: name, strMealThumb: image } = meal;

  return (
    <div className="border max-w-[220px] p-2 mt-5 text-center text-deep-gray text-sm border-cream">
      <Link to={`/search/${name}`} className="">
        <img src={image} alt={name} className="object-cover" />
        <p className="mt-1">{name}</p>
      </Link>
    </div>
  );
}

export default SearchResult;
