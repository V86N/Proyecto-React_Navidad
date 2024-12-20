import { createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer"
import axios from "axios"


const initialState = {
  products: [],
  cart: []
}


export const ProductContext  = createContext(initialState);

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/products/getAll");
        console.log(res.data);
        
        // setNews(res.data.results)
        //modificamos el estado de Characters
        dispatch({
          type: "GET_PRODUCTS",
          payload: res.data
        });
      };

      const addCart = (product) => {
        dispatch({
          type: "ADD_CART",
          payload: product,
        });
      };
    
      return (
        <ProductContext.Provider
          value={{
            products: state.products,
            getProducts,
            addCart
          }}
        >
          {children}
        </ProductContext.Provider>
      );
    };

    