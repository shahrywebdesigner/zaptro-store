import { MdOutlineLocalShipping } from "react-icons/md";
import { FiLock,FiClock,FiRotateCcw} from "react-icons/fi";
const Features = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 gap-2  md:flex  items-center justify-around">
        <div className="flex items-center justify-center  gap-6">
          <MdOutlineLocalShipping className=" text-gray-700 w-10 h-10" />
          <div className="">
            <h3 className="font-semibold text-gray-800" >Free Shipping</h3>
            <p className="text-gray-400" >On orders over $100</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <FiLock className=" text-gray-700 w-10 h-10" />
          <div className="">
            <h3 className="font-semibold text-gray-800" >Secure Payment</h3>
            <p className="text-gray-400" >100% protected payments</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <FiRotateCcw className=" text-gray-700 w-10 h-10" />
          <div className="">
            <h3 className="font-semibold text-gray-800" >Easy Returns</h3>
            <p className="text-gray-400" >30-day return policy</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <FiClock className=" text-gray-700 w-10 h-10" />
          <div className="">
            <h3 className="font-semibold text-gray-800" >24/7 Support</h3>
            <p className="text-gray-400" >Dedicated customer service</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
