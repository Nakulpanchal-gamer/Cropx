import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgencySidebar } from './AdminSidebar';

const UserManagement = () => {
  const [users, setUsers] = useState([]);  // Initialize users state as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/users');
        
        // Log the data to see its structure
        console.log('Fetched Users:', res.data.data);
        
        // Check if the response data is an array
        if (Array.isArray(res.data.data)) {
          setUsers(res.data.data);  // Set the users state with the fetched data
        } else {
          setError('Received data is not an array');
        }
      } catch (error) {
        setError('Error fetching users');
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchUsers();  // Fetch users when component is mounted
  }, []);

  // Delete user with confirmation
  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`user/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  // Display loading or error message if necessary
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="user-management">
      <AgencySidebar />
      <div className="main-content">
        <h2>User Management</h2>

        {/* Display the user table only when there are users */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.roleId ? user.roleId.name : 'No Role'}</td>  {/* Access roleName after populating roleId */}
                  <td>
                    <button className="btn btn-secondary">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                      disabled={user.role === 'admin'}  // Disable for admin users
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
