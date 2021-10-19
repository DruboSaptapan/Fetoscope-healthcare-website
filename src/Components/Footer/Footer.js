import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/fetoskope.png'

import './Footer.css'

const Footer = () => {
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col">
                <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" style={{ width: 40, fontWeight: 700, color: 'black', marginRight: 5 }}/> 
                        Fetoscope
                    </Link>
                </div>
                <div className="col-lg-3">
                    <ul className="service-list">
                        <li className="text-start">Services</li>
                        <li className="text-start">Cardiology(Adult)</li>
                        <li className="text-start">Dentistry</li>
                        <li className="text-start">Pharmacy</li>
                        <li className="text-start">Therapies</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="important-list">
                        <li className="text-start">Important Links</li>
                        <li className="text-start">Home</li>
                        <li className="text-start">Services</li>
                        <li className="text-start">About Us</li>
                        <li className="text-start">Contact Us</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h5>Subscribe</h5>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <button className="btn btn-success w-100">SUBSCRIBE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;