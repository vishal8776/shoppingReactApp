import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div  className="flex  max-w-6xl mx-auto mt-10 gap-16">


      <div > 
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col mt-20">

        <div>
          <div className="text-green-600 uppercase font-bold">Your Cart</div>
          <div className="text-green-600 uppercase font-bold text-4xl">Summary</div>
          <p className="mt-5 font-bold mb-72">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="">
          <p>Total Amount: <span className=" font-bold">${totalAmount}</span></p>
          <button className="bg-green-600 text-white border border-gray-700 px-[80px] py-2  mt-5 rounded-md font-semibold
          hover:bg-green-50
          hover:text-black transition duration-300 ease-in" >
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center max-w-full mx-auto mt-20">
      <h1 className="text-green-600 font-bold text-2xl mb-5">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 text-white border border-gray-700 px-[80px] py-2  mt-5 rounded-md font-semibold
          hover:bg-green-50
          hover:text-black transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
