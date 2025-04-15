  import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";

  export const UserSidebar = ({ isCollapsed, toggleSidebar }) => {
    const [dashboardOpen, setDashboardOpen] = useState(true);
    const location = useLocation();
    const userRole = localStorage.getItem("role") || "User"; // Ensure role matches login storage

    return (
      <div 
        className="d-flex flex-column bg-white shadow-lg vh-100"
        style={{ 
          width: isCollapsed ? "80px" : "280px",
          transition: "all 0.3s ease",
          position: "sticky",
          top: 0
        }}
      >
        {/* Sidebar Header */}
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 
              className="text-danger fw-bold mb-0" 
              style={{ opacity: isCollapsed ? 0 : 1, transition: "opacity 0.2s" }}
            >
              CropX
            </h4>
            <button 
              onClick={toggleSidebar}
              className="btn btn-link text-dark p-0"
              style={{ minWidth: "30px" }}
            >
              <i className={`bi bi-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="nav flex-column gap-2">
            <div className="mb-3">
              <button
                className="nav-link text-dark d-flex justify-content-between align-items-center w-100 p-3 rounded-3"
                onClick={() => setDashboardOpen(!dashboardOpen)}
                style={{ 
                  background: location.pathname.includes("dashboard") ? "#f8f9fa" : "transparent",
                  transition: "all 0.2s ease"
                }}
              >
                <span className="d-flex align-items-center gap-3">
                  <i className="bi bi-speedometer2 fs-5"></i>
                  <span style={{ opacity: isCollapsed ? 0 : 1, transition: "opacity 0.2s" }}>
                    Dashboards
                  </span>
                </span>
                {!isCollapsed && (
                  <i className={`bi ${dashboardOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                )}
              </button>

              {/* Dashboard Links */}
              {dashboardOpen && !isCollapsed && (
                <div className="ps-4 ms-2 border-start">
                  
                  {/* Farmer Links */}
                  {userRole === "Farmer" && (
                    <>
                      <Link 
                        to="/user" 
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/user" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-grid-1x2 fs-6"></i>
                        Farmer Dashboard
                      </Link>
                      <Link
                        to="/user/add-product"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/user/add-product" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-plus-circle fs-6"></i>
                        Add Product
                      </Link>
                      <Link
                        to="/user/viewproduct"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/user/viewproduct" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-eye fs-6"></i>
                        View Products
                      </Link>
                    </>
                  )}
                  {/* Admin Links */}
                  {userRole === "Admin" && (
                    <>
                      <Link 
                        to="/admin-dashboard" 
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/admin-dashboard" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-grid-1x2 fs-6"></i>
                        Admin Dashboard
                      </Link>
                      <Link
                        to="/admin-dashboard/usermanagement"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/admin-dashboard/usermanagement" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-eye fs-6"></i>
                        View Users
                      </Link>
                      <Link
                        to="/admin-dashboard/productmanagement"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/admin-dashboard/productmanagement" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-eye fs-6"></i>
                        View Products
                      </Link>
                      <Link
                        to="/admin-dashboard/ordermanagement"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/admin-dashboard/ordermanagement" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-eye fs-6"></i>
                        View orders
                      </Link>
                    </>
                  )}
                  

                  {/* Buyer Links (Fixed Role Name) */}
                  {userRole === "Buyer" && (  // Ensure role is stored as "Buyer" 
                    <>  
                      <Link  
                        to="/buyer" 
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/buyer" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}   
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-grid-1x2 fs-6"></i>
                        Buyer Dashboard
                      </Link>
                      <Link        
                        to="/buyer/available-products"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/buyer/available-products" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Available Products
                      </Link>
                      <Link        
                        to="/buyer/cart"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/buyer/cart" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Cart
                      </Link>
                      <Link        
                        to="/buyer/orders"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/buyer/orders" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Orders
                      </Link>
                    </>
                  )}
                  
                  
                  {userRole === "Retailer" && (   
                    <>  
                      <Link  
                        to="/retailer" 
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/retailer" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}   
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-grid-1x2 fs-6"></i>
                        Retailer Dashboard
                      </Link>
                      <Link        
                        to="/retailer/available-products"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/retailer/available-products" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Available Products
                      </Link>
                      <Link        
                        to="/retailer/cart"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/retailer/cart" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Cart
                      </Link>
                      <Link        
                        to="/retailer/orders"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/retailer/orders" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Orders
                      </Link>
                    </>
                  )}

                  {userRole === "Wholesaler" && (   
                    <>  
                      <Link  
                        to="/wholesaler" 
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/wholesaler" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}   
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-grid-1x2 fs-6"></i>
                        Wholesaler Dashboard
                      </Link>
                      <Link        
                        to="/wholesaler/available-products"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/wholesaler/available-products" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Available Products
                      </Link>
                      <Link        
                        to="/wholesaler/cart"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/wholesaler/cart" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Cart
                      </Link>
                      <Link        
                        to="/wholesaler/orders"
                        className={`nav-link d-flex align-items-center gap-3 p-2 rounded-3 ${
                          location.pathname === "/wholesaler/orders" ? "bg-light text-primary fw-semibold" : "text-muted"
                        }`}
                        style={{ transition: "all 0.2s" }}
                      >
                        <i className="bi bi-box-seam fs-6"></i>
                        Orders
                      </Link>
                    </>
                  )}
                </div>
              )}
              
            </div>
          </nav>
        </div>
      </div>
    );
  };
