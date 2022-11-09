import React from 'react';
import img from '../../assets/login.jpg'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div data-theme="retro">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left mt-0 pt-0">
                        <h1 className="text-5xl font-bold text-center pb-10 ">Login now!</h1>
                        <img width={500} height={500} src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-1">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label flex flex-col">
                                    <Link className="label-text-alt link link-hover text-orange-800">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control my-4">
                                <input className="btn btn-info" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='border-2 border-indigo-600 rounded-md w-3/4 mx-auto text-center'>
                            <p>Login with Google</p>
                            <button><FaGoogle></FaGoogle></button>
                        </div>
                        <p className=" text-center text-xs py-5">New to this site? Please, <Link to='/register' className=' text-orange-800 link'> Register now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;