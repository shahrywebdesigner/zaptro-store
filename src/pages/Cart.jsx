import { LuNotebookText } from "react-icons/lu";
import { useCartData } from "../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import emptyCart from '../assets/emptyCart.png'

const Cart = (location, getLocation) => {
  const navigation = useNavigate();
  const { cartItem,increase,decrease,deleteItem } = useCartData();
  const {user} = useUser();
  console.log(user)
  const totalPrice = cartItem.reduce((total, item) => {
    return total + item.price*item.quantity;
  }, 0);
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 md:px-0 mb-5">
      {cartItem.length > 0 ? (
        <div className="">
          <h1 className="text-2xl ml-3 md:ml-0 font-bold">My Cart ({cartItem.length})</h1>
          <div>
            <div className="">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 flex items-center justify-between rounded-md shadow-gray-400 mt-3 "
                  >
                    <div className="flex  gap-4 items-start">
                      <img
                        className="w-20 h-20 rounded-md"
                        src={item.images?.[0]}
                        alt=""
                      />
                      <div className=" ">
                        <h1 className="text-gray-800 text-sm md:text-lg md:w-75 ">{item.title}</h1>
                        <p className="font-semibold text-lg text-red-500">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center md:gap-4 p-2 bg-red-500 text-white font-bold text-xl rounded-md">
                      <button onClick={() => {
                          decrease(item.id);
                        }} className=" cursor-pointer ">-</button>
                      {console.log(item.quantity)}
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => {
                          increase(item.id);
                        }}
                        className=" cursor-pointer "
                      >
                        +
                      </button>
                    </div>
                    <button 
                    onClick={()=>{deleteItem(item.id)}} className=" hover:bg-white/60 rounded-full transition-all p-1 md:p-3 hover:shadow-2xl ">
                      {
                        <FaRegTrashAlt
                         className=" text-2xl cursor-pointer text-red-500 h-6 w-6" />
                      }
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 items-start">
              {/* Delivery Info */}
              <div className="p-7 space-y-2 bg-gray-100 rounded-md mt-4 ">
                <h1 className="text-xl font-bold text-gray-800">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Full Name</label>
                  
                  <input
                    type="text"
                    value={user?.fullName}
                    placeholder="Enter your name"
                    className="p-2 rounded-md bg-white"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    value={location?.city}
                    placeholder="Enter your address"
                    className="p-2 rounded-md bg-white"
                    />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      vlue={location?.state}
                      placeholder="Enter your state"
                      className="p-2 rounded-md bg-white w-full"
                      />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Postcode</label>
                    <input
                      type="text"
                      vlue={location?.postcode}
                      placeholder="Enter your postcode"
                      className="p-2 rounded-md bg-white"
                      />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      value={location?.country}
                      placeholder="Enter your country"
                      className="p-2 rounded-md bg-white w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter your number"
                      className="p-2 rounded-md bg-white"
                    />
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                  Submit
                </button>
                <div className="flex flex-col items-center justify-center gap-2 mt-3 w-full">
                  ========= OR ========
                  <button onClick={()=>getLocation} className="bg-red-500 mt-3 text-white px-3 py-2 rounded-md cursor-pointer">
                    Detect Location
                  </button>
                </div>
              </div>
              {/* Bill Details */}
              <div className="bg-white rounded-md mt-4 p-7 shadow-2xl border border-gray-100">
                <h1 className="text-xl font-bold text-gray-800">
                  Bill details
                </h1>
                {/* Charges */}
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-1 text-gray-700">
                    <LuNotebookText /> <span>Items total price</span>
                  </h1>
                  <p>${(totalPrice).toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-1 text-gray-700">
                    <MdDeliveryDining /> <span>Delivary Charge</span>
                  </h1>
                  <p className="font-semibold text-red-500">
                    <span className="line-through text-gray-600">$25</span> FREE
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-1 text-gray-700">
                    <GiShoppingBag /> <span>Handling Charge</span>
                  </h1>
                  <p>${5.00}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-1 text-gray-700 text-lg">
                    Grand Total
                  </h1>
                  <p>${(totalPrice + 5).toFixed(2)}</p>
                </div>
                {/* <div className="flex items-center justify-between">
                  <p className="text-gray-600">Subtotal</p>
                </div> */}
                {/* Apply copon code */}
                <div className="">
                  <h1 className=" font-semibold mt-7 mb-3 text-gray-700">
                    Apply Promo Code
                  </h1>
                  <div className=" flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className=" outline-none focus:ring focus:ring-gray-500 p-2 w-full rounded-md text-black  bg-white"
                    />{" "}
                    <button className=" text-gray-700 text-sm px-2 hover:border  hover:border-gray-500 rounded-md cursor-pointer ">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="bg-red-500 text-white w-full px-3 py-2 mt-3 text-center rounded-md cursor-pointer text-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 h-150">
          <h1 className=" text-red-500/80 text-3xl text-center md:text-5xl font-bold text-muted">Oh no! Your cart is empty</h1>
          <img src={emptyCart} className="w-100" alt="" />
          <button onClick={()=>navigation('/products')} className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
