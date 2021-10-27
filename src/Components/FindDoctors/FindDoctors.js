import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/findDoctor.jpg'

const FindDoctors = () => {
    return (
        <div className="">
            <div className="container d-flex flex-lg-row flex-column align-items-center mt-5">
                <div className="col-lg-6 col-12 mt-4 mt-lg-0 ms-3 text-start">
                    <h5 className="find-doctor">Need A Doctor For Free checkup?</h5>
                    <h3 className="w-100">You can find our expert doctors for your problem anywhere and anytime</h3>
                    <p className="w-75 pt-3">Consult with city's top doctors online safely from home. No travelling, no waiting. Talk to highly experienced specialists via call, chat or video. Consult now! 5 Days Free Follow-Up.</p>
                    <Link to="/doctors"><button className="btn theme-btn mt-4" type="submit" >Free Consultation</button></Link>
                </div>
                <div className="col-lg-6 col-12 me-5 me-lg-3">
                    <img src={img} className="w-100" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FindDoctors;