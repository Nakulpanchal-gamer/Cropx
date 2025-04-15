import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const EditOrderPage = () => {
  const { state } = useLocation();
  const { order, orderIndex } = state;
  const [editedOrder, setEditedOrder] = useState(order);
  const navigate = useNavigate();

  // Handle changes in quantity
  const handleQuantityChange = (productId, newQuantity) => {
    setEditedOrder((prevOrder) => {
      const updatedCart = prevOrder.cart.map((item) => {
        if (item._id === productId) {
          item.quantity = newQuantity;
        }
        return item;
      });
      return { ...prevOrder, cart: updatedCart };
    });
  };

  // Handle save (update the order in localStorage)
  const handleSave = () => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    savedOrders[orderIndex] = editedOrder;
    localStorage.setItem('orders', JSON.stringify(savedOrders));
    navigate('/buyer/orders'); // Redirect back to OrdersPage
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Edit Order</h2>
      <table border="1" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {editedOrder.cart.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.unit}</td>
              <td>₹{product.price_per_unit}</td>
              <td>
                <input
                  type="number"
                  value={product.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(product._id, parseInt(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleSave} className="btn btn-success">
          Save Changes
        </button>
      </div>
    </div>
  );
};
