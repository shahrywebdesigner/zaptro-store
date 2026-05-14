import { createContext, useContext } from "react";

export  const CartContext =  createContext(null);
export const useCartData = ()=>{
    return ( 
        useContext(CartContext)
    )
}