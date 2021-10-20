import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, picture, phoneNumber, emailId, designation } = doctor;
    return (
        <div className="col-lg-3 col-12 my-3">
            <div class="card h-100">
                <img src={picture} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div class="card-text">
                        <h6>{designation}</h6>
                    </div>
                    <button className="btn btn-primary">See Info</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;