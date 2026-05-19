import { FaChevronDown } from "react-icons/fa";
import { useApiData } from "../Context/CreateContext";

const FilterSection = ({ 
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
  isBrandOpen,
  setIsBrandOpen 
}) => {
  const { uniqueCategory, uniqueBrand } = useApiData();

  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm w-64 shrink-0 md:block hidden sticky top-24 h-fit space-y-6">
      {/* Search Input Box Block */}
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

      {/* Category Checkbox Set Selection */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">Category</h3>
        <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
          {uniqueCategory?.map((item, index) => (
            <label key={index} className="flex items-center gap-2.5 group cursor-pointer py-0.5">
              <input 
                value={item}
                className="accent-red-500 h-4 w-4 rounded-md border-gray-300 focus:ring-red-500/20 cursor-pointer" 
                onChange={handleCategoryChange}
                type="checkbox"
                checked={category === item} 
              />
              <span className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-150 ${
                category === item ? "text-red-500 font-bold" : "text-gray-600 group-hover:text-gray-900"
              }`}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Premium Custom Brand Selector Overlay */}
      <div className="relative">
        <h3 className="font-bold text-gray-900 text-sm mb-2.5 uppercase tracking-wider">Brand</h3>
        
        {/* Dropdown Input Selector Mock Trigger Button */}
        <button
          type="button"
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
        >
          <span>{brand ? brand.toUpperCase() : "SELECT BRAND"}</span>
          <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isBrandOpen ? "rotate-180 text-red-500" : ""}`} />
        </button>

        {/* Dropdown Options List Box Sheet Layer */}
        {isBrandOpen && (
          <>
            {/* Click backdrop trigger layer to catch outer screen taps */}
            <div className="fixed inset-0 z-10" onClick={() => setIsBrandOpen(false)} />
            
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-xl shadow-xl max-h-56 overflow-y-auto z-20">
              {uniqueBrand?.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    // Fires native proxy configuration up into existing handleBrandChange callback definitions
                    handleBrandChange({ target: { value: item } });
                  }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer border-b border-gray-50 last:border-none flex items-center justify-between ${
                    brand === item 
                      ? "bg-red-50 text-red-500" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>{item ? item.toUpperCase() : "ALL BRANDS"}</span>
                  {brand === item && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                </button>
              ))}
            </div>
          </>
        )}
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
          setIsBrandOpen(false);
        }}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSection;