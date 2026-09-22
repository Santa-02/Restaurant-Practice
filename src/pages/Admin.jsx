import { useState } from "react";
import AddFood from "../component/AddFood";
import FoodList from "../component/FoodList";
import OrderList from "../component/OrderList";
import "./Admin.css";

function Admin() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Classic Burger",
      price: 1200,
      image: "/images/burger.jpg",
    },
    {
      id: 2,
      name: "Italian Pizza",
      price: 1800,
      image: "/images/pizza.jpg",
    },
    {
      id: 3,
      name: "Chicken Rice",
      price: 900,
      image: "/images/rice.jpg",
    },
  ]);

  const [orders] = useState([
    {
      id: 1,
      food: "Classic Burger",
      quantity: 2,
      total: 2400,
    },
    {
      id: 2,
      food: "Italian Pizza",
      quantity: 1,
      total: 1800,
    },
  ]);

  const addFood = (name, price) => {
    const newFood = {
      id: Date.now(),
      name: name,
      price: Number(price),
      image: "/images/default-food.jpg",
    };

    setFoods([...foods, newFood]);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <div className="admin-page">

      {/* HEADER */}

      <header className="admin-header">
        <div className="restaurant-title">
          🍽️ Classic Restaurant
        </div>

        <div className="admin-user">
          👨‍💼 Administrator
        </div>
      </header>

      <div className="admin-layout">

        {/* SIDEBAR */}

        <aside className="admin-sidebar">

          <h2 className="sidebar-title">
            Admin Panel
          </h2>

          <button className="sidebar-button">
            🏠 Dashboard
          </button>

          <button className="sidebar-button">
            🍔 Food Menu
          </button>

          <button className="sidebar-button">
            ➕ Add Food
          </button>

          <button className="sidebar-button">
            🛒 Orders
          </button>

        </aside>

        {/* MAIN CONTENT */}

        <main className="admin-content">

          <h1 className="welcome-title">
            Welcome, Admin 👋
          </h1>

          <p className="subtitle">
            Manage your restaurant menu and orders.
          </p>

          {/* FOOD */}

          <h2>🍽️ Food Menu</h2>

          <FoodList
            foods={foods}
            onDeleteFood={deleteFood}
          />

          {/* ADD FOOD */}

          <h2>➕ Add New Food</h2>

          <AddFood onAddFood={addFood} />

          {/* ORDERS */}

          <h2>🛒 Recent Orders</h2>

          <OrderList orders={orders} />

        </main>

      </div>
    </div>
  );
}

export default Admin;