import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/fetoskope.png'

import './Footer.css'

const Footer = () => {
    return (
        <div className="container mt-5">
            <div className="row row-cols-4 row-cols-md-4">
                <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-4">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" style={{ width: 40, fontWeight: 700, color: 'black', marginRight: 5 }} />
                        Fetoscope
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                    <ul className="service-list">
                        <li className="text-start">Services</li>
                        <li className="text-start">Cardiology(Adult)</li>
                        <li className="text-start">Dentistry</li>
                        <li className="text-start">Pharmacy</li>
                        <li className="text-start">Therapies</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                    <ul className="important-list">
                        <li className="text-start">Important Links</li>
                        <li className="text-start">Home</li>
                        <li className="text-start">Services</li>
                        <li className="text-start">About Us</li>
                        <li className="text-start">Contact Us</li>
                    </ul>
                </div>
            </div>
            <p className="mt-5 fw-bold">Copyright © 2021 | This website is made by Saptapan Barua</p>
        </div>
    );
};

export default Footer;