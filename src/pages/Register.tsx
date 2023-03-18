import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import GoogleOAuth from "../components/GoogleOAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/UserAuthContext";

interface FormDataProp {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleRegistration } = useAuth();

  const [formData, setFormData] = useState<FormDataProp>({
    name: "",
    email: "",
    password: "",
  });

  const { name, password, email } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRegistration(email, password, name, formData);
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password as string
    //   );

    //   setDoc(doc(db, "users", email), {
    //     wishlist: [],
    //   });

    //   // updating user
    //   const user = userCredential.user;
    //   updateProfile(auth.currentUser!, {
    //     displayName: name,
    //   });

    //   // set the user details to firestore
    //   const formDataCopy = { ...formData };
    //   delete formDataCopy.password;
    //   await setDoc(doc(db, "users", user.uid), formDataCopy);

    //   // redirecting to home page after succesful registration
    //   navigate("/");
    // } catch (error) {
    //   toast.error("Something Went Wrong with registration");
    // }
  };

  return (
    <>
      <div className=" w-full    z-50 shadow-lg">
        <div className="max-w-[450px] max-h-fit pl-4 mx-auto bg-black text-white ">
          <div className="mx-auto py-16 max-w-[320px]">
            <h1 className="text-3xl font-bold capitalize">sign up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col pt-4">
              <input
                onChange={handleChange}
                value={name}
                name="name"
                className="p-3 my-2 outline-none text-black placeholder:text-black  bg-white rounded sm:w-[95%]"
                type="text"
                placeholder="Name"
              />
              <input
                onChange={handleChange}
                value={email}
                name="email"
                className="p-3 my-2 outline-none text-black placeholder:text-black  bg-white rounded sm:w-[95%]"
                type="email"
                placeholder="Email"
              />
              <div className="flex items-center relative">
                <input
                  value={password}
                  name="password"
                  onChange={handleChange}
                  className="p-3 my-2 outline-none text-black placeholder:text-black w-full  bg-white rounded sm:w-[95%] "
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-0 cursor-pointer left-[94%] top-[40%] sm:left-[88%]"
                >
                  {showPassword ? (
                    <AiFillEyeInvisible fill="#000" />
                  ) : (
                    <AiFillEye fill="#000" />
                  )}
                </div>
              </div>

              <button className="bg-cream text-black py-3 my-6 rounded font-bold sm:w-[95%]">
                Sign Up
              </button>
            </form>
            <div className="flex justify-between items-center text-sm text-gray-600 sm:w-[95%]">
              <p>
                <input type="checkbox" /> Remember me
              </p>
              <Link
                to="/forgotten-password"
                className="text-sm sm:text-[12px] text-deep-gray"
              >
                Forgotten Password{" "}
              </Link>
            </div>
            <p className="py-4 flex justify-between sm:w-[95%]">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login">Log In</Link>
            </p>
            <div className="flex  items-center justify-between sm:w-[95%]">
              <div className="h-[1px] w-2/5 bg-deep-gray"></div>
              <p className="text-white">OR</p>
              <div className="h-[1px] w-2/5 bg-deep-gray"></div>
            </div>
            <GoogleOAuth />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
