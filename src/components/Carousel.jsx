import { useEffect } from "react";
import { useApiData } from "../Context/CreateContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const SlickSlider = Slider.default || Slider;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`arrow ${className}`}
      style={{ zIndex: 3 }}
      onClick={onClick}
    >
      <BiLeftArrowAlt
        className="arrows"
        style={{
          ...style,
          display: "block",
          background: "#f53347",
          color: "white",
          borderRadius: "50%",
          position: "absolute",
          left: "35px",
          padding: "2px",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#fff";
          e.target.style.color = "#fb2c36";
        }}
        />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className={`arrow ${className}`}
    style={{ zIndex: 3 }}
    onClick={onClick}
    >
      <BiRightArrowAlt
        className="arrows"
        style={{
          ...style,
          display: "block",
          background: "#f53347",
          color: "white",
          borderRadius: "50%",
          position: "absolute",
          right: "35px",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#fff";
          e.target.style.color = "#fb2c36";
        }}
      />
    </div>
  );
};
const Carousel = () => {
  const { data, productsApiData } = useApiData();
  useEffect(() => {
    productsApiData();
  }, [productsApiData]);
const navigate = useNavigate();
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // console.log("Slider:", Slider);
  return (
    <div className="overflow-hidden">
      <SlickSlider {...settings}>
        {data.slice(0, 7).map((product, index) => {
          return (
            <div
              key={index}
              className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex flex-col md:my-20 md:flex-row mt-4 mb-6 items-center justify-center gap-10 md:gap-20 px-4 md:mx-10 min-h-screen md:h-150 ">
                <div className="">
                  <div className="space-y-3 pb-3 md:pb-0 md:space-y-6">
                    <h3 className="text-red-500 font-semibold font-sans text-sm">
                      Powering your world with the best in Electronices
                    </h3>
                    <h1 className="text-xl md:text-4xl font-bold uppercase text-white line-clamp-2 md:line-clamp-3 w-full md:w-125">
                      {product.title}
                    </h1>
                    <p className="line-clamp-3 md:w-125 text-gray-400 pr-7">
                      {product.description}
                    </p>
                    <button onClick={() => navigate('/products')} className="mt-2 cursor-pointer rounded-md text-white px-3 py-2 bg-linear-to-r from-red-500 to-purple-500">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="">
                  <img
                    className=" w-52 md:w-70 hover:scale-105 border border-purple-200 shadow-red-400 rounded-full shadow-2xl "
                    src={product.images[0]}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </SlickSlider>
      <Category />
    </div>
  );
};

export default Carousel;  