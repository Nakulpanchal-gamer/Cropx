import { useEffect, useState } from 'react'
// import "./assets/css/adminlte.css"
// import "./assets/css/adminlte.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import axios from 'axios'
import { AddProduct } from './components/products/AddProduct'
import { MainLayout } from "./components/layouts/MainLayout"
import  LandingPage  from './Landing/LandingPage'
import { Login } from "./components/auth/Login"
import { Signup } from "./components/auth/Signup"
import { UserLayout } from './components/layouts/UserLayout'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import BlogSection from './Landing/Blog';
import AboutUs from './Landing/AboutUs';
import ContactUs from './Landing/ContactUs';
import { AdminDashboard } from "./components/dashboards/AdminDashboard";
import { WholesalerDashboard } from "./components/dashboards/WholesalerDashboard";
import { RetailerDashboard } from "./components/dashboards/RetailerDashboard";
import { TransporterDashboard } from "./components/dashboards/TransporterDashboard";
import { BuyerDashboard } from "./components/dashboards/BuyerDashboard";
import { FarmerDashBoard } from './components/dashboards/FarmerDashboard'
import { DashboardLayout } from './components/layouts/DashboardLayout'
import { UpdateProduct } from './components/products/UpdateProduct'
import { ViewProduct } from './components/products/ViewProduct'
import { AvailableProducts } from './components/products/AvailableProduct'
import { AvailableProduct } from './components/Retailers&wholesaler/AvailableProduct'
import ForgotPassword from './components/auth/ForgetPassword'
import ResetPassword from './components/auth/ResetPassword'
import { CartPage } from './components/products/Cart'
import { OrdersPage } from './components/products/Orders'
import  { CartPage1 }  from './components/Retailers&wholesaler/Cart'
import  { OrdersPage1 }  from './components/Retailers&wholesaler/Orders'
import { EditOrderPage } from './components/products/EditOrders'
import UserManagement from './components/admin/UserManagement'
import ProductManagement from './components/admin/ProductManagement'
import OrderManagement from './components/admin/OrderManagement'

function App() {

  axios.defaults.baseURL = "http://localhost:5000"
  const location = useLocation();


  // useEffect(() => {
  //   if (location.pathname === "/login" || location.pathname === "/signup") {
  //     document.body.className = ""; // Remove the unwanted class for login and signup
  //   } else {
  //     document.body.className ="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
  //   }
  // }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = "bg-light";
    } else if (location.pathname === "/") {
      document.body.className = "";
    } else {
      document.body.className = "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword/:token" element={<ResetPassword />} />

      <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogSection />} />
      {/* <Route path="/admin-dashboard" element={<ProtectedRoute component={AdminDashboard} role="Admin" />} /> */}
      {/* <Route path="/user" element={<ProtectedRoute component={UserLayout} role="Farmer" />}>
                <Route path="add-product" element={<AddProduct />} />
        </Route> */}
      <Route path="/user" element={<ProtectedRoute component={DashboardLayout} role="Farmer" />}>
        <Route index element={<FarmerDashBoard />} />  {/* ✅ Default route when visiting /user */}
        <Route path="add-product" element={<AddProduct/>} />
        <Route path="viewproduct" element={<ViewProduct/>}/>
        <Route path='updateproduct/:id' element={<UpdateProduct/>}></Route>
      </Route>
      
      <Route path="/buyer" element={<ProtectedRoute component={DashboardLayout} role="Buyer" />}>
        <Route index element={<BuyerDashboard />} />
        <Route path="available-products" element={<AvailableProducts/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="orders" element={<OrdersPage/>}/>
        <Route path="editorder" element={<EditOrderPage/>}/>
      </Route>

      <Route path="/admin-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="usermanagement" element={<UserManagement/>}/>
        <Route path="productmanagement" element={<ProductManagement/>}/>
        <Route path="ordermanagement" element={<OrderManagement/>}/>
      </Route>

      <Route path="/wholesaler" element={<ProtectedRoute component={DashboardLayout} role="Wholesaler" />}>
        <Route index element={<WholesalerDashboard />} />
        <Route path="cart" element={<CartPage1/>}/>
        <Route path="orders" element={<OrdersPage1/>}/>
        <Route path="available-products" element={<AvailableProduct/>}/>
      </Route>

      <Route path="/retailer" element={<ProtectedRoute component={DashboardLayout} role="Retailer" />}>
        <Route index element={<RetailerDashboard />} />
        <Route path="cart" element={<CartPage1/>}/>
        <Route path="orders" element={<OrdersPage1/>}/>
        <Route path="available-products" element={<AvailableProduct/>}/>
        
      </Route>

      <Route path="/transporter-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Transporter" />}>
        <Route index element={<TransporterDashboard />} />
      </Route>


      {/* 404 Page */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );

}

export default App
