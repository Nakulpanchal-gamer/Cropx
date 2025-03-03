import React, { useState } from "react";
import { Thermometer, Sun, Leaf, AlertCircle } from "lucide-react";
import "../assets/css/Dashboard.css";
import { UserSidebar } from "../layouts/UserSidebar";

export const UserDashboard = () => {
  const [fields, setFields] = useState(1);

  return (
    <>
      <UserSidebar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Overview</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <Thermometer className="dashboard-icon" size={32} />
            <h2>Soil Moisture Status</h2>
            <p>Install a Sensor</p>
            <p className="dashboard-note">Use the CropX mobile app</p>
          </div>

          <div className="dashboard-card">
            <img src="https://via.placeholder.com/300" alt="Map Preview" className="dashboard-map" />
          </div>

          <div className="dashboard-card">
            <Sun className="dashboard-icon" size={32} />
            <h2>Recommendations</h2>
            <p>No Recommendations</p>
          </div>

          <div className="dashboard-card">
            <AlertCircle className="dashboard-icon" size={32} />
            <h2>N-Leaching</h2>
            <p>Feature Unavailable</p>
          </div>

          <div className="dashboard-card">
            <Leaf className="dashboard-icon" size={32} />
            <h2>Sensors</h2>
            <p>No Active Sensors</p>
          </div>

          <div className="dashboard-card">
            <h2>Crops</h2>
            <p>Total: 1.4 acre</p>
            <p>Teff</p>
          </div>

          <div className="dashboard-card">
            <h2>Disease Advice</h2>
            <p>{fields} Field - Spray Now</p>
            <button className="dashboard-button" onClick={() => setFields(fields + 1)}>View all</button>
          </div>
        </div>
      </div>
    </>
  );
};
