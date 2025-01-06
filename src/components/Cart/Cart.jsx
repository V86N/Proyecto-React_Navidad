import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import { UserContext } from '../../context/UserContext/UserState';
import OrderService from '../../components/services/OrderService';

const Cart = () => {
    const { cart, clearCart } = useContext(ProductContext);
    const { getUserInfo } = useContext(UserContext);

    if (cart.length === 0) {
        return (
            <div className="container text-center mt-4">
                <h5 className="text-muted">Su carrito está vacío</h5>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Su carrito</h4>
            <ul className="list-group mb-3">
                {cart.map(product => (
                    <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Producto: {product.name} - Precio: {product.price} €</span>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-between">
                <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
                <button
                    className="btn btn-primary"
                    onClick={async () => {
                        await OrderService.createOrder(cart);
                        clearCart();
                       
                    }}
                >
                    Crear pedido
                </button>
            </div>
        </div>
    );
};

export default Cart;



