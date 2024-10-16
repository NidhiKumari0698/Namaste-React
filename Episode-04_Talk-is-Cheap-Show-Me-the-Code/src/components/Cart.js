import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  console.log("CART COMPONENT RENDERING STARTED!");

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems------------>", cartItems);

  const dispatch = useDispatch();
  console.log("CART COMPONENT RENDERING ENDED!");
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="w-20 bg-black text-white p-1 rounded m-2"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <h1>Cart is empty, Add Items to the cart!</h1>
        )}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
