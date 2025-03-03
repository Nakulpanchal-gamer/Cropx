import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const Signup1 = () => {
    const { register, handleSubmit } = useForm();
  const submitHandler = async(data) => {
    // console.log("data")
    
    //before sending data.. role bind
    // data.roleId = "67be92e9064a99d8c206a920"
    // const res= await axios.post("http://localhost:3000/user",data)
    // const res = await axios.post("/Signup",data)
    // console.log(
    // res) //axiosobjec
    console.log(data) //api response...
    //tost..
    //"100" == 100 -->true
    //"100" === 100 -->false
    if(res.status===201){
      //user added..
      //naviget
    }
    else{
      //user not added..
      //login..
    }
}
  return (
    <div style={{ textAlign: "center" }}>
      <h1>USER SIGNUP...</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>FirstName</label>
          <input type="text" {...register("firstName")}></input>
        </div>
        <div>
          <label>email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  )
}


// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { data, useNavigate } from "react-router-dom";

// export const Signup1 = () => {
//   const { register, handleSubmit } = useForm();
//   //navigation...
//   const navigate = useNavigate();

//   const submitHandler = async(data) => {
//     console.log(data);
//     data.roleId = "67bd39d90d07b9633d60535d"

//     const res = await axios.post("/user",data)
//     //res.status
//     if(res.status === 201){
//       alert("User created successfully")
//       navigate("/login")
//     }
//     else{
//       alert("User not created")
//     }

//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <div>
//           <label>First Name</label>
//           <input type="text" {...register("firstName")} />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input type="text" {...register("lastName")} />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="text" {...register("email")} />
//         </div>
//         <div>
//           <label>password</label>
//           <input type="text" {...register("password")} />
//         </div>
//         <div>
//           <label>AGE</label>
//           <input type="text" {...register("age")} />
//         </div>
//         <div>
//           <input type="submit"></input>
//         </div>
//       </form>
//     </div>
//   );
// };
