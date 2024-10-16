import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(-1);
  const { resId } = useParams();
  const dataSet = useRestaurantMenu(resId);
  const regularCards =
    dataSet?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const categories = regularCards?.filter(
    (currCard) =>
      currCard.card.card[`@type`] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const resInfo =
    dataSet?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  const resPersonalInfo = dataSet?.cards[2]?.card.card.info;

  return resInfo === null || !resInfo ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{resPersonalInfo?.name}</h1>
      <p className="font-bold text-lg">
        {resPersonalInfo?.cuisines?.join(" , ")} -{" "}
        {resPersonalInfo?.costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => {
            if (showIndex === index) {
              setShowIndex(-1);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
