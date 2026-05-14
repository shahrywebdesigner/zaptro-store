import { createContext,useContext } from "react";

export const DataContext = createContext(null);
export const useApiData  = ()=> useContext(DataContext)
