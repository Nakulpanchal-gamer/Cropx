import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  //navigation...
  const navigate = useNavigate();

  const submitHandler = async(data) => {
    console.log(data);
    data.roleId = "67be92e9064a99d8c206a920"

    const res = await axios.post("/user",data)
    //res.status
    if(res.status === 201){
      alert("User created successfully")
      navigate("/login")
    }
    else{
      alert("User not created")
    }

  };

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
  );
};
