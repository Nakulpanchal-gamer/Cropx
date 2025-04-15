// import React, { useState } from "react";

// const ForgotPassword = () => {
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [error, setError] = useState("");

//     const validateEmail = (email) => {
//         return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!email) {
//             setError("Email is required.");
//             setMessage("");
//             return;
//         }

//         if (!validateEmail(email)) {
//             setError("Please enter a valid email.");
//             setMessage("");
//             return;
//         }

//         setError("");
//         setMessage(`Password reset link sent to ${email}`);
//     };

//     return (
//         <div style={{   
//             backgroundColor: '#e6e6fa',
//             minHeight: '100vh',
//             width: '100vw',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             margin: 0,
//             padding: '20px'
//         }}>
//             <div className="shadow rounded p-4 w-100" 
//                 style={{ maxWidth: '450px', backgroundColor: '#fff' }}>
                
//                 <h3 className="mb-4 text-center">Forgot Password?</h3>
//                 <p className="text-center">Enter your email to receive a password reset link.</p>
                
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         <input 
//                             type="email" 
//                             className="form-control" 
//                             placeholder="Enter your email" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)} 
//                         />
//                         {error && <p className="text-danger mt-1">{error}</p>}
//                     </div>
//                     <button className="btn btn-danger w-100" style={{backgroundColor:'#DC3545'}} disabled={!email}>Send Reset Link</button>
//                 </form>

//                 {message && <p className="text-success mt-3 text-center">{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import axios from "axios";  // Import axios

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required.");
            setMessage("");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email.");
            setMessage("");
            return;
        }

        setError("");
        setLoading(true); // Show loading

        try {
            // Replace with your backend API URL
            const response = await axios.post("http://localhost:5000/user/forgotpassword", { email });

            setMessage(response.data.message || "Password reset link sent successfully.");
        } catch (err) {
            console.error("❌ Error:", err);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false); // Hide loading
        }
    };

    return (
        <div style={{   
            backgroundColor: '#e6e6fa',
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: '20px'
        }}>
            <div className="shadow rounded p-4 w-100" style={{ maxWidth: '450px', backgroundColor: '#fff' }}>
                <h3 className="mb-4 text-center">Forgot Password?</h3>
                <p className="text-center">Enter your email to receive a password reset link.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        {error && <p className="text-danger mt-1">{error}</p>}
                    </div>
                    <button className="btn btn-danger w-100" style={{ backgroundColor: '#DC3545' }} disabled={loading}>
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                {message && <p className="text-success mt-3 text-center">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
