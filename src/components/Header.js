import { APP_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const { loggedInUser } = useContext(userContext);
  const checkOnlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginClick = () => {
    setBtnState(btnState === "Login" ? "Logout" : "Login");
  };

  const navItems = ["Home", "About", "Contact", "Grocery", "Cart"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={APP_LOGO}
            alt="BBQ Zone Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <span className="text-sm text-gray-500 hidden sm:block">
            {checkOnlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-orange-500 transition ${
                  isActive ? "text-orange-600 font-semibold" : ""
                }`
              }
            >
              {item}

              {item === "Cart" && cartItems.length > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          ))}

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
            onClick={handleLoginClick}
          >
            {btnState}
          </button>

          {btnState === "Logout" && (
            <span className="font-semibold text-sm">{loggedInUser}</span>
          )}
        </nav>

        {/* Animated Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-black my-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg ${isActive ? "text-orange-600 font-semibold" : ""}`
              }
            >
              {item}

              {item === "Cart" && cartItems.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          ))}

          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-full"
            onClick={handleLoginClick}
          >
            {btnState}
          </button>

          {btnState === "Logout" && (
            <span className="font-semibold">{loggedInUser}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
