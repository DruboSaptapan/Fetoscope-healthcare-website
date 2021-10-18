import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from 'react-router-dom';

import img from './images/side-img.jpg'

const Login = () => {
    return (
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg align-items-center">
                <div className="col-md-6 p-5">
                    <h4 className="pb-3 text-start">Create an account</h4>
                    <div className="form-style">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="password"/>
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="password"/>
                                <label htmlFor="floatingInput">Confirm your password</label>
                            </div>
                            <div className="pb-2">
                                <button className="btn w-100 fw-normal mt-2"><FcGoogle/> Register with Google</button>
                            </div>
                        </form>
                        <div className="sideline">OR</div>
                        <div>
                            <button className="btn btn-outline-dark w-100 fw-normal mt-2"> <VscGithubAlt/> Register With Github</button>
                        </div>
                        <div className="pt-4 text-center">
                            Already have an account. <Link to="/login">Log in</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img src={img} alt="" className="w-100"/>
                </div>
            </div>
        </div>
    );
};

export default Login;