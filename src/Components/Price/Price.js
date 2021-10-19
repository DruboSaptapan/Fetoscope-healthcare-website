import React from 'react';

import './Price.css'

const Price = () => {
    return (
        <div className="container" id="pricing">
            <h2 className="mt-5 mb-3">Price & planning</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Basic</h5>
                            <h1 className="price">99</h1>
                            <h6 className="">Monthly</h6>
                            <ul className="list-group my-3">
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">Routine Checkup</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">24Th Assistance</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">100 tests & treatments</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">Regular health checkups</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                            </ul>
                            <button className="btn price-btn">Make payment</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Advance</h5>
                            <h1 className="price">199</h1>
                            <h6 className="">Monthly</h6>
                            <ul className="list-group my-3">
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">Routine Checkup</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">24Th Assistance</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">100 tests & treatments</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">Regular health checkups</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                            </ul>
                            <button className="btn price-btn">Make payment</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Basic</h5>
                            <h1 className="price">89</h1>
                            <h6 className="">Monthly</h6>
                            <ul className="list-group my-3">
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">Routine Checkup</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">24Th Assistance</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">100 tests & treatments</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-around align-items-start">
                                    <div className="ms-3 me-auto">Regular health checkups</div>
                                    <span className="badge text-dark me-3">✔</span>
                                </li>
                            </ul>
                            <button className="btn price-btn">Make payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;