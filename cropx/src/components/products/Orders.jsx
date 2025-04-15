import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });

  const userId = localStorage.getItem('id');

  if (!userId) {
    alert('No user ID found. Please log in.');
    return;
  }

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`/order/buyer/${userId}`);
      console.log('Orders Response:', res.data);  // Log the full response
  
      // Check if the 'data' key contains the orders and 'totalAmount' is present
      setOrders(res.data.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Failed to fetch orders. Check console for details.');
    }
  };
  

  // Load orders on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  // Sort logic
  const sortOrders = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...orders].sort((a, b) => {
      if (key === 'createdAt') {
        return direction === 'asc'
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      } else if (key === 'totalAmount') {
        return direction === 'asc'
          ? Number(a.totalAmount) - Number(b.totalAmount)
          : Number(b.totalAmount) - Number(a.totalAmount);
      } else if (key === 'status') {
        return direction === 'asc'
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
      return 0;
    });

    setOrders(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table border="1" style={{ width: '80%', margin: 'auto' }}>
          <thead>
            <tr>
              <th onClick={() => sortOrders('createdAt')}>Order Date</th>
              <th onClick={() => sortOrders('totalAmount')}>Total Price</th>
              <th>Product Count</th>
              <th onClick={() => sortOrders('status')}>Status</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order) => (
  <tr key={order._id}>
    <td>{new Date(order.createdAt).toLocaleString()}</td>
    <td>
  ₹{order.totalAmount ? Number(order.totalAmount).toLocaleString() : 'N/A'}
</td>  {/* Check if totalAmount exists */}
    <td>{order.items?.length}</td>
    <td>{order.status}</td>
  </tr>
))}


          </tbody>
        </table>
      )}
    </div>
  );
};
