import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/admindashboard.css';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const responses = await Promise.all([
          axios.get('/order/totalOrders'),
          axios.get('/order/totalRevenue'),
          axios.get('/order/pendingOrders'),
          axios.get('/order/deliveredOrders'),
          axios.get('/users/count'),  // Ensure this is fetching the total users correctly
        ]);

        console.log('API Responses:', responses);  // Log responses for debugging

        // Only apply convertDecimal for fields that may contain Decimal128
        const convertDecimal = (value) => {
          if (value && value.hasOwnProperty('$numberDecimal')) {
            return parseFloat(value['$numberDecimal']);
          }
          return value;  // Return value as is for regular numbers
        };

        setStats({
          totalOrders: responses[0]?.data?.totalOrders || 0,
          totalRevenue: convertDecimal(responses[1]?.data?.totalRevenue) || 0,  // Apply to totalRevenue only
          pendingOrders: responses[2]?.data?.pendingOrders || 0,
          deliveredOrders: responses[3]?.data?.deliveredOrders || 0,
          totalUsers: responses[4]?.data?.totalUsers || 0  // No conversion needed for totalUsers
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);  // Empty dependency array to run once on mount

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Orders</h3>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <p>₹{stats.totalRevenue}</p>
        </div>
        <div className="card">
          <h3>Pending Orders</h3>
          <p>{stats.pendingOrders}</p>
        </div>
        <div className="card">
          <h3>Delivered Orders</h3>
          <p>{stats.deliveredOrders}</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
      </div>
    </div>
  );
};
