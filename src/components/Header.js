import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");

  const data = useContext(userContext);
  const { loggedInUser } = data;

  const checkOnlineStatus = useOnlineStatus();

  const handleLoginClick = () => {
    if (btnState === "Login") {
      setBtnState("Logout");
    } else {
      setBtnState("Login");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-md" alt="App Logo" src={LOGO_URL} />
        </div>

        <nav className="flex-1 flex justify-end mr-6">
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {checkOnlineStatus ? "🟢 Online" : "🔴 Offline"}
              </span>
            </li>
            {["Home", "About", "Contact", "Grocery", "Cart"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-orange-500 ${
                      isActive ? "text-orange-600 font-semibold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          onClick={handleLoginClick}
        >
          {btnState}
        </button>
        {btnState === "Logout" && (
          <li className="px-4 font-bold list-none">{loggedInUser}</li>
        )}
      </div>
    </header>
  );
};

export default Header;
