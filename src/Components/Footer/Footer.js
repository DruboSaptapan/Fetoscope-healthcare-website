import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        <ul className="service-list">
                            <li className="text-start">Services</li>
                            <li className="text-start">Cardiology(Adult)</li>
                            <li className="text-start">Dentistry</li>
                            <li className="text-start">Pharmacy</li>
                            <li className="text-start">Therapies</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="important-list">
                            <li className="text-start">Important Links</li>
                            <li className="text-start">Home</li>
                            <li className="text-start">About Us</li>
                            <li className="text-start">Contact Us</li>
                            <li className="text-start">Therapies</li>
                        </ul>                        
                    </div>
                    <div className="col">Column</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;