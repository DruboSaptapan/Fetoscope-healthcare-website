import React from 'react';

import map from './images/maps.png'

// import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <div className="row mx-3 my-5 no-gutters shadow-lg align-items-center py-3 border">
                <div className="col-lg-6 d-none d-md-block">
                    <img src={map} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6 bg-white">
                    <h4 className="pb-3 text-center">Fetoscope Health Clinic</h4>
                    <div>
                        <div className="card w-100 border border-lg-0 mb-2">
                            <h6>Phone Number</h6>
                            <p>+880-12678-942146</p>
                        </div>
                        <div className="card w-100 border border-lg-0 my-2">
                            <h6>Email</h6>
                            <p>fetoscope@gmail.com</p>
                        </div>
                        <div className="card w-100 border border-lg-0 mt-2">
                            <h6>Address</h6>
                            <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;