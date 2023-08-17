import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div  className="flex justify-between max-w-6xl mx-auto border-b-2 border-black mb-5">

      <div className="flex justify-between mx-auto gap-10 mb-5">

        <div className="h-[200px]">
          <img src={item.image} className="h-full w-full" alt=""/>
        </div>
        <div className="flex flex-col gap-5 max-w-[400px] mb-5">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-50 mt-1">{item.title}</h1>
          <h1  className="w-50 text-gray-400 font-normal text-[15px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold">${item.price}</p>
            {/* <div
            onClick={removeFromCart}>
              <FcDeleteDatabase
              className="border-1 border-black rounded-full h-10 w-10 px-2 bg-red-300"/>
            </div> */}
            <button onClick={removeFromCart}
             className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
             text-[12px] p-1 px-3 uppercase 
             hover:bg-gray-700
             hover:text-white transition duration-300 ease-in">
              Remove
            </button>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
