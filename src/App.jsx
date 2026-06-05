import PLANTS from "./data";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  console.log("addToCart:", cart);

  function addToCart(plant) {
    setCart((previousCart) => {
      const existingPlant = previousCart.find((cartItem) => {
        return cartItem.id === plant.id;
      });

      if (existingPlant) {
        return previousCart.map((cartItem) => {
          if (cartItem.id === plant.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      }
      return [...previousCart, { ...plant, quantity: 1 }];
    });
  }

  return (
    <main className="app">
      <Header />
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} />
    </main>
  );
}
