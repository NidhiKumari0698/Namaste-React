import { useDispatch } from "react-redux";
import { RES_LOGO } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  console.log("ItemList COMPONENT RENDERING STARTED!");
  const { item } = props;
  const dispatch = useDispatch();
  const handleAddItem = (currItem) => {
    console.log(currItem);
    //dispatch action
    dispatch(addItem(currItem));
  };
  console.log("ItemList COMPONENT RENDERING ENDS!");
  return (
    <div>
      {item.map((currItem) => (
        <div className="flex text-left border-gray-200 border-b-2 p-2 m-2 justify-between items-center">
          <div className="w-9/12">
            <span className="font-bold">{currItem.card.info.name} - </span>
            <span className="font-bold">
              {Math.floor(currItem.card.info.price / 100)}
            </span>
            <p>{currItem.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 bg-white shadow-lg"
                onClick={() => handleAddItem(currItem)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src={RES_LOGO + currItem.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
