import { useState } from "react";

function AddFood({ onAddFood }) {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (foodName === "" || price === "") {
      alert("Please enter food name and price");
      return;
    }

    onAddFood(foodName, price);

    setFoodName("");
    setPrice("");
  };

  return (
    <section className="add-food-section">

      <form
        className="add-food-form"
        onSubmit={handleSubmit}
      >

        <input
          className="food-input"
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Food name"
        />

        <input
          className="food-input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <button
          className="add-button"
          type="submit"
        >
          ➕ Add Food
        </button>

      </form>

    </section>
  );
}

export default AddFood;