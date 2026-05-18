import { MdOutlineLocalShipping } from "react-icons/md";
import { FiLock, FiClock, FiRotateCcw } from "react-icons/fi";

const Features = () => {
  const featuresList = [
    {
      icon: <MdOutlineLocalShipping className="text-red-500 w-8 h-8 shrink-0" />,
      title: "Free Shipping",
      desc: "On all orders over $100"
    },
    {
      icon: <FiLock className="text-red-500 w-7 h-7 shrink-0" />,
      title: "Secure Payment",
      desc: "100% protected gateways"
    },
    {
      icon: <FiRotateCcw className="text-red-500 w-7 h-7 shrink-0" />,
      title: "Easy Returns",
      desc: "30-day structural policy"
    },
    {
      icon: <FiClock className="text-red-500 w-7 h-7 shrink-0" />,
      title: "24/7 Support",
      desc: "Dedicated live tech help"
    }
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-10 my-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          {featuresList.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-5 justify-start sm:justify-center px-2 pb-6 sm:pb-0 pt-6 sm:pt-0 group first:pt-0 last:pb-0 lg:py-2`}
            >
              <div className="p-3 bg-red-50 rounded-2xl group-hover:bg-red-500 text-red-500 group-hover:text-white transition-all duration-300 shadow-xs">
                <div className="flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 [&_svg]:text-current">
                  {item.icon}
                </div>
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-gray-900 text-base tracking-tight transition-colors group-hover:text-red-500 duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;