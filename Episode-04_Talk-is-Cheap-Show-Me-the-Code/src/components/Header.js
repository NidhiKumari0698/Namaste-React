import { useEffect, useState, useContext } from "react";
import { HEADER_LOGO } from "../utils/constant";
import { myUseState } from "./MyUseState";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  console.log("HEADER COMPONENT RENDERING STARTED!");
  const [btnName, setBtnName] = myUseState("Login");
  const [cartValue, setCartValue] = myUseState("one");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);
  //subscribe
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log("cartItems::::", cartItems);

  const data = useEffect(() => {
    //console.log("useEffect with with btnName dependency.");
  }, [btnName]);

  useEffect(() => {
    // console.log("useEffect with empty array dependency.");
  }, []);

  useEffect(() => {
    // console.log("useEffect without dependency.");
  });

  console.log("HEADER COMPONENT RENDERING ENDS!");
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
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-28" src={HEADER_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-x-4 p-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
          <li>
            <button className="login-btn" onClick={handleClick}>
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
