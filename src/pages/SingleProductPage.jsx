import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading from "../assets/Loading.webm";
import Bradcrums from "../components/Bradcrums";
import { IoCartOutline, IoStar, IoStarHalf } from "react-icons/io5";
import { useCartData } from "../Context/CartContext";

const SingleProductPage = () => {
  const [singleProduct, setsingleProduct] = useState("");
  const params = useParams();
  const { addtoCart, cartItem, setCartItem } = useCartData();

  const cartProduct = cartItem.find((item) => item.id === singleProduct.id);
  
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const url = await axios.get(
          `https://dummyjson.com/products/${params.id}`,
        );
        const data = url.data;
        setsingleProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleProduct();
  }, [params.id]);

  const orignalPrice = singleProduct.discountPercentage
    ? (
        singleProduct.price +
        (singleProduct.price * singleProduct?.discountPercentage) / 100
      ).toFixed(2)
    : null;

  return (
    <div>
      {singleProduct ? (
        <div className="">
          <Bradcrums title={singleProduct.title} />
          <div className="max-w-6xl md:p-6 p-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full">
              <img
                src={singleProduct.images?.[0]}
                alt={singleProduct.title}
                className="w-full object-cover rounded-2xl"
              />
            </div>
            {/* Products Detail */}
            <div className="flex flex-col gap-4">
              {/* title */}
              <h1 className="font-bold md:text-3xl text-gray-800">
                {singleProduct.title}
              </h1>
              {/* brand category */}
              <div className="text-gray-700">
                {singleProduct.brand?.toUpperCase()}/{" "}
                {singleProduct.category?.toUpperCase()}
              </div>
              {/* price */}
              <p className="text-2xl text-red-500 font-bold">
                ${singleProduct.price.toFixed(2)}{" "}
                <span className="text-gray-700 line-through">
                  {orignalPrice}
                </span>{" "}
              </p>
              <p className="text-gray-600 flex gap-1 items-center">
                <strong>Rating:</strong> {singleProduct.rating?.toFixed(1)}
                <IoStar className="text-yellow-300 h-4 w-4" />{" "}
                <IoStar className="text-yellow-300 h-4 w-4" />{" "}
                <IoStar className="text-yellow-300 h-4 w-4" />
                <IoStar className="text-yellow-300 h-4 w-4" />
                <IoStarHalf className="text-yellow-300 h-4 w-4" />{" "}
              </p>
              <p className="text-gray-600">
                <strong>Stock:</strong> {singleProduct.stock} in stock
              </p>
              {/* description */}
              <p className="text-gray-600">{singleProduct.description}</p>
              <div className="flex items-center gap-4">
                <label
                  htmlFor=""
                  className=" text-sm text-gray-700 font-medium"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={cartProduct?.quantity || 1}
                  onChange={(e) => {
                    const updatedCart = cartItem.map((item) =>
                      item.id === singleProduct.id
                        ? {
                            ...item,
                            quantity: Number(e.target.value),
                          }
                        : item,
                    );

                    setCartItem(updatedCart);
                  }}
                  className="rounded-lg w-20 border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addtoCart(singleProduct)}
                  className="flex gap-2 items-center px-6 py-2 bg-red-500 cursor-pointer text-white text-lg rounded-lg"
                >
                  <IoCartOutline className="h-6 w-6" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-100">
          <video muted loop autoPlay>
            <source src={loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
