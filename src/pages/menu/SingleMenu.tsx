import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Category from "../../components/Category";
import Spinner from "../../components/Spinner";

interface itemProp {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
}

function SingleMenu() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<itemProp[]>([]);
  const mealDb = import.meta.env.VITE_MEALDB_URL;

  const { menuitem } = useParams();

  const category = async (menuitem: string | undefined) => {
    try {
      const response =
        await fetch(`${mealDb}/api/json/v1/1/search.php?s=${menuitem}
      `);
      const { meals } = await response.json();

      setItems(meals);

      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    category(menuitem);
  }, []);

  const singleItem = items ? items.slice(0, 10) : null;

  return (
    <div className="pb-10">
      <h1 className="text-3xl Font-bold text-deep-gray text-center mb-10">
        MEAL CATEGORIES
      </h1>
      {loading && <Spinner />}
      <div
        className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
      sm:grid-cols-1 mx-auto  gap-5 w-5/6"
      >
        {items &&
          singleItem?.map((meal) => {
            return <Category key={meal.idMeal} meal={meal} />;
          })}
      </div>

      {singleItem === null && (
        <div className="flex justify-center space-x-10 items-center">
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <p className="capitalize text-xl">
            category unavialable pls try again.
          </p>
        </div>
      )}
    </div>
  );
}

export default SingleMenu;
