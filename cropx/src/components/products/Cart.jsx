import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const userName = localStorage.getItem('name');
      if (userName) setUsername(userName);
      else console.error('No user name found in localStorage.');
    };

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCart(updatedCart);
    calculateTotal(updatedCart);
    fetchUserData();
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const changeQuantity = (productId, action) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        if (action === 'increase') item.quantity += 1;
        else if (action === 'decrease' && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, item) => {
      const price = item.price_per_unit || 0;
      const quantity = item.quantity || 1;
      return acc + price * quantity;
    }, 0);
    setTotalPrice(total);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setTotalPrice(0);
  };

  const placeOrder = async () => {
    const buyerId = localStorage.getItem('id');

    if (!buyerId) {
      alert('Please log in to place an order');
      return;
    }

    const items = cart.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
      price: item.price_per_unit,
      farmerId: item.farmerId
    }));

    try {
      const response = await axios.post('/order/add', {
        buyerId,
        items,
        status: 'Pending'  // Optional, defaults to 'Pending' in your backend
      });

      alert('Order placed successfully!');
      clearCart();
      navigate('/buyer/orders');
    } catch (error) {
      console.error('Error placing order:', error.response?.data || error.message);
      alert('Failed to place order');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some products to your cart.</p>
      ) : (
        <>
          <table border="1" style={{ width: '80%', margin: 'auto' }}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.unit}</td>
                  <td>₹{product.price_per_unit}</td>
                  <td>
                    <button onClick={() => changeQuantity(product._id, 'decrease')} style={{ marginRight: '5px' }}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => changeQuantity(product._id, 'increase')} style={{ marginLeft: '5px' }}>
                      +
                    </button>
                  </td>
                  <td>
                    <img src={product.productUrl} alt={product.name} style={{ height: 100, width: 100 }} />
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(product._id)} className="btn btn-danger">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div><h3>Total Price: ₹{totalPrice}</h3></div>
          <div>
            <button onClick={clearCart} className="btn btn-warning">Clear Cart</button>
            <button onClick={placeOrder} className="btn btn-success" style={{ marginLeft: '10px' }}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};
