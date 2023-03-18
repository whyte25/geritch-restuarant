import react, { createContext, useContext, ReactNode, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react"; // import Dispatch type here

interface ChildrenProp {
  children: ReactNode;
}

interface FormDataProp {
  name: string;
  email: string;
  password: string; // Make password optional
}

interface UserAuthContextProp {
  handleGoogleOAuth: () => void;
  handleRegistration: (
    email: string,
    password: string,
    name: string,
    formData: any
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const UserAuthContext = createContext<UserAuthContextProp | null>({
  handleGoogleOAuth: () => {},
  handleRegistration: () => {},
  setFormData: () => {},
});

export const UserAuthContextProvider = ({ children }: ChildrenProp) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({});

  //function for google oAuth
  const handleGoogleOAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      const docRef = doc(db, "users", `${user?.email}`);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", `${user?.email}`), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        toast.success("registration successfull");
      }
      navigate("/");
      toast.success("Login successfull");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleRegistration = async (
    email: string,
    password: string,
    name: string,
    formData: any
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", email), {
        wishlist: [],
      });

      const user = userCredential.user;
      await updateProfile(auth.currentUser!, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with registration");
    }
  };

  return (
    <UserAuthContext.Provider
      value={{ handleGoogleOAuth, handleRegistration, setFormData }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuth = (): UserAuthContextProp => {
  const context = useContext(UserAuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
