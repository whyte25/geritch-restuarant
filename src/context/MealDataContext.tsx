import { createContext, useContext, ReactNode, useReducer } from "react";

interface ChildrenProp {
  children: ReactNode;
}

interface initStateProp {
  menu: [];
  category: [];
}

const MealDataContext = createContext({});

export const MealDataProvider = ({ children }: ChildrenProp) => {
  return (
    <MealDataContext.Provider value={{}}>{children}</MealDataContext.Provider>
  );
};
