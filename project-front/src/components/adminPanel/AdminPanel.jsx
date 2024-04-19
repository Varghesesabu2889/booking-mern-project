import React, { useContext } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import './admin.css';
import { AuthContext } from '../../context/AuthContext.js';

function AdminPanel() {
  const { user } = useContext(AuthContext);
  const isAdmin = () => user && user.email === process.env.ADMIN_EMAIL;

  if (!isAdmin()) {
    // If the user is not an admin, hide the admin panel
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for adding new places
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' />

        <label htmlFor='city'>State</label>
        <select id='city' name='city'>
          <option value="" disabled defaultValue>Select State</option>
          {/* Add options for all states */}
        </select>

        <label htmlFor="address">Address</label>
        <input type="text" name='address' />

        <label htmlFor="distance">Distance</label>
        <input type="text" name='distance' />

        <label htmlFor="price">Price</label>
        <input type="text" name='price' />

        <label htmlFor="maxGroupSize">Max Group Size</label>
        <input type="number" name='maxGroupSize' />

        <label htmlFor='desc'>Description</label>
        <textarea className='Description' rows={2} name='desc'></textarea>

        <label htmlFor='photo'>Photo</label>
        <div className="photo-input">
          <input type="file" accept='image/*' id='image' />
          <label htmlFor="image" className="cloud-icon">
            <IoCloudUploadOutline />
          </label>
        </div>

        <button>UPLOAD</button>
      </form>
    </div>
  );
}

export default AdminPanel;
