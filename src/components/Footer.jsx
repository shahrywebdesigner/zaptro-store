import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { LiaPinterest } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-900 pt-16 pb-8">
      {/* Upper Main Grid links layer layout */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Brand details context */}
        <div className="space-y-4">
          <Link to="/" className="group inline-block">
            <h2 className="text-3xl font-black tracking-tight text-white select-none transition-transform duration-200 group-hover:scale-[1.01]">
              <span className="text-red-500 font-serif inline-block transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-110">
                Z
              </span>
              aptro
            </h2>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Powering Your World with the Best in Premium Electronics and Modern Smart Gadgets.
          </p>
          <div className="space-y-1.5 text-xs text-gray-400 font-medium">
            <p>📍 Muridke, Lahore, Pakistan</p>
            <p>✉️ support@zaptro.com</p>
            <p>📞 +92 312-047-6372</p>
          </div>
        </div>

        {/* Col 2: Customer Navigation Links */}
        <div>
          <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Contact Us</Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Explore Catalog</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors duration-200">About Our Brand</Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-400 hover:text-red-500 transition-colors duration-200">View Shipping Cart</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Social Platform Badges */}
        <div>
          <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4">Follow Us</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Stay connected with us across social networks to catch immediate stock updates.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-900 hover:bg-red-500 rounded-xl text-white transition-all duration-300 shadow-sm hover:-translate-y-0.5">
              <MdFacebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-900 hover:bg-red-500 rounded-xl text-white transition-all duration-300 shadow-sm hover:-translate-y-0.5">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-900 hover:bg-red-500 rounded-xl text-white transition-all duration-300 shadow-sm hover:-translate-y-0.5">
              <AiFillTwitterSquare className="h-5 w-5" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-900 hover:bg-red-500 rounded-xl text-white transition-all duration-300 shadow-sm hover:-translate-y-0.5">
              <LiaPinterest className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Col 4: Newsletter Mailing Form */}
        <div>
          <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4">Stay in the Loop</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Subscribe to get special offers, seasonal tech giveaways, and flash sales alerts.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-gray-900 border border-gray-800 rounded-xl p-1 focus-within:ring-2 focus-within:ring-red-500 transition duration-200">
            <input
              className="bg-transparent text-sm w-full py-2 px-3 focus:outline-none text-white placeholder-gray-500"
              type="email"
              placeholder="Your email address"
              required
            />
            <button 
              type="submit" 
              className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Lower Base: Copyright Accent Line Layout */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-gray-900 text-center text-xs font-semibold text-gray-500 tracking-wider">
        <p>&copy; {new Date().getFullYear()} ZAPTRO STORE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;