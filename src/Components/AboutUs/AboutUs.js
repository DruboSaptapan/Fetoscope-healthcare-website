import React from 'react';
import './AboutUs.css'

import img from './images/doctor.png'

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row my-5 px-5 no-gutters align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6 d-none d-md-block align-items-center">
                    <h2 className="text-start mb-3 name">Fetoscope Health Clinic</h2>
                    <p className="text-start pt-3 pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, molestias tenetur ducimus inventore temporibus quaerat.</p>
                    <div className="d-flex about-list my-4">
                        <ul className="me-5">
                            <li className="text-start">24/7 hour support</li>
                            <li className="text-start">99% client satisfaction</li>
                        </ul>
                        <ul className="ms-5">
                            <li className="text-start">Emergency service</li>
                            <li className="text-start">Eye Care</li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="card w-100 border-0">
                            <h4>50k</h4>
                            <div>Happy Clients</div>
                        </div>
                        <div className="card w-100 border-0">
                            <h4>30+</h4>
                            <div>Departments</div>
                        </div>
                        <div className="card w-100 border-0">
                            <h4>60+</h4>
                            <div>Senior & expert doctors</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;