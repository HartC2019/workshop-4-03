import PLANTS from "../data";
import "./PlantCard.css";

export default function PlantCard({ plant, addToCart }) {
  return (
    <section className="card">
      <div className="image">{plant.image}</div>
      <h4 className="card-name">{plant.name}</h4>
      <button className="card-button" onClick={() => addToCart(plant)}>
        Add to cart
      </button>
    </section>
  );
}
