
import { useState } from "react";
import "./Order.css";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="order-page">
      <div className="order-container">

        {/* Page Header */}
        <div className="order-header">
          <h1>Place Your Order</h1>
          <p>Complete your details and enjoy your meal!</p>
        </div>

        <div className="order-content">

          {/* Customer Details */}
          <div className="order-card">
            <h2>Customer Details</h2>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Delivery Address</label>
                <textarea
                  name="address"
                  placeholder="Enter your delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>Payment Method</label>

                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                >
                  <option>Cash on Delivery</option>
                  <option>Card Payment</option>
                </select>
              </div>

              <button type="submit" className="place-order-btn">
                Place Order
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="order-card summary-card">
            <h2>Order Summary</h2>

            <div className="order-item">
              <div>
                <h3>Chicken Burger</h3>
                <p>Quantity: 2</p>
              </div>
              <span>Rs. 1,600</span>
            </div>

            <div className="order-item">
              <div>
                <h3>French Fries</h3>
                <p>Quantity: 1</p>
              </div>
              <span>Rs. 500</span>
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>Rs. 2,100</span>
            </div>

            <div className="summary-line">
              <span>Delivery Fee</span>
              <span>Rs. 200</span>
            </div>

            <div className="total-line">
              <span>Total</span>
              <span>Rs. 2,300</span>
            </div>
          </div>

        </div>

        {/* Success Message */}
        {orderPlaced && (
          <div className="success-message">
            <h2>Order Placed Successfully!</h2>
            <p>
              Thank you, {formData.name}. Your order has been received.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Order;

