import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { LiaPinterest } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="py-10 text-gray-200  bg-gray-900 ">
      <div className=" max-w-7xl mx-auto text-gray-200 px-4 md:flex md:justify-between gap-7">
        <div className="mb-6 md:mb-0">
            <a href="/"><h2 className="text-red-500 text-2xl font-bold" >Zaptro</h2></a>
            <p className="text-sm my-1" >Powering Your World with the Best in Electronics.</p>
            <p className="text-sm " >h-6 w-6123 Electronics St, Style City, NY 10001</p>
            <p className="text-sm " >Email: support@Zaptro.com</p>
            <p className="text-sm " >Phone: (123) 456-7890</p>
        </div>
        <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold" >Customer Service</h2>
            <p className="text-sm my-1" >Contact Us</p>
            <p className="text-sm my-1" >Shipping & Returns</p>
            <p className="text-sm my-1" >FAQs</p>
            <p className="text-sm my-1" >Order Tracking</p>
            <p className="text-sm my-1" >Size Guide</p>
        </div>
        <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold" >Follow Us</h1>
            <div className="flex space-x-4 mt-2 ">
            <MdFacebook className="h-6 w-6"/>
            <IoLogoInstagram className="h-6 w-6"/>
            <AiFillTwitterSquare  className="h-6 w-6"/>
            <LiaPinterest className="h-6 w-6"/>
            </div>
            
        </div>
        <div>
            <h3 className=" text-xl font-semibold" >Stay in the Loop</h3>
            <p className="text-sm mt-2" >Subscribe to get special offers, free giveaways, and more</p>
            <form className="flex mt-4">
                    <input
                    className="py-2 focus:ring-gray-500 focus:ring-2 focus:outline-none border-0 p-2 text-gray-500 bg-white rounded-l-md  w-full" 
                    type="email" 
                    placeholder="Your email address" />
                    <button type="submit" className="bg-red-600 rounded-r-md text-white px-4 hover:bg-red-700">Subscribe</button> 
            </form>
        </div>
      </div>

      {/* CopyRight */}
      <div className=" text-sm mt-5 md:mt-0 flex items-center justify-center border-t border-t-gray-700 text-white pt-6  border-gray-100">
        © 2026 <span className="text-red-500">Zaptro</span>. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
