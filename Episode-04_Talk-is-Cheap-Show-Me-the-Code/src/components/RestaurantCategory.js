import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { data, showItem, setShowIndex } = props;

  const handleClick = () => {
    console.log("Clicked!");
    setShowIndex();
  };
  return (
    <>
      <div className="w-6/12 mx-auto my-2 p-2 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList item={data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
