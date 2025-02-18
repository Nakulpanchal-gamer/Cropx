import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom"
// import './Login.css'

export const Login2 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const submitHandler = (data) => {
        console.log(data)
    }
    const validationSchema = {
        emailValidator: {
            required: {
                value: true,
                message: "email is required"
            }
        },
        passwordValidator: {
            required: {
                value: true,
                message: "Password is required"
            }
        }
    }


    return (
        <div class="container">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div class="inputlabels">
                    <label>EMAIL ADDRESS</label>
                    <input type='email' placeholder='enter email' {...register("email", validationSchema.emailValidator)} />
                    <span>{errors.email?.message}</span>
                {/* </div>
                <div> */}
                    <label>PASSWORD</label>
                    <input type="password" placeholder='enter password' {...register('password', validationSchema.passwordValidator)}></input>
                    <span>{errors.password?.message}</span>
                </div>
                <div>
                    <input type='submit' value="login"></input>
                    <Link class="forgot" to="/">Forgot Password?</Link>
                </div>
            </form>
    <app-root>
      <div id="initLoader" class="init-loading-spinner-container">
        <div style="width: 10.83rem; height: 10.83rem; position: relative">
          <div class="spinner"></div>
          <div class="logo"></div>
        </div>
      </div>
    </app-root>
        </div>
    )
}

