import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';
import { useCartData } from "../Context/CartContext";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import MobileNav from "./MobileNav";

const Navbar = ({ location, getLocation, openDropDown, setOpenDropDown }) => {
  const { cartItem } = useCartData();
  const [openNav, setOpenNav] = useState(false);
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
 
  return (
    <div className="bg-white py-3 px-4 md:px-0 shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Premium High-Focus Logo */}
          <Link to='/' className="group inline-block">
            <h1 className="text-3xl font-black tracking-tight text-gray-900 select-none transition-transform duration-200 group-hover:scale-[1.01]">
              <span className="text-red-500 font-serif inline-block transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-110">
                Z
              </span>
              aptro
            </h1>
          </Link>

          {/* Location details widget trigger */}
          <div className="relative md:block hidden">
            <button 
              onClick={toggleDropDown} 
              className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200/80 px-3 py-1.5 rounded-xl cursor-pointer text-sm font-semibold text-gray-700 transition-all duration-200"
            >
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="max-w-28 truncate">
                {location ? `${location.city || location.county || "Deliver to"}` : "Select Location"}
              </span>
              <FaCaretDown className={`h-3 w-3 text-gray-400 transition-transform duration-200 ${openDropDown ? "rotate-180" : ""}`} />
            </button>
            
            {openDropDown && (
              <div className="absolute top-11 p-4 w-72 left-0 shadow-xl border border-gray-100 rounded-2xl bg-white z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-3">
                  <h3 className="font-bold text-gray-900 text-sm">Delivery Destination</h3>
                  <RxCross2 onClick={() => setOpenDropDown(false)} className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" />
                </div>
                <p className="text-xs font-medium text-gray-500 mb-4 leading-relaxed">
                  {location ? `${location.road || ""}, ${location.city || ""}, ${location.country || ""}` : "Allow location access to discover accurate regional electronics stock speeds."}
                </p>
                <button 
                  onClick={getLocation} 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl text-xs transition duration-200 cursor-pointer shadow-xs shadow-red-100"
                >
                  Update Current Location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Link Tabs Array */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-7 font-semibold text-sm tracking-wide">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `py-2 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-500 after:transition-all after:duration-200 ${
                  isActive ? "text-red-500 after:w-full" : "text-gray-600 hover:text-gray-900 after:w-0"
                }`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `py-2 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-500 after:transition-all after:duration-200 ${
                  isActive ? "text-red-500 after:w-full" : "text-gray-600 hover:text-gray-900 after:w-0"
                }`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `py-2 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-500 after:transition-all after:duration-200 ${
                  isActive ? "text-red-500 after:w-full" : "text-gray-600 hover:text-gray-900 after:w-0"
                }`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `py-2 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-500 after:transition-all after:duration-200 ${
                  isActive ? "text-red-500 after:w-full" : "text-gray-600 hover:text-gray-900 after:w-0"
                }`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          {/* Cart Icon trigger and Indicator Box */}
          <Link to={"/cart"} className="relative p-2 text-gray-700 hover:text-red-500 transition-colors duration-200 group">
            <IoCartOutline className="h-6 w-6 transform group-hover:scale-105 transition-transform duration-200" />
            {cartItem.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full transform translate-x-1/3 -translate-y-1/3 shadow-sm">
                {cartItem.length}
              </span>
            )}
          </Link>

          {/* User Profile Auth Control blocks */}
          <div className="hidden md:flex items-center gap-3">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-gray-900 text-sm font-bold px-4 py-2 rounded-xl transition duration-200 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="border border-gray-100 p-0.5 rounded-full shadow-xs">
                <UserButton afterSignOutUrl="/" />
              </div>
            </Show>
          </div>

          {/* Mobile responsive toggle actions hamburger */}
          <div className="md:hidden flex items-center">
            {openNav ? (
              <RxCross2 onClick={() => setOpenNav(false)} className="cursor-pointer w-6 h-6 text-gray-800 hover:text-red-500 transition-colors duration-200" />
            ) : (
              <HiMenuAlt1 onClick={() => setOpenNav(true)} className="cursor-pointer w-6 h-6 text-gray-800 hover:text-red-500 transition-colors duration-200" />
            )}
          </div>
        </div>
      </div>
      {openNav && <MobileNav setOpenNav={setOpenNav} />}
    </div>
  );
};

export default Navbar;