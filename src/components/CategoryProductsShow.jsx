import { useNavigate } from "react-router-dom";
import { useCartData } from "../Context/CartContext";

const CategoryProductsShow = ({product}) => {
        const {addtoCart}=useCartData();
        const navigate = useNavigate();
        
  return (
    <div className=" space-y-2 md:space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 p-2 rounded-md flex gap-7">
        <img
        onClick={()=>navigate(`/products/${product.id}`)}
          className="rounded-md bg-white w-25 h-25 md:w-60 md:text-start text-center md:h-60 object-cover"
          src={product.images?.[0]}
          alt=""
        />
        <div className="flex md:space-y-2 flex-col gap-3 ">
          <h1 className="text-lg md:text-xl w-40 md:w-full font-semibold md:font-bold line-clamp-3 hover:text-red-400">{product.title}</h1>
          <p className=" text-sm md:text-lg flex items-center font-semibold">
            $<span className="text-3xl md:text-4xl">{product.price.toFixed(2)}</span>(4%off)
          </p>
          <p className="text-sm md:text-lg ">
            Free deliver
            <span className="font-semibold">Fri to 18 Apr</span><br/>
            or fast delivery
            <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>
          <button
            onClick={() => addtoCart(product)}
            className="w-fit bg-red-500 rounded-md text-white px-2 py-1 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsShow;
