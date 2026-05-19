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
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-gray-900 w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-gray-200/30"
    >
      <BiLeftArrowAlt size={24} className="text-red-500" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-gray-900 w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-gray-200/30"
    >
      <BiRightArrowAlt size={24} className="text-red-500" />
    </button>
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
                  <div className="space-y-4 pb-4 md:pb-0 md:space-y-5">
                    <span className="bg-white/10 backdrop-blur-md border border-white/15 text-red-400 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl inline-block">
                      Quality Electronics Selection
                    </span>
                    <h1 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight line-clamp-2 leading-tight w-full md:w-125">
                      {product.title}
                    </h1>
                    <p className="line-clamp-3 md:w-125 text-gray-300 text-xs md:text-sm leading-relaxed pr-7 font-medium">
                      {product.description}
                    </p>
                    <div className="pt-2">
                      <button 
                        onClick={() => navigate('/products')} 
                        className="group/btn cursor-pointer flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest text-white px-8 py-3.5 bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-l rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 w-fit h-auto"
                      >
                        <span>Shop Now</span>
                        <BiRightArrowAlt size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xs shadow-[0_25px_60px_-15px_rgba(239,68,68,0.35)] md:shadow-[0_35px_70px_-15px_rgba(239,68,68,0.45)] group">
                    <img
                      className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105 mix-blend-lighten filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
                      src={product.images[0]}
                      alt={product.title}
                    />
                  </div>
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