
import { useState } from "react";
import "./cart.css";

const sampleItems = [
  {
    id: 1,
    name: "Chicken Burger",
    price: 1200,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
  },
  {
    id: 2,
    name: "French Fries",
    price: 650,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
  },
  {
    id: 3,
    name: "Coca-Cola",
    price: 350,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(sampleItems);

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>
      <p>Review your items before placing your order.</p>

      <div className="cart-container">
        <section className="cart-items">
          <h2>Your Cart ({cartItems.length})</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p className="cart-item-price">
                    Rs. {item.price.toLocaleString()}
                  </p>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        disabled={item.quantity === 1}
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong className="cart-item-total">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </strong>
              </div>
            ))
          )}
        </section>

        <section className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>

          <hr />

          <div className="summary-row summary-total">
            <strong>Total</strong>
            <strong>Rs. {total.toLocaleString()}</strong>
          </div>

          <button
            type="button"
            className="checkout-btn"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </section>
      </div>
    </main>
  );
}

export default Cart;