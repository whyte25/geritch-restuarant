import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "geritch-restaurant-bc14b.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_API_PROJECT_ID,
  storageBucket: "geritch-restaurant-bc14b.appspot.com",
  messagingSenderId: "648365968676",
  appId: import.meta.env.VITE_FIREBASE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
