import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase.config";
import Button from "../components/Button";

interface DataProp {
  id: string;
  name: string;
  category: string;
  area: string;
  instruction: string;
  image: string;
}

function WishList() {
  const [data, setData] = useState<DataProp[]>([]);
  const user = auth.currentUser;

  useEffect(() => {
    try {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        setData(doc.data()?.wishlist);
      });
    } catch (error) {}
  }, [user?.email]);

  const docRef = doc(db, "users", `${user?.email}`);

  const handleDelete = async (id: string) => {
    try {
      const result = data.filter((item) => item.id !== id);

      await updateDoc(docRef, {
        wishlist: result,
      });
      toast.success("item removed");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" w-[80%] min-h-screen md:w-full md:px-4 sm:px-2 pb-10 mx-auto">
      <h3 className="text-2xl mb-5">
        Wishlist ({data.length === 0 ? "empty" : data.length})
      </h3>
      <div className=" flex space-y-5 flex-col">
        {data.map((item) => {
          const { name, image, category, area, id, instruction } = item;
          return (
            <>
              <div
                key={id}
                className="bg-black/90 rounded-md shadow-2xl py-2 px-3 flex items-start"
              >
                <Link to={`/search/${name}`} className=" flex-1 ">
                  <div className="flex">
                    <img
                      className="w-32 h-32 - object-cover"
                      src={image}
                      alt={name}
                    />
                    <div className="ml-5 md:ml-2 ">
                      <p className="mt-1 md:mt-0 md:text-sm">
                        name:{" "}
                        <span className="text-sm text-deep-gray">{name}</span>
                      </p>
                      <p className="md:text-sm">
                        area:{" "}
                        <span className="text-sm text-deep-gray">{area}</span>
                      </p>
                      <p className="md:text-sm">
                        category:{" "}
                        <span className="text-sm text-deep-gray">
                          {category}
                        </span>
                      </p>
                      <p className="md:hidden">
                        instruction:{" "}
                        <span className="text-sm text-deep-gray">
                          {instruction.substring(0, 100)} ...read more
                        </span>
                      </p>
                      <p className="md:block hidden text-sm">
                        instruction:{" "}
                        <span className="text-sm text-deep-gray">
                          {instruction.substring(0, 30)} ...read more
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
                <div
                  onClick={() => handleDelete(id)}
                  className="flex items-center  p-2 rounded-md md:hidden group cursor-pointer hover:opacity-60 bg-black-alt w-fit"
                >
                  <AiOutlineDelete
                    className="group-hover:animate-bounce"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="text-sm text-deep-gray">Remove item</p>
                </div>
                <div
                  onClick={() => handleDelete(id)}
                  className="  p-2 rounded-md     bg-black-alt w-fit md:block hidden"
                >
                  <AiOutlineDelete />
                </div>
              </div>
            </>
          );
        })}
        {(data.length === 0 || data === null) && (
          <div className="bg-black/90 rounded-md shadow-2xl py-4 px-3 flex items-center justify-center flex-col space-y-8">
            <h3 className="text-xl sm:text-base font-bold">
              Your wishlist is empty!
            </h3>

            <p className="text-sm sm:text-[12px] text-deep-gray">
              Search or Browse our categories and discover our best meals!
            </p>
            <Button>
              <Link to="/">home</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishList;
