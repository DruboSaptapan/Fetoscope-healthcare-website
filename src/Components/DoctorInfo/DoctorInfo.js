import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorInfo = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    const doctorInfo = doctor.find(doctor => doctor.id === doctorId);
    return (
        <div className="container my-5">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={doctorInfo?.picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h5 className="card-title">{doctorInfo?.name}</h5>
                            <h6>{doctorInfo?.designation}</h6>
                            <p>{doctorInfo?.phoneNumber}</p>
                            <p>{doctorInfo?.emailId}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;