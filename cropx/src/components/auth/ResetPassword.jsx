import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import * as jwtDecode from "jwt-decode";


export const ResetPassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [userId, setUserId] = useState(""); 
    const [token, setToken] = useState(""); // ✅ Store token for sending to backend



    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const receivedToken = queryParams.get('token');
    
        if (receivedToken) {
            console.log("🔵 Token received from URL:", receivedToken);
    
            try {
                const decoded = jwtDecode(receivedToken); // ✅ No .default needed
                console.log("🟢 Decoded token:", decoded);
    
                setUserId(decoded._id); 
                setToken(receivedToken);
            } catch (error) {
                console.error("❌ Error decoding token:", error.message);
                toast.error("Invalid or expired token.");
                // navigate('/forgotpassword');
            }
        } else {
            console.error("❌ No token found in URL.");
            toast.error("Invalid token link.");
            // navigate('/forgotpassword');
        }
    }, [location, navigate]);

    // const submitHandler = async (data) => {
    //     const { password, confirmPassword } = data;

    //     if (password !== confirmPassword) {
    //         toast.error("Passwords do not match!");
    //         return;
    //     }

    //     try {
    //         const response = await axios.put('http://localhost:3000/user/resetpassword', {
    //             password,
    //             token,
    //         });

    //         toast.success(response.data.message);
    //         setTimeout(() => {
    //             navigate('/login'); // Redirect after successful password reset
    //         }, 2000);
    //     } catch (error) {
    //         console.error("❌ Error resetting password:", error.response?.data?.message || error.message);
    //         toast.error(error.response?.data?.message || "Something went wrong!");
    //     }
    // };

    const submitHandler = async (data) => {
        const { password, confirmPassword } = data;
    
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
    
        try {
            const response = await axios.put(
                'http://localhost:3000/user/resetpassword', 
                { password }, // Send only password
                { headers: { Authorization: `Bearer ${token}` } } // Send token in headers
            );
    
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/login'); // Redirect after success
            }, 2000);
        } catch (error) {
            console.error("❌ Error resetting password:", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };
    


    const validationSchema = {
                passwordValidator: {
                    required: { value: true, message: 'Enter your password' },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
                        message: 'Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character'
                    }
                },
                confirmPassword: {
                    required: { value: true, message: 'Confirm your password' },
                    validate: (value) => value === watch("password") || "Passwords do not match!",
                }
            };

    return (
        // <div>
        //     <ToastContainer />
        //     <h2>Reset Password</h2>
        //     <p>Extracted Token: {token || "❌ No token found"}</p>
        //     <p>User ID: {userId || "❌ No User ID extracted"}</p>
        // </div>
        <div style={{
                        backgroundColor: '#e6e6fa',
                        minHeight: '100vh',
                        width: '100vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                    }}>
                        <ToastContainer />
                        <div className="shadow rounded overflow-hidden d-flex flex-column flex-md-row"
                            style={{ width: '90%', maxWidth: '900px', backgroundColor: '#fff', minHeight: "600px" }}>
            
                            {/* Left Side - Change Password Form */}
                            <div className="p-5 w-100 w-md-50">
                                <h3 className="mb-4 text-center text-md-start">Change Password</h3>
                                <form onSubmit={handleSubmit(submitHandler)} method="POST">
                                    <div className="mb-4">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" {...register('password', validationSchema.passwordValidator)} />
                                        <p className="text-danger">{errors.password?.message}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Confirm Password" {...register('confirmPassword', validationSchema.confirmPassword)} />
                                        <p className="text-danger">{errors.confirmPassword?.message}</p>
                                    </div>
                                    <button className="btn btn-danger w-100">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
    );
};

export default ResetPassword;