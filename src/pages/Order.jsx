
import React, { useState } from "react";
import "./Order.css";

function Order() {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Chicken Burger",
      description: "Crispy chicken, lettuce & special sauce",
      price: 1200,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200",
    },
    {
      id: 2,
      name: "French Fries",
      description: "Crispy golden French fries",
      price: 500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200",
    },
    {
      id: 3,
      name: "Coca Cola",
      description: "Chilled Coca Cola 500ml",
      price: 300,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200",
    },
  ]);

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const increaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal >= 3000 ? 0 : 300;

  const total = subtotal + deliveryFee - discount;

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "WELCOME10") {
      setDiscount(300);
      alert("Promo code applied!");
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.phone ||
      !customer.email ||
      !customer.address ||
      !customer.city
    ) {
      alert("Please complete all delivery details.");
      return;
    }

    alert("🎉 Your order has been placed successfully!");

    console.log({
      customer,
      items,
      paymentMethod,
      subtotal,
      deliveryFee,
      discount,
      total,
    });
  };

  return (
    <div className="checkout-page">

      {/* Header */}

      <div className="checkout-header">
        <div>
          <span className="restaurant-label">
            🍴 Restaurant
          </span>

          <h1>Checkout</h1>

          <p>
            Complete your order and enjoy your meal.
          </p>
        </div>

        <div className="secure-checkout">
          🔒 Secure Checkout
        </div>
      </div>

      <form onSubmit={handlePlaceOrder}>

        <div className="checkout-layout">

          {/* LEFT SIDE */}

          <div className="checkout-left">

            {/* Customer Details */}

            <section className="checkout-card">

              <div className="section-title">
                <div className="section-icon">
                  👤
                </div>

                <div>
                  <h2>Customer Details</h2>
                  <p>Enter your contact information</p>
                </div>
              </div>

              <div className="input-grid">

                <div className="input-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={customer.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+94 77 123 4567"
                    value={customer.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group full">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={customer.email}
                    onChange={handleChange}
                  />
                </div>

              </div>

            </section>


            {/* Delivery Address */}

            <section className="checkout-card">

              <div className="section-title">

                <div className="section-icon">
                  📍
                </div>

                <div>
                  <h2>Delivery Address</h2>
                  <p>Where should we deliver your food?</p>
                </div>

              </div>

              <div className="input-group">

                <label>Street Address</label>

                <textarea
                  name="address"
                  placeholder="House number, street name..."
                  value={customer.address}
                  onChange={handleChange}
                  rows="3"
                />

              </div>

              <div className="input-grid">

                <div className="input-group">

                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Colombo"
                    value={customer.city}
                    onChange={handleChange}
                  />

                </div>

                <div className="delivery-info">

                  <span>🚚</span>

                  <div>
                    <strong>Estimated delivery</strong>
                    <small>30–45 minutes</small>
                  </div>

                </div>

              </div>

            </section>


            {/* Payment */}

            <section className="checkout-card">

              <div className="section-title">

                <div className="section-icon">
                  💳
                </div>

                <div>
                  <h2>Payment Method</h2>
                  <p>Choose how you'd like to pay</p>
                </div>

              </div>

              <div className="payment-options">

                <label
                  className={`payment-option ${
                    paymentMethod === "cash" ? "selected" : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <span className="payment-icon">💵</span>

                  <div>
                    <strong>Cash on Delivery</strong>
                    <small>Pay when your food arrives</small>
                  </div>

                </label>


                <label
                  className={`payment-option ${
                    paymentMethod === "card" ? "selected" : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <span className="payment-icon">💳</span>

                  <div>
                    <strong>Credit / Debit Card</strong>
                    <small>Secure online payment</small>
                  </div>

                </label>

              </div>

            </section>

          </div>


          {/* RIGHT SIDE */}

          <aside className="order-summary">

            <div className="summary-header">

              <div>
                <h2>Your Order</h2>
                <span>{items.length} items</span>
              </div>

              <span className="cart-icon">🛒</span>

            </div>


            {/* Items */}

            <div className="summary-items">

              {items.map((item) => (

                <div className="summary-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="item-details">

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <div className="item-bottom">

                      <div className="quantity-control">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>

                      <strong>
                        Rs.{" "}
                        {item.price * item.quantity}
                      </strong>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="remove-item"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>


            {/* Promo */}

            <div className="promo-section">

              <div className="promo-input">

                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) =>
                    setPromoCode(e.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={applyPromo}
                >
                  Apply
                </button>

              </div>

              <small>
                Try <strong>WELCOME10</strong> for Rs.300
                off
              </small>

            </div>


            {/* Price */}

            <div className="price-details">

              <div>
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>

              <div>
                <span>Delivery Fee</span>

                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `Rs. ${deliveryFee}`}
                </span>
              </div>

              {discount > 0 && (

                <div className="discount">

                  <span>Discount</span>

                  <span>
                    - Rs. {discount}
                  </span>

                </div>

              )}

            </div>


            <div className="grand-total">

              <div>
                <span>Total</span>
                <small>Including all taxes</small>
              </div>

              <strong>
                Rs. {total}
              </strong>

            </div>


            {/* Place Order */}

            <button
              type="submit"
              className="place-order"
            >
              <span>Place Order</span>
              <span>→</span>
            </button>

            <div className="safe-payment">
              🔒 Your payment information is secure
            </div>

          </aside>

        </div>

      </form>

    </div>
  );
}

export default Order;
