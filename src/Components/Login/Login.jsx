import React from 'react';
import Lottie from "lottie-react";
import loginLottie from "../../assets/53888-login-icon.json"
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [errorMessage, setErrorMessage] = useState(null)
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  // const { user, logIn } = useContext(AuthContext)

  const onSubmit = data => {
    console.log(data)
    logIn(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Logged in',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode === 'auth/user-not-found') {
          // Display specific error message for user not found
          setErrorMessage('User not found using this email.');
        } else if (errorCode === 'auth/wrong-password') {
          // Display specific error message for wrong password
          setErrorMessage('Wrong password. Please try again.');
        } else {
          // Display general error message for other errors
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie className='md:w-96 h-56 md:h-96' animationData={loginLottie} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <h2 className='text-center text-4xl font-bold my-2'>Please Login</h2>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true })} type="text" placeholder="password" className="input input-bordered" />
                {errors.password && <span className='text-red-500'>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              
            </form>
            <div className="divider">OR</div>
              <SocialLogin />
              <p>Don't have an account?</p> 
              <Link to="/signup"><p className='text-blue-500 mb-5'>Create an account</p></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;