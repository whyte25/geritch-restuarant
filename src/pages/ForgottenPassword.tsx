import { ChangeEvent, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function ForgottenPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email sent successfully");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[40%] md:w-[70%] sm:w-[90%] h-fit px-6 rounded-md bg-black text-white ">
          <div className="py-16 w-full">
            <h1 className="text-3xl sm:text-xl font-bold capitalize">
              Forgotten Password
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex  items-center mt-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                className="p-3  my-2 outline-none text-black placeholder:text-black w-full bg-white rounded-l"
                type="email"
                placeholder="Email"
              />

              <button className="bg-light-cream py-3 px-4 text-black-alt self-center text-1xl rounded-r">
                Send
              </button>
            </form>
            <p className="py-4 flex justify-between">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/register">Sign Up</Link>
            </p>
            <div className="w-2/5 ">
              <Button>
                <Link to="/">Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgottenPassword;
