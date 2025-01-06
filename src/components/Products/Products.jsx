import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import "./Products.scss";

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Nuestros productos</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image} 
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} €</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addCart(product)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
