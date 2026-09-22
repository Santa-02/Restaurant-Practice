import { useState } from "react";
import "./Menu.css";

function Menu() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const menuItems = [
    {
      id: 1,
      name: "Chicken Burger",
      category: "Burger",
      price: 1200
    },
    {
      id: 2,
      name: "Beef Burger",
      category: "Burger",
      price: 1400
    },
    {
      id: 3,
      name: "Chicken Pizza",
      category: "Pizza",
      price: 2500
    },
    {
      id: 4,
      name: "Cheese Pizza",
      category: "Pizza",
      price: 2200
    },
    {
      id: 5,
      name: "Chicken Fried Rice",
      category: "Rice",
      price: 1500
    },
    {
      id: 6,
      name: "Seafood Fried Rice",
      category: "Rice",
      price: 1800
    },
    {
      id: 7,
      name: "Coca Cola",
      category: "Drinks",
      price: 300
    },
    {
      id: 8,
      name: "Orange Juice",
      category: "Drinks",
      price: 450
    }
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );

  function addToCart(item) {
    alert(item.name + " added to cart");
  }

  return (
    <div className="menu-container">

      <h1>Restaurant Menu</h1>

      <p>Select your favourite food</p>

      <div className="category-buttons">

        <button onClick={() => setSelectedCategory("All")}>
          All
        </button>

        <button onClick={() => setSelectedCategory("Burger")}>
          Burger
        </button>

        <button onClick={() => setSelectedCategory("Pizza")}>
          Pizza
        </button>

        <button onClick={() => setSelectedCategory("Rice")}>
          Rice
        </button>

        <button onClick={() => setSelectedCategory("Drinks")}>
          Drinks
        </button>

      </div>

      <div className="menu-grid">

        {filteredItems.map((item) => (

          <div className="menu-card" key={item.id}>

            <h2>{item.name}</h2>

            <p>{item.category}</p>

            <h3>Rs. {item.price}</h3>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Menu;