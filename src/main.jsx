import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";
import { DataProvider } from "./Context/DataProvider.jsx";
import { CartProvider } from "./Context/CartProvider.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";


createRoot(document.getElementById("root")).render(
  <DataProvider>
    <CartProvider>
      <ClerkProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
        <ScrollToTop color="white" style={{ display:"flex", alignItems:"center",justifyContent:"center", backgroundColor:"#fd2b36"}} smooth />
      </ClerkProvider>
    </CartProvider>
  </DataProvider>,
);
