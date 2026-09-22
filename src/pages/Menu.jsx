import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const menuItems = [
    {
      id: 1,
      name: "Chicken Burger",
      category: "Burger",
      price: 1200,
      description: "Juicy chicken patty with lettuce and special sauce",
      icon: "🍔",
    },
    {
      id: 2,
      name: "Beef Burger",
      category: "Burger",
      price: 1400,
      description: "Grilled beef patty with cheese and fresh vegetables",
      icon: "🍔",
    },
    {
      id: 3,
      name: "Chicken Pizza",
      category: "Pizza",
      price: 2500,
      description: "Chicken, mozzarella cheese and our special pizza sauce",
      icon: "🍕",
    },
    {
      id: 4,
      name: "Cheese Pizza",
      category: "Pizza",
      price: 2200,
      description: "Classic pizza loaded with rich mozzarella cheese",
      icon: "🍕",
    },
    {
      id: 5,
      name: "Chicken Fried Rice",
      category: "Rice",
      price: 1500,
      description: "Fried rice with chicken, vegetables and egg",
      icon: "🍚",
    },
    {
      id: 6,
      name: "Seafood Fried Rice",
      category: "Rice",
      price: 1800,
      description: "Fried rice served with fresh seafood and vegetables",
      icon: "🍚",
    },
    {
      id: 7,
      name: "Coca Cola",
      category: "Drinks",
      price: 300,
      description: "Chilled refreshing soft drink",
      icon: "🥤",
    },
    {
      id: 8,
      name: "Orange Juice",
      category: "Drinks",
      price: 450,
      description: "Fresh and refreshing orange juice",
      icon: "🍊",
    },
  ];

  const categories = ["All", "Burger", "Pizza", "Rice", "Drinks"];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  function addToCart(item) {
    alert(`${item.name} added to cart!`);
  }

  return (
    <div className="menu-page">

      <div className="menu-container">

        {/* Header */}

        <div className="menu-header">
          <p className="menu-small-title">OUR MENU</p>

          <h1>Discover Our Menu</h1>

          <p className="menu-subtitle">
            Fresh ingredients, delicious flavours and meals made for you.
          </p>
        </div>

        {/* Search */}

        <div className="menu-search-wrapper">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search for food..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {/* Categories */}

        <div className="category-buttons">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Result count */}

        <div className="menu-result-row">

          <h2>
            {selectedCategory === "All"
              ? "All Dishes"
              : selectedCategory}
          </h2>

          <span>
            {filteredItems.length} items
          </span>

        </div>

        {/* Menu Cards */}

        <div className="menu-grid">

          {filteredItems.map((item) => (

            <div
              className="menu-card"
              key={item.id}
            >

              <div className="food-image-area">

                <span className="food-icon">
                  {item.icon}
                </span>

                <span className="food-category">
                  {item.category}
                </span>

              </div>

              <div className="menu-card-content">

                <h3>{item.name}</h3>

                <p className="food-description">
                  {item.description}
                </p>

                <div className="card-bottom">

                  <div className="food-price">
                    <span>Rs.</span>
                    {item.price.toLocaleString()}
                  </div>

                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    + Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Empty search */}

        {filteredItems.length === 0 && (

          <div className="no-items">

            <div className="no-items-icon">
              🍽️
            </div>

            <h2>No food found</h2>

            <p>
              Try another search or category.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Menu;