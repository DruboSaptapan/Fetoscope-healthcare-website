import React from 'react';

import map from './images/maps.png'

// import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <div className="row mx-3 my-5 no-gutters shadow-lg align-items-center">
                <div className="col-lg-6 d-none d-md-block">
                    <img src={map} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6 bg-white py-3">
                    <h4 className="pb-3 text-center">Fetoscope Health Clinic</h4>
                    <div className="d-lg-flex align-items-lg-start align-items-center">
                        <div className="card w-100 border-lg-0 border mb-lg-0 mb-2">
                            <h6>Phone Number</h6>
                            <p>+880-12678-942146</p>
                        </div>
                        <div className="card w-100 border-lg-0 border my-lg-0 my-2">
                            <h6>Email</h6>
                            <p>fetoscope@gmail.com</p>
                        </div>
                        <div className="card w-100 border-lg-0 border mt-lg-0 mt-2">
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