import { FcGoogle } from "react-icons/fc";

import { useAuth } from "../context/UserAuthContext";

function GoogleOAuth() {
  const { handleGoogleOAuth } = useAuth();

  const handleClick = () => {
    handleGoogleOAuth();
  };

  return (
    <div className="flex justify-center items-center sm:w-[95%]">
      <button className="mt-5" onClick={handleClick}>
        <FcGoogle style={{ width: "28px", height: "28px" }} />
      </button>
    </div>
  );
}

export default GoogleOAuth;
