import PLANTS from "./data";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import { useState } from "react";
import "./App.css";

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

  function updateQuantity(id, change) {
    setCart((previousCart) => {
      const updatedCart = previousCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + change,
          };
        } else {
          return item;
        }
      });

      return updatedCart.filter((item) => {
        return item.quantity > 0;
      });
    });
  }

  return (
    <main className="app">
      <Header />
      <section className="content">
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart cart={cart} updateQuantity={updateQuantity} />
      </section>
    </main>
  );
}
