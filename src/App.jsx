import PLANTS from "./data";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

export default function App() {
  return (
    <main className="app">
      <Header />
      <PlantList plants={PLANTS} />
    </main>
  );
}
