import { createContext, useContext, ReactNode, useReducer } from "react";
import MealDataReducer from "./MealDataReducer";

interface ChildrenProp {
  children: ReactNode;
}

interface initStateProp {
  category: [];
  // searchMeal: {};
  // SingleMenu: [];
  // SingleMeal: [];
  loading: boolean;
}

const MealDataContext = createContext({});
const MealDb_URL = import.meta.env.VITE_MEALDB_URL;

export const MealDataProvider = ({ children }: ChildrenProp) => {
  const initailState: initStateProp = {
    category: [],
    // searchMeal: {},
    // SingleMenu: [],
    // SingleMeal: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(initailState, MealDataReducer);

  return (
    <MealDataContext.Provider value={{}}>{children}</MealDataContext.Provider>
  );
};
