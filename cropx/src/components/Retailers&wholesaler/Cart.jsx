import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CartPage1 = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState('');
  const [isBulkOrder, setIsBulkOrder] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const userName = localStorage.getItem('name');
      if (userName) {
        setUsername(userName);
      } else {
        console.error('No user name found in localStorage.');
      }
    };

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCart(updatedCart);
    calculateTotal(updatedCart);
    fetchUserData();

    const allAbove10 = updatedCart.every(item => item.quantity >= 10);
    setIsBulkOrder(allAbove10);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);

    const allAbove10 = updatedCart.every(item => item.quantity >= 10);
    setIsBulkOrder(allAbove10);
  };

  const changeQuantity = (productId, action) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        if (action === 'increase') {
          item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);

    const allAbove10 = updatedCart.every(item => item.quantity >= 10);
    setIsBulkOrder(allAbove10);
  };

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, item) => {
      const price = item.price_per_unit && !isNaN(item.price_per_unit) ? item.price_per_unit : 0;
      const quantity = item.quantity && !isNaN(item.quantity) ? item.quantity : 1;
      return acc + (price * quantity);
    }, 0);
    setTotalPrice(total);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setTotalPrice(0);
    setIsBulkOrder(false);
  };

  const placeOrder = () => {
    if (!username) {
      alert('Please log in to place an order');
      return;
    }

    // Check bulk order condition before placing
    const allAbove10 = cart.every(item => item.quantity >= 10);
    if (!allAbove10) {
      alert('Bulk orders require each product to have a quantity of at least 10.');
      return;
    }

    const order = {
      _id: `orderId${Date.now()}`,
      user: { name: username },
      totalPrice: totalPrice,
      status: 'pending',
      cart: cart,
      date: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    clearCart();
    navigate('/retailer/orders');
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
                    <button
                      onClick={() => changeQuantity(product._id, 'decrease')}
                      className="btn btn-secondary"
                      style={{ marginRight: '5px' }}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      onClick={() => changeQuantity(product._id, 'increase')}
                      className="btn btn-secondary"
                      style={{ marginLeft: '5px' }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img
                      src={product.productUrl}
                      alt={product.name}
                      style={{ height: 100, width: 100 }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3>Total Price: ₹{totalPrice}</h3>
            {isBulkOrder && (
              <div>
                <span
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    marginTop: '10px',
                    display: 'inline-block',
                  }}
                >
                  Bulk Order Eligible
                </span>
              </div>
            )}
          </div>
          <div>
            <button onClick={clearCart} className="btn btn-warning">
              Clear Cart
            </button>
          </div>
          <div>
            <button onClick={placeOrder} className="btn btn-success">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};
