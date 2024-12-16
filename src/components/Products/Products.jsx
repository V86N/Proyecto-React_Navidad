import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'

const Products = () => {
  const { products, getProducts } = useContext(ProductContext)
 
  useEffect(() => {
    getProducts();
  }, []);
 
  return (
    <div>products</div>
    
  )
}
  
export default Products