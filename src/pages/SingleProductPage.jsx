import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading from "../assets/Loading.webm";
import Bradcrums from "../components/Bradcrums";
import { IoCartOutline, IoStar } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";
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

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) return;
    if (cartProduct) {
      const updatedCart = cartItem.map((item) =>
        item.id === singleProduct.id ? { ...item, quantity: newQty } : item
      );
      setCartItem(updatedCart);
    } else {
      // If item isn't in cart yet, trigger original cart context insertion flow with base count
      addtoCart({ ...singleProduct, quantity: newQty });
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-16">
      {singleProduct ? (
        <div className="max-w-6xl mx-auto px-4 pt-6">
          <div className="bg-white rounded-xl p-4 shadow-xs border border-gray-100 mb-6">
            <Bradcrums product={singleProduct} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-xl">
            {/* Left Column: Image Frame Display */}
            <div className="bg-gray-50 flex items-center justify-center p-6 rounded-2xl border border-gray-100 h-[400px] md:h-[500px]">
              <img
                src={singleProduct.thumbnail}
                className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300 ease-out"
                alt={singleProduct.title}
              />
            </div>

            {/* Right Column: Meta Detail Info Data */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-xs uppercase font-extrabold tracking-wider bg-red-50 text-red-500 px-3 py-1 rounded-full">
                  {singleProduct.category || "Electronics"}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                {singleProduct.title}
              </h1>

              {singleProduct.brand && (
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Brand: <span className="text-gray-900 font-semibold">{singleProduct.brand}</span>
                </p>
              )}

              {/* Ratings Block badge frame */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-lg">
                  <IoStar className="text-amber-500 w-4 h-4" />
                  <span className="font-bold text-sm text-amber-700">
                    {singleProduct.rating}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium">| Certified Authentic Product</span>
              </div>

              <p className="text-gray-600 leading-relaxed text-base mb-6">
                {singleProduct.description}
              </p>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-black text-gray-900">
                    ${singleProduct.price}
                  </span>
                  {orignalPrice && (
                    <span className="text-lg text-gray-400 line-through font-medium">
                      ${orignalPrice}
                    </span>
                  )}
                </div>
                {singleProduct.discountPercentage && (
                  <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    🎉 Save {singleProduct.discountPercentage}% off retail marketplace value instantly
                  </p>
                )}
              </div>

              {/* Logistics Availability Status */}
              <div className="flex items-center gap-2 mb-6 text-sm">
                <span className="font-semibold text-gray-700">Availability:</span>
                <span className={`inline-flex items-center gap-1.5 font-bold ${
                  singleProduct.stock > 0 ? "text-emerald-600" : "text-rose-600"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${singleProduct.stock > 0 ? "bg-emerald-500" : "bg-rose-500"}`}></span>
                  {singleProduct.stock > 0 ? `In Stock (${singleProduct.stock} units remaining)` : "Out of Stock"}
                </span>
              </div>

              {/* Actions Row Frame */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Quantity</span>
                  <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange((cartProduct?.quantity || 1) - 1)}
                      className="p-2 hover:bg-white rounded-lg text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-gray-800 text-sm">
                      {cartProduct?.quantity || 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange((cartProduct?.quantity || 1) + 1)}
                      className="p-2 hover:bg-white rounded-lg text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 pt-5">
                  <button
                    onClick={() => addtoCart(singleProduct)}
                    disabled={singleProduct.stock <= 0}
                    className="w-full flex gap-2 items-center justify-center px-6 py-3.5 bg-red-500 hover:bg-red-600 disabled:bg-gray-200 disabled:cursor-not-allowed font-semibold text-white text-base rounded-xl transition duration-300 shadow-lg shadow-red-500/10 active:scale-[0.99] cursor-pointer"
                  >
                    <IoCartOutline className="h-5 w-5" />
                    Add to Shipping Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="scale-75 md:scale-100">
            <video muted loop autoPlay className="mix-blend-multiply">
              <source src={loading} type="video/webm" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;