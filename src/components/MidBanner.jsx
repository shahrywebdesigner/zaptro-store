import banner from '../assets/banner1.jpg';
import { useNavigate } from 'react-router-dom';

const MidBanner = () => {
  const navigate = useNavigate();

  return (
    <div className='py-8 md:py-16 bg-white px-4'>
      <div 
        className="relative bg-cover bg-center h-[340px] md:h-[400px] rounded-3xl max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden shadow-lg border border-gray-100" 
        style={{
          backgroundImage: `url(${banner})`, 
          backgroundPosition: "center"
          /* backgroundAttachment: "fixed" has been removed to fix the stuck background layout issue */
        }}
      >
        {/* Dark gradient overlay layer for sharp text readability */}
        <div className="absolute bg-gradient-to-t from-black/75 via-black/45 to-black/65 inset-0 flex items-center justify-center p-6">
          <div className="max-w-2xl text-center text-white space-y-5">
            <h1 className="text-2xl md:text-5xl font-black tracking-tight leading-tight">
              Next-Gen Electronics <br />at Your Fingertips
            </h1>
            <p className='text-gray-200 text-xs md:text-base max-w-lg mx-auto leading-relaxed font-medium'>
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => navigate('/products')}
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-md shadow-red-600/20 hover:shadow-red-600/30 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer tracking-wide uppercase text-xs"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;