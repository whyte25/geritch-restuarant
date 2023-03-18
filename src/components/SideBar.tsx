import { Link } from "react-router-dom";

interface SidebarProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loggedIn: boolean;
  handleLogout: () => void;
  username: string | null | undefined;
}

function SideBar({ setIsOpen, loggedIn, handleLogout, username }: SidebarProp) {
  return (
    <>
      <div className="bg-black-alt/90 fixed top-0 left-0 right-0 bottom-0 z-40 h-screen backdrop-blur-sm w-full text-deep-gray">
        <div className="pt-28">
          <div className="flex flex-col justify-center items-center space-y-8 font-bold text-xl">
            <Link
              className="hover:text-white hover:duration-1000"
              to="/"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Home
            </Link>
            <a
              className="hover:text-white hover:duration-1000"
              href="#menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Menu
            </a>
            <a
              className="hover:text-white hover:duration-1000"
              href="#contact"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Contact
            </a>
            <a
              className="hover:text-white hover:duration-1000"
              href="#about"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              About
            </a>

            <a
              className="hover:text-white hover:duration-1000"
              href="#chef"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Chef
            </a>
            <Link to="/wishlist" onClick={() => setIsOpen((prev) => !prev)}>
              WishList
            </Link>
            <div className="flex items-center ">
              {loggedIn ? (
                <>
                  <div className="flex items-center">
                    <p>Welcome, {username || "Chief"} </p>
                    <div className="bg-white w-[2px] h-3 c mx-2 rotate-[17deg]"></div>

                    <button onClick={handleLogout}>Log out</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <Link
                      to="/register"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      Register
                    </Link>
                    <div className="bg-white w-[2px] h-3 c mx-2 rotate-[17deg]"></div>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      Login
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
