import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/admindashboard.css';

export const WholesalerDashboard = () => {
  const [stats, setStats] = useState({
    
    totalOrders: 0,
    totalProducts: 0
  });
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const responses = await Promise.all([
          axios.get('/product/totalproduct'),
          axios.get('/order/totalOrders')
        ]);

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  setCartCount(totalItems);
  
        console.log('API Responses:', responses);  // Log responses for debugging

        // Only apply convertDecimal for fields that may contain Decimal128
        const convertDecimal = (value) => {
          if (value && value.hasOwnProperty('$numberDecimal')) {
            return parseFloat(value['$numberDecimal']);
          }
          return value;  // Return value as is for regular numbers
        };

        setStats({
          totalProducts: responses[0]?.data?.totalProducts || 0,
          totalOrders: responses[1]?.data?.totalOrders || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);  // Empty dependency array to run once on mount

  return (
    <div className="admin-dashboard">
      <h2>wholesaler Dashboard</h2>
      <div className="dashboard-cards">
      <div className="card">
          <h3>Total Orders</h3>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p>{stats.totalProducts}</p>
        </div>
        <div className="card">
            <h3>Total Cart Items</h3>
            <p>{cartCount}</p>
          </div>
      </div>
    </div>
  );
};
