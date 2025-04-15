import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgencySidebar } from './AdminSidebar'; // Assuming you have a Sidebar component

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/order/allorders'); // Assuming this returns all orders
        setOrders(response.data.data); // Update with backend data
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await axios.put(`/order/updateorder/${orderId}`, { status });
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
      );
      alert("Order status updated successfully!");
      console.log('Order status updated:', response.data);
    } catch (error) {
      console.error('Failed to update status:', error);
      alert("Failed to update order status.");
    }
  };
  

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`/order/deleteorder/${orderId}`);

      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error('Failed to delete order:', error);
      alert('Failed to delete order. Please try again.');
    }
  };
  

  return (
    <div className="order-management">
      <AgencySidebar />
      <div className="main-content">
        <h2>Order Management</h2>

        {orders.length > 0 ? (
          <table className="order-table" border="1" style={{ width: '80%', margin: 'auto' }}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
  {orders.map((order) => (
    <tr key={order._id}>
      <td>{order._id}</td>
      <td>{order.buyerId?.name || order.buyerId?.email || 'Unknown User'}</td>
      <td>₹{Number(order.totalAmount?.$numberDecimal || 0)}</td>
      <td>
        <select
          value={order.status}
          onChange={(e) => updateOrderStatus(order._id, e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </td>
      <td>
        <button onClick={() => deleteOrder(order._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>


          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
