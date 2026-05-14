import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProductPage from "./pages/SingleProductPage";
import CategoryProducts from "./pages/CategoryProducts";
import { useCartData } from "./Context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {

  const [location, setlocation] = useState();
  const [openDropDown, setOpenDropDown] = useState(false);
  const{setCartItem,cartItem} = useCartData();
  async function getLocation() {
    navigator.geolocation.getCurrentPosition (async (pos)=>{
      const {latitude,longitude} = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try{  const apiData = await axios.get(url);
      const address = apiData.data.address;
     setOpenDropDown(false)
      
      setlocation(address)}catch(err){
        console.log(err)
      }
    })    
  }
useEffect(()=>{
  getLocation()
},[])

// local storage to cart
useEffect(()=>{
  const localStoredData = localStorage.getItem("cartItem");
  if(localStoredData){
    setCartItem(JSON.parse(localStoredData))
  }
},[])

// cart to local storage
useEffect(()=>{
  localStorage.setItem("cartItem",JSON.stringify(cartItem))
},[cartItem])

  return (
    <div>
      <BrowserRouter>
        <Navbar location={location} getLocation={getLocation} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products/:id" element={<SingleProductPage/>}></Route>
          <Route path="/category/:category" element={<CategoryProducts/>} ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<ProtectedRoute><Cart location={location} getLocation={getLocation} /></ProtectedRoute>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
