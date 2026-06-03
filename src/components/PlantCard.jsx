import PLANTS from "../data";

export default function PlantCard({ plant }) {
  console.log("plant on card:", plant);
  return (
    <section className="card">
      <div className="image">{plant.image}</div>
      <h4 className="card-name">{plant.name}</h4>
      <button className="card-button">Add to cart</button>
    </section>
  );
}
