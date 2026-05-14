import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { useCartData } from "../Context/CartContext";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import MobileNav from "./MobileNav";



const Navbar = ({location, getLocation , openDropDown, setOpenDropDown}) => {

  const {cartItem} =useCartData();
  const [openNav, setOpenNav] = useState(false)
  const  toggleDropDown = ()=>{
    setOpenDropDown(!openDropDown)
  }
 
  return (
    <div className="bg-white py-3 px-4 md:px-0 shadow-2xl ">
      <div className=" max-w-6xl mx-auto px-4  flex items-center justify-between">
        <div className=" flex items-center gap-7 ">
          {/* Logo */}
          <Link to='/' >
            <h1 className="text-3xl font-bold">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          {/* Location */}
          <div className=" md:flex items-center gap-1  cursor-pointer text-gray-700 hidden">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div className=" -safe -space-y-2">
               <div className="flex items-center ">
                 <p>{location.country }</p>,
                 <p>{location.state}</p>
               </div>
                <p>{location.subdistrict}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown onClick={toggleDropDown} />
          </div>
          {openDropDown? <div class='w-62.5 h-max bg-white z-50 p-5 fixed top-16 left-60 rounded-md shadow-2xl border-2 border-gray-100 '>
            <h1 className = 'font-semibold mb-4 text-xl flex justify-between'>Change Location <span><RxCross2 onClick={toggleDropDown} /></span></h1>
              
          
                 <button onClick={getLocation} className="text-white px-3 py-1 rounded-md bg-red-500 cursor-pointer ">Detect my location</button>
          </div>:null}
        </div>
        <nav className="flex items-center gap-7">
          {/* Navbar */}
          <ul className="md:flex items-center gap-7 text-xl font-semibold hidden ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"}`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-red-500 border-b-3 transition-all" : "text-black"}`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          {/* Cart Detail */}
          <Link to={"/cart"} className="relative">
            <IoCartOutline className=" h-7 w-7" />
            <span className="px-2 absolute -top-3 -right-3 rounded-full bg-red-500 text-white ">
              {cartItem.length}
            </span>
          </Link>
          {/* signup signin button setup */}
          <div className="hidden md:block">
            <Show when="signed-out">
              <SignInButton className="mr-4 bg-red-600 rounded text-white text-xl px-3 py-1 cursor-pointer " />
              <SignUpButton className=" hover:bg-red-600 bg-red-500 rounded text-white text-xl px-3 py-1 cursor-pointer " />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
          {
            openNav?<HiMenuAlt3 onClick={()=>setOpenNav(false)} className="md:hidden cursor-pointer w-7 h-7"/>:<HiMenuAlt1 onClick={()=>setOpenNav(true)} className="md:hidden cursor-pointer w-7 h-7"/>
          }
        </nav>
      </div>
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
