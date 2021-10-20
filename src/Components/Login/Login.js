import React from 'react';

import img from './images/doctor.jpg'

import { FcGoogle } from "react-icons/fc";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div className="container">
            <div className="row mx-3 my-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6 bg-white p-5">
                    <h4 className="pb-3 text-start">Please log in</h4>
                    <div className="form-style">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingInput" placeholder="password"/>
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                        </form>

                        <div className="pb-2">
                            <button className="btn border w-100 btn-primary fw-normal mt-2">Log in</button>
                        </div>

                        <div className="sideline">OR</div>

                        <div className="pb-2">
                            <button onClick={signInUsingGoogle} className="btn border w-100 fw-normal mt-2"><FcGoogle />Log in with Google</button>
                        </div>

                        <div className="sideline">OR</div>

                        <div>
                            <button onClick={signInUsingGithub} className="btn btn-outline-dark w-100 fw-normal mt-2"> <VscGithubAlt />Log in With Github</button>
                        </div>
                        <div className="pt-4 text-center">
                            New to Fetoscope? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;