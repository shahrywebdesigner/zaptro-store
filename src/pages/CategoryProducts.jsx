import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate, useParams } from "react-router-dom"
import CategoryProductsShow from "../components/CategoryProductsShow";
import loading from '../assets/loading.webm'
import axios from "axios";

const CategoryProducts = () => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState([])
    const singleCategory = useParams();
    
    useEffect(()=>{
      const getCartegoryProducts = async()=>{
        try{
          const url =await axios.get( `https://dummyjson.com/products/category/${singleCategory.category}`);
          const category = url.data.products;
          setSearchData(category)
        }catch(err){
          console.log(err)
        }
      }
      getCartegoryProducts()
      window.scrollTo(0,0)
    },[singleCategory.category])

  return (
    <>
      {
        searchData?.length>0?(
    <div className="my-10 max-w-6xl mx-auto">
      <button
      onClick={()=>{navigate('/')}} 
      className="bg-gray-800 mb-6 ml-3 md:ml-0 flex items-center px-2 py-1 rounded-md text-gray-200 cursor-pointer hover:bg-gray-900">
        <IoIosArrowBack className="h-5 w-5" /> Back</button>

          {
            searchData?.map((product,index)=>{
              return <div key={index} className="">
                <CategoryProductsShow product={product} />
              </div>
            })
          }
          </div>
          ):(
            <div className="flex items-center justify-center h-100">
              <video src="" loop muted autoPlay >
                <source src={loading} type="video/webm" />
              </video>
            </div>

          )
              }
              </>
  )
}

export default CategoryProducts
