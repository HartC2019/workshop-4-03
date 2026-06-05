export default function CartItem({ item }) {
  return (
    <article className="cart-item">
      <div>
        <h2>Cart</h2>
        <p>{item.image}</p>
        <p>{item.name}</p>
        <div className="cart-buttons">
          <button>-</button>
          <p>{item.quantity}</p>
          <button>+</button>
        </div>
      </div>
    </article>
  );
}
