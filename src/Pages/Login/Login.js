import React from 'react';
import img from '../../assets/login.jpg'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div data-theme="retro">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left mt-0 pt-0">
                        <h1 className="text-5xl font-bold text-center pb-10 ">Login now!</h1>
                        <img width={500} height={500} src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-1">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label flex flex-col">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    <Link className="label-text-alt link link-hover  py-5">New to this site? Please, Register now</Link>
                                </label>
                            </div>
                            <div className="form-control my-4">
                                <button className="btn btn-info">Login</button>
                            </div>
                            <div className=' text-center '>
                                <p>Login with Google</p>
                                <button type="submit"><FaGoogle></FaGoogle></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;