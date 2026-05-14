import { useState, useCallback } from "react";
import { DataContext } from "./CreateContext";
import axios from "axios";
export const DataProvider = ({ children }) => {
  // api data fetch
  const [data, setdata] = useState([]);

  const productsApiData = useCallback(async () => {
    const url = await axios.get("https://dummyjson.com/products");

    const productsData = url.data.products;
    setdata(productsData);
  }, []);

  // Only unique category data
  // const getCategoryData = (data,category)=>{
  //       let newVal = data?.map((curElem)=>{
  //         return curElem[category]
  //       });
  //       newVal = [...new Set(newVal)]
  //       return newVal;
  //     };

  //     const uniqueCategoryData = getCategoryData(data,'category');

  const getCategoryData = (data, category) => {
    let newProduct = data?.map((curCategory) => {
      return curCategory[category];
    });
    newProduct = newProduct.filter((val) => val && val !== "");

    newProduct = ["All", ...new Set(newProduct)];
    return newProduct;
  };
  const uniqueCategory = getCategoryData(data, "category");
  const uniqueBrand = getCategoryData(data, "brand");

  return (
    <DataContext.Provider
      value={{ data, setdata, productsApiData, uniqueBrand, uniqueCategory }}
    >
      {children}
    </DataContext.Provider>
  );
};
