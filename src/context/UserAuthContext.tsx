import react, { createContext, useContext, ReactNode, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface ChildrenProp {
  children: ReactNode;
}

interface FormDataProp {
  name: string;
  email: string;
  password: string;
}

interface UserAuthContextProp {
  handleGoogleOAuth: () => void;
  handleRegistration: (
    email: string,
    password: string,
    name: string,
    formData: any
  ) => void;
  handleLogin: (email: string, password: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const UserAuthContext = createContext<UserAuthContextProp | null>({
  handleGoogleOAuth: () => {},
  handleRegistration: () => {},
  handleLogin: () => {},
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
        navigate("/");
        toast.success("registration successfull");
      } else {
        navigate("/");
        toast.success("Login successfull");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Sign in new User
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
      await setDoc(doc(db, "users", `${user?.email}`), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with registration");
    }
  };

  // Login User
  const handleLogin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("Login successfully");
      navigate("/");
    } catch (error) {
      toast.error("Could not Login please check user credentials");
    }
  };

  return (
    <UserAuthContext.Provider
      value={{
        handleGoogleOAuth,
        handleRegistration,
        setFormData,
        handleLogin,
      }}
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
