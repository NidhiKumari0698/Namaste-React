import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resPersonalInfo, setResPersonalInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId------------>", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    const resultJson = await response.json();
    console.log("resultJson::", resultJson);
    setResInfo(
      resultJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setResPersonalInfo(resultJson?.data?.cards[2]?.card.card.info);
  };

  console.log("resInfo-------------->", resInfo);
  console.log("resPersonalInfo-------------->", resPersonalInfo);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>{resPersonalInfo.name}</h1>
      <h2>{resPersonalInfo.cuisines.join(" , ")}</h2>
      <h3>{resPersonalInfo.costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        {resInfo.map((data, index) => (
          <li>{data.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
