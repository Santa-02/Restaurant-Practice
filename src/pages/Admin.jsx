import { useState } from "react";
import AddFood from "../component/AddFood";
import FoodList from "../component/FoodList";
import OrderList from "../component/OrderList";

function Admin() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Burger",
      price: 1200,
    },
    {
      id: 2,
      name: "Pizza",
      price: 1800,
    },
    {
      id: 3,
      name: "Rice",
      price: 900,
    },
  ]);

  const [orders] = useState([
    {
      id: 1,
      food: "Burger",
      quantity: 2,
      total: 2400,
    },
    {
      id: 2,
      food: "Pizza",
      quantity: 1,
      total: 1800,
    },
  ]);

  const addFood = (name, price) => {
    const newFood = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    setFoods([...foods, newFood]);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <AddFood onAddFood={addFood} />

      <FoodList
        foods={foods}
        onDeleteFood={deleteFood}
      />

      <OrderList orders={orders} />
    </div>
  );
}

export default Admin;