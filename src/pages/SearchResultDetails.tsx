import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import AddToWishlist from "../components/AddToWishlist";

interface SingleMealProp {
  meal: [];
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
  strIngredient6: string;
  strIngredient7: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
}

function SearchResultDetails() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<SingleMealProp[]>([]);

  const { searchitem } = useParams();

  const fetchMenuDetails = async (searchitem: string | undefined) => {
    try {
      const response =
        await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}
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
    fetchMenuDetails(searchitem);
  }, []);

  //   show more or show less functionality
  const [showFullText, setShowFullText] = useState(false);

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="min-h-[80vh] pb-10">
      <h1 className="text-3xl  Font-bold text-deep-gray text-center sm:hidden  mb-10">
        MEAL DETAILS
      </h1>
      {items &&
        items.map((item) => {
          const {
            idMeal: id,
            strMeal: name,
            strCategory: category,
            strArea: area,
            strInstructions: instruction,
            strMealThumb: image,
            strIngredient1: ing1,
            strIngredient2: ing2,
            strIngredient3: ing3,
            strIngredient4: ing4,
            strIngredient5: ing5,
            strIngredient6: ing6,
            strIngredient7: ing7,
            strMeasure1: measure1,
            strMeasure2: measure2,
            strMeasure3: measure3,
            strMeasure4: measure4,
            strMeasure5: measure5,
            strMeasure6: measure6,
            strMeasure7: measure7,
          } = item;

          const ingredients = [
            {
              ing: ing1,
              measure: measure1,
            },
            {
              ing: ing2,
              measure: measure2,
            },
            {
              ing: ing3,
              measure: measure3,
            },
            {
              ing: ing4,
              measure: measure4,
            },
            {
              ing: ing5,
              measure: measure5,
            },
            {
              ing: ing6,
              measure: measure6,
            },
            {
              ing: ing7,
              measure: measure7,
            },
          ];

          return (
            <div key={id} className="w-5/6 mx-auto">
              <h1 className="text-3xl  Font-bold text-deep-gray text-center sm:text-start sm:block hidden mb-10">
                MEAL DETAILS
              </h1>
              <div className="flex  justify-between flex-row-reverse items-start">
                <AddToWishlist {...item} />
                <img
                  className="w-[40%] max-h-2/6 md:w-3/6 sm:w-5/6 object-cover"
                  src={image}
                  alt={name}
                />
              </div>

              <p className="mt-5 capitalize text-xl md:text-base">
                Name: {name}
              </p>

              <p className="mt-2 capitalize text-xl md:text-base">
                Area: {area}
              </p>
              <div className="mt-10 text-center sm:text-start">
                <h1 className="text-3xl Font-bold text-deep-gray  mb-3">
                  INGREDIENTS
                </h1>
                <div className=" grid grid-cols-2 mx-auto sm:m-0 border-b-2 border-y-deep-gray text-start sm:text-sm  w-7/12 md:w-9/12 sm:w-11/12">
                  {ingredients &&
                    ingredients.map((ings, i) => (
                      <>
                        <div
                          key={i}
                          className="border-l-2 py-2 pl-2 border-t-2  border-deep-gray "
                        >
                          {ings.ing || "N/A"}
                        </div>
                        <div className="border-t-2 py-2 border-deep-gray border-r-2 ">
                          {ings.measure || "N/A"}
                        </div>
                      </>
                    ))}
                </div>
              </div>

              <div className="mt-10 text-center sm:text-start">
                <h1 className="text-3xl Font-bold text-deep-gray  mb-3">
                  INSTRUCTIONS
                </h1>

                <p className="text-sm text-left">
                  {showFullText ? instruction : instruction.substring(0, 400)}{" "}
                  {showFullText && instruction.length > 400 && (
                    <button
                      className={`${
                        instruction.length < 400 ? "hidden" : "block"
                      }hover:border px-1`}
                      onClick={handleClick}
                    >
                      show less
                    </button>
                  )}
                  {!showFullText && instruction.length > 400 && (
                    <button
                      className={`${
                        instruction.length < 400 ? "hidden" : "block"
                      }hover:border px-1`}
                      onClick={handleClick}
                    >
                      ...read more
                    </button>
                  )}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SearchResultDetails;
