import PLANTS from "../data";
import PlantCard from "./PlantCard";

export default function PlantList({ plants }) {
  console.log("plants in list:", plants);
  return (
    <section className="list">
      <h2>Plants</h2>
      <ul className="plants-list">
        {plants.map((plant) => {
          return <PlantCard plant={plant} />;
        })}
      </ul>
    </section>
  );
}
