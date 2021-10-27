import React from 'react';
import { NavLink } from 'react-router-dom';
import FAQ from '../FAQ/FAQ';
import FindDoctors from '../FindDoctors/FindDoctors';
import Service from '../Services/Services';

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="banner">
                    <div className="d-flex">
                        <div className="col-lg-5 col-12 d-flex flex-column align-items-start">
                            <h1 className="text-start fw-normal">Medical Services <span className="fw-bold">that you can trust</span></h1>
                            <p className="text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel quaerat inventore, soluta voluptatum dolore perferendis nostrum, nesciunt expedita ratione earum, aperiam at minus doloremque eveniet rerum aut culpa molestiae!</p>
                            <NavLink to="/register">
                                <button className="btn theme-btn">Read more</button>
                            </NavLink>
                        </div>
                        <div className="col-lg-5"></div>
                    </div>
                </div>
                <Service></Service>
                <FindDoctors></FindDoctors>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;