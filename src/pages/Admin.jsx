function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>

      <section>
        <h2>Add Food</h2>

        <input type="text" placeholder="Food name" />
        <input type="number" placeholder="Price" />

        <button>Add Food</button>
      </section>

      <section>
        <h2>Food Items</h2>

        <p>🍔 Burger - Rs. 1200</p>
        <button>Delete</button>

        <p>🍕 Pizza - Rs. 1800</p>
        <button>Delete</button>
      </section>

      <section>
        <h2>Orders</h2>

        <p>Order #001 - Burger x 2</p>
        <p>Order #002 - Pizza x 1</p>
      </section>
    </div>
  );
}

export default Admin;