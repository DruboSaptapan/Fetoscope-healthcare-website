import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const { id, name, picture, phoneNumber, emailId, designation } = doctor;
    return (
        <div className="col-lg-3 col-12 my-3 pe-0">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text mb-3">
                        <h6 className="my-3">{designation}</h6>
                        <p className="my-0">{emailId}</p>
                        <p className="m-2 mb-0">{phoneNumber}</p>
                    </div>
                    <Link to={`/doctorinfo/${id}`}>
                        <button className="btn service-btn border" doctor={doctor}>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;