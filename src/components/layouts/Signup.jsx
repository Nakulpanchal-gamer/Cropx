// import React from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { UserSidebar } from "./UserSidebar";
// import { Link } from "react-router-dom";

// export const Signup = () => {
//   const { register, handleSubmit } = useForm();
  
//   const submitHandler = async (data) => {
//     data.roleId = "67be92e9064a99d8c206a920"
//     console.log("data")
//     const res= await axios.post("http://localhost:3000/Signup")
//     // const res = await axios.post("/Signup" ,data)
//     console.log(res);
//     console.log(res.data);
  
//     if(res.status === 201){
//       console.log("user added successfully")
//     }
//     else{
//       console.log("user not added")
//   }
// };
  

//   return (
//     <>
//       <UserSidebar />
//       <main className="app-main">
//         <div className="app-content-header">
//           {/*begin::Container*/}
//           <div className="container-fluid">
//             {/*begin::Row*/}
//             <div className="row">
//               <div className="col-sm-6">
//                 <h3 className="mb-0">SIGNUP Form</h3>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-end">
//                   <li className="breadcrumb-item">
//                     <Link to="/user">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Singup Form
//                   </li>
//                 </ol>
//               </div>
//             </div>
//             {/*end::Row*/}
//           </div>
//           {/*end::Container*/}
//         </div>
//         <div className="col-md-6">
//         <div className="card card-info card-outline mb-4">
//             {/*begin::Header*/}
//             <div className="card-header">
//               <div className="card-title">Form Validation</div>
//             </div>
//             {/*end::Header*/}
//             {/*begin::Form*/}
//             <form className="needs-validation" onSubmit={handleSubmit(submitHandler)}>
//               {/*begin::Body*/}
//               <div className="card-body">
//                 {/*begin::Row*/}
//                 <div className="row g-3">
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label htmlFor="validationCustom01" className="form-label">
//                       First name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="validationCustom01"
//                       defaultValue="Mark"
                      
//                       {...register("firstName")}
//                     />
//                     <div className="valid-feedback">Looks good!</div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label htmlFor="validationCustom02" className="form-label">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="validationCustom02"
//                       defaultValue="Otto"
                      
//                       {...register("lastName")}
//                     />
//                     <div className="valid-feedback">Looks good!</div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label
//                       htmlFor="validationCustomUsername"
//                       className="form-label"
//                     >
//                       Username
//                     </label>
//                     <div className="input-group has-validation">
//                       <span className="input-group-text" id="inputGroupPrepend">
//                         @
//                       </span>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="validationCustomUsername"
//                         aria-describedby="inputGroupPrepend"
                        
//                       />
//                       <div className="invalid-feedback">
//                         Please choose a username.
//                       </div>
//                     </div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label htmlFor="inputEmail3" className="form-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="inputEmail3"
//                       required="true"
//                       {...register("email")}
//                     />
//                     <div className="invalid-feedback">
//                       Please provide a valid city.
//                     </div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label htmlFor="inputPassword3" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="inputPassword3"
//                       defaultValue=""
//                       required="true"
//                   {...register("password")}
//                     />
//                     <div className="valid-feedback">Looks good!</div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   {/* <div className="col-md-6">
//                     <label htmlFor="inputPassword3" className="form-label">
//                       Conform Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="inputPassword3"
//                       defaultValue=""
//                       required="true"
//                     />
//                     <div className="valid-feedback">Looks good!</div>
//                   </div> */}
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label htmlFor="validationCustom04" className="form-label">
//                       State
//                     </label>
//                     <select
//                       className="form-select"
//                       id="validationCustom04"
                    
//                     >
//                       <option disabled="" value="">
//                         Choose...
//                       </option>
//                       <option>...</option>
//                     </select>
//                     <div className="invalid-feedback">
//                       Please select a valid state.
//                     </div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-md-6">
//                     <label htmlFor="validationCustom05" className="form-label">
//                       Zip
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="validationCustom05"
                      
//                     />
//                     <div className="invalid-feedback">
//                       Please provide a valid zip.
//                     </div>
//                   </div>
//                   {/*end::Col*/}
//                   {/*begin::Col*/}
//                   <div className="col-12">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         defaultValue=""
//                         id="invalidCheck"
//                         required="true"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="invalidCheck"
//                       >
//                         Agree to terms and conditions
//                       </label>
//                       <div className="invalid-feedback">
//                         You must agree before submitting.
//                       </div>
//                     </div>
//                   </div>
//                   {/*end::Col*/}
//                 </div>
//                 {/*end::Row*/}
//               </div>
//               {/*end::Body*/}
//               {/*begin::Footer*/}
//               <div className="card-footer">
//                 <button className="btn btn-info" type="submit">
//                   Submit form
//                 </button>
//               </div>
//               {/*end::Footer*/}
//             </form>
//             {/*end::Form*/}
//             {/*begin::JavaScript*/}
//             {/*end::JavaScript*/}
//           </div>
        

//         </div>
        
//       </main>
//     </>
//   );
// };


import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      data.roleId = "67bd5b1a981067fe1db4e987"; // Assign roleId

      const res = await axios.post("http://localhost:3000/user", data); // API URL

      console.log(res.data);

      if (res.status === 201) {
        alert("User registered successfully!");
        navigate("/login"); // Navigate to login after signup
      } else {
        alert("Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Check console for details.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" placeholder="FirstName" {...register("firstName", { required: true })} />
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        <input type="password" placeholder="Password" {...register("password", { required: true })} />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};


{/*


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-black flex items-center justify-center">
      <img src="/assets/img/photo1.png" alt="Signup Illustration" className="w-full h-full object-cover opacity-50" />

      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-gold-500 text-white py-2 rounded-lg">Sign Up</button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-600">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
*/}