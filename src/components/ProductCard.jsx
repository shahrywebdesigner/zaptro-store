import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addtoCart } = useCartData();
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-100 p-3 cursor-pointer rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
      {/* Clickable Image Container */}
      <div 
        onClick={() => navigate(`/products/${product.id}`)} 
        className="group overflow-hidden rounded-xl bg-gray-50 aspect-square flex items-center justify-center"
      >
        <img 
          src={product?.images[0]} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
          alt={product?.title} 
        />
      </div>

      {/* Info & Action Section */}
      <div className="flex flex-col flex-grow justify-between mt-3">
        <div>
          {/* Title with a guaranteed fixed line-height area */}
          <div className="h-10 mb-1 overflow-hidden">
            <h1 
              onClick={() => navigate(`/products/${product.id}`)}
              className="font-bold text-gray-900 text-sm line-clamp-2 leading-tight hover:text-red-500 transition-colors duration-200" 
            >
              {product?.title}
            </h1>
          </div>
          
          {/* Price Tag */}
          <h4 className="font-extrabold text-lg text-gray-900 mb-3">${product?.price}</h4>
        </div>

        {/* Action Button - Always forced to the bottom edge */}
        <button 
          onClick={() => addtoCart(product)}  
          className="flex items-center rounded-xl justify-center text-white bg-red-500 hover:bg-red-600 active:bg-red-700 font-semibold gap-2 w-full px-3 py-2.5 text-sm cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 mt-auto"
        >
          <IoCartOutline className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;