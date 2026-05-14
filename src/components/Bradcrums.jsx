import { useNavigate } from "react-router-dom"

const Bradcrums = ({title}) => {
    const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto mb-5  px-4 mt-10">
      <h1 className="text-lg md:text-xl p-2 font-semibold text-gray-900"><span className="cursor-pointer" onClick={()=>navigate('/')}>Home/</span> <span className="cursor-pointer" onClick={() => navigate('/products')}>Products/</span><span> {title}</span></h1>
    </div>
  )
}

export default Bradcrums
