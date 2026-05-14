import { useNavigate } from "react-router-dom";
import { useApiData } from "../Context/CreateContext";

const Category = () => {
  const { data } = useApiData();
  const navigate = useNavigate();
  // unique category
  const getCategoryData = (data, category) => {
    let newProduct = data?.map((curCategory) => {
      return curCategory[category];
    });
    newProduct = newProduct.filter((val) => val && val !== "");

    newProduct = [...new Set(newProduct)];
    return newProduct;
  };
  const uniqueCategory = getCategoryData(data, "category");

  return (
    <div className="bg-[#101829]">
      {uniqueCategory?.length > 0 ? (
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-around gap-4 px-4 py-10">
          {uniqueCategory?.map((category, index) => {
            return (
              <div key={index} className="">
                <button
                  onClick={() => navigate(`/category/${category}`)}
                  className=" uppercase cursor-pointer shadow shadow-red-400 bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md"
                >
                  {category}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="">Products are not Availeble</div>
      )}
    </div>
  );
};

export default Category;
