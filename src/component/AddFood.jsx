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

    // Clear form
    setFoodName("");
    setPrice("");
  };

  return (
    <section>
      <h2>Add Food</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Name: </label>

          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="Enter food name"
          />
        </div>

        <br />

        <div>
          <label>Price: </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>

        <br />

        <button type="submit">
          Add Food
        </button>
      </form>
    </section>
  );
}

export default AddFood;