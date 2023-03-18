import {
  arrayUnion,
  doc,
  collection,
  query,
  orderBy,
  addDoc,
  getDoc,
  updateDoc,
  FieldValue,
  serverTimestamp,
} from "firebase/firestore";
import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase.config";

interface AddToWishlistProp {
  item?: [];
  id?: string;
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}

function AddToWishlist({
  idMeal,
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strMealThumb,
}: AddToWishlistProp) {
  const [wishlist, setWishlist] = useState(false);
  const user = auth.currentUser;

  const handleWishlist = async () => {
    const userid = doc(db, "users", `${user?.email}`);

    // if (user?.email) {
    //   await updateDoc(userid, {
    //     wishlist: arrayUnion({
    //       id: idMeal,
    //       name: strMeal,
    //       image: strMealThumb,
    //       instruction: strInstructions,
    //       area: strArea,
    //       category: strCategory,
    //     }),
    //   });

    if (userid) {
      // Get the user document
      const userDoc = doc(db, "users", `${user?.email}`);

      // Check if the item already exists in the wishlist
      const snapshot = await getDoc(userDoc);
      const wishlist = snapshot.data()?.wishlist || []; // Get the wishlist array or an empty array if it doesn't exist
      const itemExists = wishlist.some(
        (item: AddToWishlistProp) => item.id === idMeal
      );

      if (itemExists) {
        // If the item already exists, show an error message
        toast.error("Item already exists in wishlist!");
      } else {
        // If the item doesn't exist, add it to the wishlist array
        await updateDoc(userDoc, {
          wishlist: arrayUnion({
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            instruction: strInstructions,
            area: strArea,
            category: strCategory,
          }),
        });
        toast.success("added to Wishlist succesfully");
      }
    } else {
      toast.error("Please log in to add to wishlist.");
    }
  };

  return (
    <button title="Add to Wishlist" onClick={handleWishlist}>
      <AiOutlinePlusSquare style={{ width: "34px", height: "34px" }} />
    </button>
  );
}

export default AddToWishlist;
