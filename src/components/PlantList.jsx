import PLANTS from "../data";
import PlantCard from "./PlantCard";
import "./PlantList.css";

export default function PlantList({ plants, addToCart }) {
  console.log("plants in list:", plants);
  return (
    <section className="list">
      <h2>Plants</h2>
      <ul className="plants-list">
        {plants.map((plant) => {
          return <PlantCard plant={plant} addToCart={addToCart} />;
        })}
      </ul>
    </section>
  );
}
