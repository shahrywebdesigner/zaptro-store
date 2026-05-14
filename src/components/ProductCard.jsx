import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import { useCartData } from "../Context/CartContext";

const ProductCard = ({product}) => {

  const{addtoCart} = useCartData();
  const navigate = useNavigate();


  return (
    <div className="border relative mt-5 border-gray-100 h-max p-2  cursor-pointer rounded-2xl hover:shadow-2xl hover:scale-105 transition-all">
      <img src={product?.images[0]} onClick={()=>{navigate(`/products/${product.id}`)}} className="bg-gray-100 aspect-square object-contain" alt="" />
      <h1 className="font-semibold text-sm line-clamp-2 mt-2">{product?.title}</h1>
      <h4 className="font-bold text-lg text-gray-800 my-1">${product?.price} </h4>
      <button onClick={()=>addtoCart(product)}  className="flex items-center rounded-md justify-center text-gray-100 bg-red-500 gap-2 w-full px-3 py-2 text-sm cursor-pointer "><IoCartOutline/> Add to Cart</button>
    </div>
  )
}

export default ProductCard
