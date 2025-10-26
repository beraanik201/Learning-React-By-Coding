import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");

  const checkOnlineStatus = useOnlineStatus();

  const handleLoginClick = () => {
    if (btnState === "Login") {
      setBtnState("Logout");
    } else {
      setBtnState("Login");
    }
  };

  return (
    <div className="flex justify-between bg-gray-200 shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {checkOnlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-6 py-2 ml-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-200 -mt-2 cursor-pointer"
            onClick={handleLoginClick}
          >
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
