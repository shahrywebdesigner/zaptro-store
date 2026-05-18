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
  };
  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1],
  );

  const pageHandler = (pageShow) => {
    setpage(pageShow);
    window.scrollTo(0,0);
  };
  const totalDynamicPage = Math.ceil(filterData?.length / 8);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-12">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setsearch={setsearch}
          category={category}
          setcategory={setcategory}
          handleBrandChange={handleBrandChange}
          priceRange={priceRange}
          setpriceRange={setpriceRange}
          brand={brand}
          setbrand={setbrand}
          handleCategoryChange={handleCategoryChange}
        />
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">

              <FilterSection
                search={search}
                setsearch={setsearch}
                category={category}
                setcategory={setcategory}
                handleBrandChange={handleBrandChange}
                priceRange={priceRange}
                setpriceRange={setpriceRange}
                brand={brand}
                setbrand={setbrand}
                handleCategoryChange={handleCategoryChange}
              />
              {filterData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8 w-full">
                    {filterData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                      })}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    totalDynamicPage={totalDynamicPage}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center mt-10  h-80 w-80 md:h-150 md:w-225">
                  {console.log(noteFound)}
                  <Player autoplay loop src={noteFound} className=" w-80 md:w-125" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-40 md:h-100">
            <video muted loop autoPlay>
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
