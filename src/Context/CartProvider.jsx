import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addtoCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      const updateCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItem(updateCart);
      toast.success("Product added to cart!")
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("Product quantity successfully increased!")
    }
};

const increase = (id) => {
    const increaseProduct = cartItem.map((item) => {
        return item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
        }
        : item;
    });
    setCartItem(increaseProduct);
    toast.success("Product quantity successfully increased!")
};

const decrease = (id) => {
    const decreaseProduct = cartItem
    .map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
    })
    .filter((item) => item.quantity > 0);
    setCartItem(decreaseProduct);
    toast.info("Product quantity successfully decreased!")
};
const deleteItem = (id) => {
    const deleteProdut = cartItem.filter((item) => item.id !== id);
    setCartItem(deleteProdut);
    toast.error("Product deleted successfully!")
  };

  //   const udateCartItem = (id, action) => {
  //     setCartItem(
  //       cartItem.map((item) => {
  //         if (item.id === id) {
  //           let quantity = item.quantity;
  //           if (action === "increase") {
  //             quantity += 1;
  //           } else if (action === "decrease") {
  //             quantity -= 1;
  //           }
  //           return quantity > 0 ? { ...item, quantity: quantity } : null;
  //         }
  //         return item;
  //       }).filter((item) => item !== null),
  //     );
  //   };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addtoCart,
        increase,
        decrease,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
