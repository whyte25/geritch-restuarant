import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/gericht.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import SideBar from "./SideBar";

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const name = user?.displayName;

  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      navRef.current,
        {
          duration: 1,
          y: "-100%",
          stagger: 0.5,
          ease: "power2.in",
        };
    });

    return () => ctx.revert();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="flex py-8 px-10 sm:px-5 text-white items-center justify-between"
    >
      <Link to="/">
        <img src={logo} className="w-32  object-cover" alt="logo" />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` hamburger focus:outline-none
            ${
              isOpen
                ? "md:fixed right-5 translate-y-7 sm:translate-y-0  z-50 open "
                : "md:block hidden"
            } 
        `}
      >
        <span className="hamburger-one"></span>
        <span className="hamburger-two"></span>
        <span className="hamburger-three"></span>
      </button>
      {isOpen && (
        <SideBar
          setIsOpen={setIsOpen}
          handleLogout={handleLogout}
          loggedIn={loggedIn}
          username={name}
        />
      )}

      <div className="flex w-2/5 text-sm text-deep-gray md:hidden  justify-between items-center ">
        <Link className="hover:text-white hover:duration-1000" to="/">
          Home
        </Link>
        <a className="hover:text-white hover:duration-1000" href="#menu">
          Menu
        </a>
        <a className="hover:text-white hover:duration-1000" href="#contact">
          Contact
        </a>
        <a className="hover:text-white hover:duration-1000" href="#about">
          About
        </a>
        <a className="hover:text-white hover:duration-1000" href="#chef">
          Chef
        </a>
      </div>
      <div className="flex items-center space-x-8 lg:space-x-4 md:hidden justify-between">
        <div className="flex items-center ">
          {loggedIn ? (
            <>
              <div className="flex items-center">
                <p>Welcome, {name || "Chief"} </p>
                <div className="bg-white w-[2px] h-3 c mx-2 rotate-[17deg]"></div>

                <button onClick={handleLogout}>Log out</button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <Link to="/register">Register</Link>
                <div className="bg-white w-[2px] h-3 c mx-2 rotate-[17deg]"></div>
                <Link to="/login">Login</Link>
              </div>
            </>
          )}
        </div>
        <div className="text-white w-[1px] bg-deep-gray h-5"></div>
        <Link to="/wishlist">WishList</Link>
      </div>
    </nav>
  );
}

export default Navbar;
