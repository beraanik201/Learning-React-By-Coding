import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
