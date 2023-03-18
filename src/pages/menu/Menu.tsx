import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import MenuItem from "../../components/MenuItem";
import SearchMenu from "../../components/SearchMenu";
import SingleMenu from "./SingleMenu";

interface categoriesProp {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

function Menu() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<categoriesProp[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        const { categories } = await response.json();
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        toast.error("could not fetch! check your network");
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section
      id="menu"
      className="menu sm:px-3 lg:py-16 py-28 bg-black/70  flex flex-col items-center"
    >
      <SearchMenu />

      {loading && <Loader />}
      <div className="grid place-content-center grid-cols-3 md:grid-cols-2 sm:gap-2 gap-5 pt-7">
        {categories.map((item) => (
          <>
            <MenuItem item={item} />
          </>
        ))}
      </div>
    </section>
  );
}

export default Menu;
