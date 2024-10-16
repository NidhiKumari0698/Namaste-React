import { RES_LOGO } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="h-20" alt="res-logo" src={RES_LOGO + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 style={{ overflowWrap: "break-word" }}>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <p>User: {loggedInUser}</p>
    </div>
  );
};

export const promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <>
        <label className="absolute bg-black text-white p-1 m-1 rounded-lg">
          Promoted!
        </label>
        <RestaurantCard resData={resData} />
      </>
    );
  };
};

export default RestaurantCard;
