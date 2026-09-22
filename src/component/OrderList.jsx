function OrderList({ orders }) {
  return (
    <section>
      <h2>Orders</h2>

      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Order #{order.id}</strong>

              <p>
                {order.food} × {order.quantity}
              </p>

              <p>
                Total: Rs. {order.total}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default OrderList;