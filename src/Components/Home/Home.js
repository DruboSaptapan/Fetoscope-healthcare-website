import React from 'react';

import Contact from '../Contact/Contact'
import Service from '../Services/Services';

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="d-flex">
                        <div className="col-lg-5">
                            {/* <img src={onBanner} alt="" width="500px"/> */}
                        </div>
                        <div className="col-lg-7 col-12">
                            <h2>Trust fetoskope</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel quaerat inventore, soluta voluptatum dolore perferendis nostrum, nesciunt expedita ratione earum, aperiam at minus doloremque eveniet rerum aut culpa molestiae!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;