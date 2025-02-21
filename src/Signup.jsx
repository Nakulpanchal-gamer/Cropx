import React from 'react'
import { useForm } from 'react-hook-form'

export const Signup = () => {

    const{register,handleSubmit,formState:{errors}} = useForm()

        const submitHandler = (data) =>{
            console.log(data)
        }
        const validationSchema ={
            nameValidator:{
                required:{
                    value:true,
                    message:"name is required"
                }
            },
            emailValidator:{
                required:{
                    value:true,
                    message:"email is required"
                }
            },
            passwordValidator:{
              required:{
                value:true,
                message:"password is required"
              }
            }
        }

  return (
    <div style={{textAlign:"center",color:"blue"}}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
           <div> 
            <label>NAME</label>
            <input type='text' placeholder='enter name' {...register("email",validationSchema.emailValidator)}/>
            <span>{errors.name?.message}</span>
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='enter email' {...register('password',validationSchema.passwordValidator)}></input>
                <span>{errors.email?.message}</span>
            </div>
            <div>
                <label>Create Password</label>
                <input type="password" placeholder='enter password' {...register('password',validationSchema.passwordValidator)}></input>
                <span>{errors.password?.message}</span>
            </div>
            <div>
            <input type='submit' value="signup"></input>
            </div>
        </form>
    </div>
  )
}