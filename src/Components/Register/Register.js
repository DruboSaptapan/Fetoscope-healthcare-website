import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import img from './images/side-img.jpg'


const Register = () => {
    const { signInUsingGoogle, signInUsingGithub, handleEmailChange, handlePasswordChange, handleRegistration, error } = useAuth();
    return (
        <div className="container">
            <div className="row m-lg-5 my-5 mx-0 no-gutters shadow-lg align-items-center">
                <div className="col-md-6 p-5">
                    <h4 className="pb-3 text-start">Create an account</h4>
                    <div className="form-style">
                        <form onSubmit={handleRegistration}>
                            <div className="form-floating mb-3">
                                <input type="text" name="Name" id="" className="form-control" placeholder="Name" />
                                <label htmlFor="floatingInput">Your name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handleEmailChange} type="email" name="email" className="form-control" placeholder="Email" required />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handlePasswordChange} type="password" name="password" className="form-control" placeholder="password" required />
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                            <div>
                                <small className="text-danger">{error}</small>
                            </div>
                            <div className="pb-2">
                                {/* <button type="submit" onClick={handleSignIn} className="btn btn-outline-primary border w-100 fw-normal mt-2">Register</button> */}
                                <input type="submit" value="SIGN UP" className="btn btn-outline-primary py-2 border w-100 fw-normal mt-2" />
                                <div className="sideline">OR</div>
                                <div className="pb-2">
                                    <button onClick={signInUsingGoogle} className="btn border w-100 fw-normal mt-2"><FcGoogle /> Register with Google</button>
                                </div>
                                <div className="sideline">OR</div>
                                <div>
                                    <button onClick={signInUsingGithub} className="btn btn-outline-dark w-100 fw-normal mt-2"> <VscGithubAlt /> Register With Github</button>
                                </div>
                                <div className="pt-4 text-center">
                                    Already have an account. <Link to="/login" style={{ textDecoration: 'none' }}>Log in</Link>
                                </div>
                            </div>

                            <br />
                        </form>

                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img src={img} alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Register;