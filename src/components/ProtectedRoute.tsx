import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

interface ChildrenProp {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ChildrenProp) => {
  const user = auth.currentUser;

  if (!user) {
    toast.dark("Please log in to view wishlist");
  }
  return !user ? <Navigate to="/" /> : <>{children}</>;
};
