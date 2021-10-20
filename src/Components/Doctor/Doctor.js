import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, picture, phoneNumber, emailId, designation } = doctor;
    return (
        <div className="col-lg-3 col-12 my-3">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text">
                        <h6 className="my-3">{designation}</h6>
                        <p className="my-0">{emailId}</p>
                        <p className="mt-2 mb-0">{phoneNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;