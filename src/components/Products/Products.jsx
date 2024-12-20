import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import "./Products.scss"

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductContext)
 
  useEffect(() => {
    getProducts();
  }, []);
 
  return (
    <div>
        {products.map((product => {
            return (
                <div key = {product.id}>
                    <p>{product.name} {product.price} €</p>
                    <button onClick={() => addCart(product)}>Add Cart</button>
                 </div>   
            )
        }
        
      ))}
    </div>
    
  )
}
  
export default Products