import React, { useState } from "react";
import "./Order.css";

function Order() {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  // Sample cart data for now
  const cartItems = [
    {
      id: 1,
      name: "Chicken Burger",
      price: 1200,
      quantity: 2,
    },
    {
      id: 2,
      name: "French Fries",
      price: 500,
      quantity: 1,
    },
    {
      id: 3,
      name: "Coke",
      price: 300,
      quantity: 2,
    },
  ];

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 300;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.phone ||
      !customer.email ||
      !customer.address
    ) {
      alert("Please fill all customer details.");
      return;
    }

    alert("Order placed successfully!");

    console.log("Customer Details:", customer);
    console.log("Order Items:", cartItems);
    console.log("Total:", total);
  };

  return (
    <div className="order-page">

      <div className="order-container">

        <h1>Place Your Order</h1>
        <p className="page-subtitle">
          Enter your details and review your order
        </p>

        <form onSubmit={handlePlaceOrder}>

          <div className="order-content">

            {/* CUSTOMER DETAILS */}

            <div className="customer-section">

              <h2>Customer Details</h2>

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={customer.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={customer.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={customer.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Delivery Address</label>

                <textarea
                  name="address"
                  placeholder="Enter your delivery address"
                  value={customer.address}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

            </div>


            {/* ORDER SUMMARY */}

            <div className="summary-section">

              <h2>Order Summary</h2>

              {cartItems.map((item) => (
                <div className="summary-item" key={item.id}>

                  <div>
                    <h3>{item.name}</h3>

                    <p>
                      Rs. {item.price} × {item.quantity}
                    </p>
                  </div>

                  <strong>
                    Rs. {item.price * item.quantity}
                  </strong>

                </div>
              ))}


              <div className="summary-line">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>

              <div className="summary-line">
                <span>Delivery Fee</span>
                <span>Rs. {deliveryFee}</span>
              </div>

              <hr />

              <div className="total-line">
                <span>Total</span>
                <strong>Rs. {total}</strong>
              </div>

              <button
                type="submit"
                className="place-order-btn"
              >
                Place Order
              </button>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Order;