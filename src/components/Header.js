import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");

  const handleLoginClick = () => {
    if (btnState === "Login") {
      setBtnState("Logout");
    } else {
      setBtnState("Login");
    }
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLoginClick}>
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
