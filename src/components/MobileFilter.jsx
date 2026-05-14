import { FaFilter } from "react-icons/fa";
import { useApiData } from "../Context/CreateContext";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  search,
  setsearch,
  category,
  setcategory,
  handleCategoryChange,
  brand,
  setbrand,
  handleBrandChange,
  priceRange,
  setpriceRange,
}) => {
const { uniqueCategory, uniqueBrand } = useApiData();

  return (
    <div className="">
      <div className="md:hidden px-4 py-2 mt-5 flex items-center justify-between">
        <h1 className="text-gray-900 text-xl font-semibold">Filters</h1>

        <FaFilter
          onClick={() =>
            openFilter ? setOpenFilter(false) : setOpenFilter(true)
          }
          className="text-gray-800"
        />
      </div>
      {openFilter ? (
        <div className=" px-4 md:hidden my-2 bg-gray-100 py-2">
          <input
            name=""
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="search"
            placeholder="search..."
            className="rounded-md w-full bg-white p-2 border-2 border-gray-200"
          />
          {/* Category */}
      <h1 className="font-semibold mt-5 text-xl">Category</h1>
      <div className="mt-3 flex flex-col gap-2">
        {
        uniqueCategory?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input 
              value={item}
              className="accent-red-500" 
              onChange={handleCategoryChange}
              type="checkbox"
              checked={category === item} 
              />
              <button
               className="cursor-pointer uppercase">
                {item}
                </button>
            </div>
          );
        })
        }
      </div>
      {/* Brand data only */}
      <h1 className="font-semibold mt-5 mb-3 text-xl">Brand</h1>

      <select
       className=" outline-0 bg-white p-2  rounded-md border-2 border-gray-200"
       value={brand}
       onChange={handleBrandChange}
       >
        {uniqueBrand?.map((item, index) => {
          return (
              <option className="focus:outline-noneitem" key={index} 
              value={item}>
              {item ? item.toUpperCase() : ""}
            </option>
          );
        })}
      </select>
      {/* price range */}
        <h1 className="font-semibold mt-5 mb-3 text-xl">Price Range</h1>
        <div className=" flex flex-col gap-2">
            <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <input
            min="0"
            max="5000"
            className=" accent-red-500 md:w-full w-40" 
            type="range" 
            value={priceRange[1]}
            onChange={(e) =>
             setpriceRange([priceRange[0], Number(e.target.value)])
            }
            />
        </div>
        <button
        onClick={() => {
            setsearch("");
            setbrand("All");
            setcategory("All");
            setpriceRange([0, 5000]);
            setOpenFilter(false)
        }}
         className="bg-red-500 text-white rounded-md px-3 py-2 mt-5 cursor-pointer"
         >Reset Filter</button>
        </div>
      ) : null}
    </div>
  );
};

export default MobileFilter;
