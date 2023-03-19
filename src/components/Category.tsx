import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { encode } from "blurhash";
import { Blurhash } from "react-blurhash";

interface MealProp {
  strMeal: string;
  strMealThumb: string;
}

interface CategoryProp {
  meal: MealProp;
}

function Category({ meal }: CategoryProp) {
  const { strMeal: name, strMealThumb: image } = meal;
  const [blurhash, setBlurhash] = useState<string>("");
  const [recipeImage, setRecipeImage] = useState<HTMLImageElement>();
  const [recipeImageLoading, setRecipeImageLoading] = useState<boolean>(true);
  const [placeholderBlurhash, setPlaceholderBlurhash] = useState<string>(
    "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  );

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setRecipeImage(img);
      setRecipeImageLoading(false);
    };
    img.onerror = () => {
      setRecipeImageLoading(false);
    };
    img.src = image;
  }, [image]);

  return (
    <div className="border p-2 text-center text-deep-gray text-sm border-cream">
      <Link to={`/menu/category/${name}`}>
        {recipeImageLoading ? (
          <Blurhash
            hash={placeholderBlurhash}
            width={200}
            height={200}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        ) : (
          <img src={recipeImage?.src} alt={image} />
        )}

        <p className="mt-1">{name}</p>
      </Link>
    </div>
  );
}

export default Category;
