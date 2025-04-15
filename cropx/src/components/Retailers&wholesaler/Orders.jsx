import React, { useEffect, useState } from 'react';

export const OrdersPage1 = () => {
  const [orders, setOrders] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  const sortOrders = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedOrders = [...orders].sort((a, b) => {
      if (key === 'date') {
        return direction === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (key === 'totalPrice') {
        return direction === 'asc' ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice;
      } else if (key === 'productCount') {
        return direction === 'asc' ? a.cart.length - b.cart.length : b.cart.length - a.cart.length;
      } else if (key === 'status') {
        return direction === 'asc'
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
      return 0;
    });

    setOrders(sortedOrders);
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const getTotalQuantity = (cart) => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders placed yet.</p>
      ) : (
        <table border="1" style={{ width: '90%', margin: 'auto' }}>
          <thead>
            <tr>
              <th onClick={() => sortOrders('date')}>Order Date</th>
              <th onClick={() => sortOrders('totalPrice')}>Total Price</th>
              <th onClick={() => sortOrders('productCount')}>Product Count</th>
              <th>Total Quantity</th>
              <th onClick={() => sortOrders('status')}>Status</th>
              
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{new Date(order.date).toLocaleString()}</td>
                <td>₹{order.totalPrice}</td>
                <td>{order.cart.length}</td>
                <td>{getTotalQuantity(order.cart)}</td>
                <td>{order.status}</td>
                <td>{order.paymentStatus || 'pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
