function FoodList({ foods, onDeleteFood }) {
  return (
    <section>
      <h2>Food Items</h2>

      {foods.length === 0 ? (
        <p>No food items available.</p>
      ) : (
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              {food.name} - Rs. {food.price}

              <button
                onClick={() => onDeleteFood(food.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FoodList;