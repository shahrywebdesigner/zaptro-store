import { useApiData } from "../Context/CreateContext";

const FilterSection = ({ search, setsearch, category, setcategory, handleCategoryChange, brand, setbrand, handleBrandChange, priceRange, setpriceRange }) => {
  const { uniqueCategory, uniqueBrand } = useApiData();

  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm w-64 shrink-0 md:block hidden sticky top-24 h-fit space-y-6">
      {/* Search Input Box Frame */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-2.5 uppercase tracking-wider">Search</h3>
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="search"
          placeholder="Type keywords..."
          className="w-full rounded-xl bg-gray-50 p-2.5 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
        />
      </div>

      {/* Category Checkbox Section */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">Category</h3>
        <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
          {uniqueCategory?.map((item, index) => (
            <label key={index} className="flex items-center gap-2.5 group cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150">
              <input 
                value={item}
                className="w-4 h-4 rounded text-red-500 border-gray-300 accent-red-500 focus:ring-red-500/20 cursor-pointer" 
                onChange={handleCategoryChange}
                type="checkbox"
                checked={category === item} 
              />
              <span className="uppercase text-xs tracking-wide">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Native Select Form Option Component Layout */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-2.5 uppercase tracking-wider">Brand</h3>
        <select
          className="w-full outline-none bg-gray-50 p-2.5 rounded-xl border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-700 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 cursor-pointer"
          value={brand}
          onChange={handleBrandChange}
        >
          {uniqueBrand?.map((item, index) => (
            <option key={index} value={item}>
              {item ? item.toUpperCase() : "Select Brand"}
            </option>
          ))}
        </select>
      </div>

      {/* Price Track Slider Container Input Slider */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-2.5 uppercase tracking-wider">Price Range</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
            <span>Min: ${priceRange[0]}</span>
            <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded-md">Max: ${priceRange[1]}</span>
          </div>
          <input
            min="0"
            max="5000"
            className="w-full accent-red-500 h-1.5 bg-gray-100 rounded-lg cursor-pointer" 
            type="range" 
            value={priceRange[1]}
            onChange={(e) => setpriceRange([priceRange[0], Number(e.target.value)])}
          />
        </div>
      </div>

      {/* Primary Clear All Filter Option State Control Button */}
      <button
        onClick={() => {
          setsearch("");
          setbrand("All");
          setcategory("All");
          setpriceRange([0, 5000]);
        }}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all duration-200 uppercase tracking-wider transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSection;