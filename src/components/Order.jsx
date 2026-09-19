function Order() {
  return (
    <div>
      <h1>Place Your Order</h1>

      <input type="text" placeholder="Customer Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Delivery Address" />

      <select>
        <option>Cash on Delivery</option>
        <option>Card Payment</option>
      </select>

      <button>Place Order</button>
    </div>
  );
}

export default Order;