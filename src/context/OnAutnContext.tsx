import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { User } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Navigate } from "react-router-dom";

interface ChildrenProp {
  children: ReactNode;
}

export const OnAuthContext = createContext<User | null>(null);

// export const useOnAuthContext = () => useContext(OnAuthContext);

export const OnAuthContextProvider = ({ children }: ChildrenProp) => {
  const [user, setUser] = useState<User | null>(null);

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         setUser(user);
  //         Navigate("/");
  //       } else {
  //         Navigate("/login");
  //       }
  //     });

  //     return unsubscribe;
  //   }, []);

  return (
    <OnAuthContext.Provider value={user}>{children}</OnAuthContext.Provider>
  );
};
