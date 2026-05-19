import { useEffect, useState } from "react";
import { useApiData } from "../Context/CreateContext";
import loading from "../assets/Loading.webm";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { Player } from "@lottiefiles/react-lottie-player";
import noteFound from "../assets/note-found.json";
import MobileFilter from "../components/MobileFilter";

const Products = () => {
  const { data, productsApiData } = useApiData();
  const [search, setsearch] = useState("");
  const [category, setcategory] = useState("All");
  const [brand, setbrand] = useState("All");
  const [priceRange, setpriceRange] = useState([0, 5000]);
  const [page, setpage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  
  // Custom dropdown tracking state
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  useEffect(() => {
    productsApiData();
    window.scrollTo(0, 0);
  }, [productsApiData]);

  const handleCategoryChange = (e) => {
    setcategory(e.target.value);
    setpage(1);
    setOpenFilter(false);
  };
  
  const handleBrandChange = (e) => {
    setbrand(e.target.value);
    setpage(1);
    setOpenFilter(false);
    setIsBrandOpen(false); // Cleanly closes dropdown sheet upon choosing an item option
  };

  const filterData = data?.filter((item) => {
    const matchesSearch = item?.title?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item?.category?.toLowerCase() === category.toLowerCase();
    const matchesBrand = brand === "All" || item?.brand?.toLowerCase() === brand.toLowerCase();
    const matchesPrice = item?.price >= priceRange[0] && item?.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const totalDynamicPage = Math.ceil((filterData?.length || 0) / 8);
  
  const pageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalDynamicPage && selectedPage !== page) {
      setpage(selectedPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen">
      {!data ? (
        <div className="flex items-center justify-center h-40 md:h-100">
          <video muted loop autoPlay className="w-24 h-24">
            <source src={loading} type="video/webm" />
          </video>
        </div>
      ) : (
        <>
          {/* Mobile View Sidebar Layer Trigger Button */}
          <div className="md:hidden flex justify-end px-4 pt-4">
            <button 
              onClick={() => setOpenFilter(true)}
              className="bg-white border border-gray-200 text-xs font-bold px-4 py-2 rounded-xl shadow-xs"
            >
              Filters
            </button>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
            {/* Desktop Side Filter Section Panel Layout */}
            <FilterSection
              search={search}
              setsearch={setsearch}
              category={category}
              setcategory={setcategory}
              brand={brand}
              setbrand={setbrand}
              handleBrandChange={handleBrandChange}
              priceRange={priceRange}
              setpriceRange={setpriceRange}
              handleCategoryChange={handleCategoryChange}
              isBrandOpen={isBrandOpen}
              setIsBrandOpen={setIsBrandOpen}
            />

            {/* Mobile View Dropdown Layout Drawer */}
            <MobileFilter
              openFilter={openFilter}
              setOpenFilter={setOpenFilter}
              search={search}
              setsearch={setsearch}
              category={category}
              setcategory={setcategory}
              brand={brand}
              setbrand={setbrand}
              handleCategoryChange={handleCategoryChange}
            />

            {filterData?.length > 0 ? (
              <div className="flex flex-col justify-between items-center w-full flex-grow">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full items-stretch">
                  {filterData?.slice(page * 8 - 8, page * 8).map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
                
                <Pagination
                  pageHandler={pageHandler}
                  page={page}
                  totalDynamicPage={totalDynamicPage}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-20">
                <Player autoplay loop src={noteFound} className="w-64 md:w-80" />
                <p className="text-sm font-bold text-gray-400 mt-4">No match inventory stock items found.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;