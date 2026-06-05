import "./CartItem.css";

export default function CartItem({ item, updateQuantity }) {
  return (
    <article className="cart-item">
      <div>
        <p>{item.image}</p>
        <p>{item.name}</p>
        <div className="cart-buttons">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
      </div>
    </article>
  );
}
