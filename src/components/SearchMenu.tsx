import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import Loader from "./Loader";
import SearchResult from "./SearchResult";

interface SearchMenuProp {
  name: string | undefined;
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

function SearchMenu() {
  const [name, setName] = useState<string>("");
  const [searchItems, setSearchItems] = useState<SearchMenuProp[]>([]);
  const [loading, setLoading] = useState(false);
  const mealDb = import.meta.env.VITE_MEALDB_URL;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Pls enter something");
    } else {
      const searchMeal = async (name?: string) => {
        setLoading(true);
        try {
          const response =
            await fetch(`${mealDb}/api/json/v1/1/search.php?s=${name}
        `);
          const { meals } = await response.json();
          setSearchItems(meals);
          setLoading(false);
          setName("");
        } catch (error) {
          toast.error("could not fetch! try again");
          setLoading(false);
        }
      };
      searchMeal(name);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" w-3/6 md:w-4/6 sm:w-11/12">
        <div className="flex items-center justify-center ">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search Menu"
            name=""
            id=""
            className="p-3  my-2 outline-none text-black placeholder:text-black bg-white rounded-l w-10/12"
          />
          <button className="bg-light-cream py-3 rounded-r px-4 text-black-alt font-bold text-1xl">
            Search
          </button>
        </div>
      </form>
      {searchItems &&
        searchItems.length === 0 &&
        searchItems !== null &&
        !loading && (
          <p className="sm:text-center text-base font-bold md:text-[12px]">
            Search for meals or Select from the categories below
          </p>
        )}
      {loading && <Loader />}
      <div
        className={`grid
         ${
           searchItems?.length > 3
             ? "grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 px-4"
             : "grid-cols-1" && searchItems?.length === 2
             ? "grid-cols-2"
             : "grid-cols-1"
         } 
         sm:grid-cols-1 gap-5  justify-center`}
      >
        {searchItems &&
          searchItems?.map((meal) => {
            return <SearchResult key={meal.idMeal} meal={meal} />;
          })}
      </div>
      {searchItems === null && <p>Meal is not avaliable</p>}
    </>
  );
}

export default SearchMenu;
