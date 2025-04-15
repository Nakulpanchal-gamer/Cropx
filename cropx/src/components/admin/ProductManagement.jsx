import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgencySidebar } from './AdminSidebar';
import '../../assets/css/Product.css'

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortField, setSortField] = useState("name");  // Default sorting by 'name'
  const [sortOrder, setSortOrder] = useState("asc");  // Default sorting order is ascending

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/product/products');
        if (Array.isArray(res.data.data)) {
          setProducts(res.data.data);
        } else {
          console.error('Expected an array but got:', res.data);
          setError('Received data is not an array');
        }
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();  // Fetch products when component is mounted
  }, []);

  // Sorting function
  const handleSort = (field) => {
    const newSortOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc"; // Toggle sort order
    setSortField(field);
    setSortOrder(newSortOrder);

    const sortedProducts = [...products].sort((a, b) => {
      if (a[field] < b[field]) return sortOrder === "asc" ? -1 : 1;
      if (a[field] > b[field]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    setProducts(sortedProducts);
  };

  // Delete product
  const deleteProduct = async (productId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`/product/delete/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="product-management">
      <AgencySidebar />
      <div className="main-content">
        <h2>Product Management</h2>
        <button className="btn btn-primary">Add New Product</button>

        {/* Table wrapped in table-wrapper class */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("name")} 
                    className={sortField === 'name' ? sortOrder : ''}>
                  Name
                </th>
                <th  onClick={() => handleSort("price_per_unit")} 
                    className={sortField === 'price_per_unit' ? sortOrder : ''}>
                  Price
                </th>
                <th onClick={() => handleSort("unit")} 
                    className={sortField === 'unit' ? sortOrder : ''}>
                  Unit
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price_per_unit}</td>
                    <td>{product.unit}</td>
                    <td>
                      <button className="btn btn-secondary">Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
