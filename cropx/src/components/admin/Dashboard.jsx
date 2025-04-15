
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({ users: 0, products: 0, orders: 0 });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const usersRes = await axios.get('/users');
        const productsRes = await axios.get('/product/products');
        const ordersRes = await axios.get('/order/orders');
        setMetrics({
          users: usersRes.data.length,
          products: productsRes.data.length,
          orders: ordersRes.data.length,
        });
      } catch (error) {
        console.error('Error fetching metrics', error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h2>Admin Dashboard</h2>
        <div className="metrics">
          <div>Total Users: {metrics.users}</div>
          <div>Total Products: {metrics.products}</div>
          <div>Total Orders: {metrics.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
