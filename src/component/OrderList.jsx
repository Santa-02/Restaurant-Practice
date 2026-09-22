function OrderList({ orders }) {
  return (
    <section className="orders-section">

      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
          >

            <div>
              <div className="order-number">
                Order #{order.id}
              </div>

              <div>
                {order.food} × {order.quantity}
              </div>
            </div>

            <div className="order-total">
              Rs. {order.total}
            </div>

          </div>
        ))
      )}

    </section>
  );
}

export default OrderList;