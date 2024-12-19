import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";


const Cart = () => {
  const { cart } = useContext(ProductContext);

  if (cart.length <= 0) {
    return <span>Your cart its empty</span>;
  }

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });
  return (
    <div>
      {cartItem}
    </div>
  );
};

export default Cart;