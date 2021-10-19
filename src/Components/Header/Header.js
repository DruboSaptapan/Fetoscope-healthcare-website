import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from './images/fetoskope.png'

import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" style={{ width: 40, fontWeight: 700, color: 'black', marginRight: 5 }} />
                        Fetoscope
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/membership">Membership</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* {
                                    user.photoUrl && <img src={user.photoURL} alt="" />
                                } */}
                                {
                                    user.displayName && <div className="py-1 px-2 mt-2 border rounded-pill d-flex align-items-center"><img src={user.photoURL} className="rounded-pill user" alt="" /> <p className="ms-2 my-2 fw-bold">{user.displayName}</p></div>
                                }
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/login">
                                    {user.displayName ?
                                        <button onClick={logOut} className="btn btn-primary ms-2">Sign Out</button> :
                                        <NavLink to="/login"><button className="btn btn-outline-primary me-1" type="submit" >Log In</button></NavLink>
                                    }
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;