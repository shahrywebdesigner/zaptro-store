import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton,UserButton, useUser} from '@clerk/react'
import { RxCross2 } from "react-icons/rx";

const MobileNav = ({ openNav, setOpenNav }) => {
  const { user } = useUser();
  return (
    <div
      className={`${openNav ? "left-0" : "-left-full"} fixed z-20 bottom-0 top-0 transition-all rounded-r-2xl shadow-md bg-white text-black flex flex-col justify-between h-screen w-[75%] p-8 pt-16 pb-6 md:hidden`}
    >
      <div>
        {
          <div>
            <div className=" relative flex flex-col gap-3">
                <div onClick ={()=> setOpenNav(false) } className=" absolute right-0 top-0 m-1"><RxCross2/> </div>
              {user? <UserButton size={50} /> : <FaUserCircle size={50} />}
              <div className="flex flex-col gap-3 ">
                <h1> Hello, {user?.firstName}</h1>
                <p className="text-sm text-slate-500">Premium User</p>
              </div>
              <div className=" flex flex-col gap-1 not-[]:md:hidden">
                          <Show when="signed-out" className='flex gap-1'>
                            <SignInButton className=" w-full bg-red-600 rounded text-white text-lg px-2 py-1 cursor-pointer " />
                          </Show>
                          <Show when ="signed-out">
                            <SignUpButton className=" hover:bg-red-700 bg-red-600 w-full rounded text-white text-lg px-3 py-1 cursor-pointer " />
                            </Show>
                        </div>
            </div>
            <nav className="mt-12">
              <ul className=" flex flex-col gap-7 font-semibold text-2xl">
                <Link className= 'cursor-pointer' onClick={()=>setOpenNav(false)} to={"/"}>
                  <li>Home</li>
                </Link>
                <Link className= 'cursor-pointer' onClick={()=>setOpenNav(false)} to={"/products"}>
                  <li>Products</li>
                </Link>
                <Link className= 'cursor-pointer' onClick={()=>setOpenNav(false)} to={"/about"}>
                  <li>About</li>
                </Link>
                <Link className= 'cursor-pointer' onClick={()=>setOpenNav(false)} to={"/contact"}>
                  <li>Contact</li>
                </Link>
              </ul>
            </nav>
          </div>
        }
      </div>
    </div>
  );
};

export default MobileNav;
