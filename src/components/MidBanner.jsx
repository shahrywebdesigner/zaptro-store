import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  return (
    <div className='md:py-30 bg-gray-100'>
      <div className="relative bg-cover bg-center h-138 md:h-150 md:rounded-2xl max-w-6xl mx-auto flex flex-col items-center pt-28" style={{background:`url(${banner})`, backgroundAttachment:'fixed', backgroundPosition:"center"}}>
        <div className="absolute bg-black/60 inset-0 flex items-center justify-center md:rounded-2xl ">
        <div className=" px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" >Next-Gen Electronics at Your Fingertips</h1>
        <p className='text-lg  md:text-xl mb-6' >Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300" >Show Now</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
