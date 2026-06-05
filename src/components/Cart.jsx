import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart({ cart, updateQuantity }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.map((item) => {
        return (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        );
      })}
    </section>
  );
}
