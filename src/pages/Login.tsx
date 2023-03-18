import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import GoogleOAuth from "../components/GoogleOAuth";
import ForgottenPassword from "./ForgottenPassword";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

interface FormDataProp {
  email: string;
  password: string;
}

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormDataProp>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { password, email } = formData;

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password as string
      );
      const user = userCredential.user;
      toast.success("login successfully");
      navigate("/");
    } catch (error) {
      toast.error("Could not Login please check user credentials");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className=" w-full pt-5 z-50 shadow-lg  ">
        <div className="max-w-[450px] max-h-fit mx-auto  bg-black text-white pl-4">
          <div className="mx-auto py-16 max-w-[320px] ">
            <h1 className="text-3xl font-bold capitalize">Log In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col pt-4">
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
                  className="p-3 my-2 outline-none text-black placeholder:text-black w-full sm:w-[95%]  bg-white rounded "
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
                Login
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
              <span className="text-gray-600 text-sm">
                Don't have an account?{" "}
              </span>
              <Link to="/register">Sign Up</Link>
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
