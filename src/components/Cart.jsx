import PLANTS from "../data";
import PlantCard from "./PlantCard";
import CartItem from "./CartItem";

export default function Cart({ cart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </section>
  );
}
