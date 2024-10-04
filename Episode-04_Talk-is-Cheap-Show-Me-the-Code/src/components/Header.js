import { useEffect, useState } from "react";
import { HEADER_LOGO } from "../utils/constant";
import { myUseState } from "./MyUseState";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = myUseState("Login");
  const [cartValue, setCartValue] = myUseState("one");
  console.log("Header component rendered started.", btnName, cartValue);

  useEffect(() => {
    console.log("useEffect with with btnName dependency.");
  }, [btnName]);

  useEffect(() => {
    console.log("useEffect with empty array dependency.");
  }, []);

  useEffect(() => {
    console.log("useEffect without dependency.");
  });

  console.log("Header component rendered ends.", btnName, cartValue);
  const handleClick = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
      setCartValue("two");
    } else {
      setCartValue("three");
      setBtnName("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={HEADER_LOGO} />
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
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart-{cartValue}</li>
          <li>
            <button className="login-btn" onClick={handleClick}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
