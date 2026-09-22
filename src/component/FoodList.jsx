function FoodList({ foods, onDeleteFood }) {
  return (
    <div className="food-grid">

      {foods.length === 0 ? (
        <p>No food items available.</p>
      ) : (
        foods.map((food) => (
          <div className="food-card" key={food.id}>

            <img
              className="food-image"
              src={food.image}
              alt={food.name}
            />

            <div className="food-info">

              <h3 className="food-name">
                {food.name}
              </h3>

              <p className="food-price">
                Rs. {food.price}
              </p>

              <button
                className="delete-button"
                onClick={() => onDeleteFood(food.id)}
              >
                🗑️ Delete
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default FoodList;