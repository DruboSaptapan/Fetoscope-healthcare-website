import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <div>
            <div className="container my-5">
                <h1 className="my-3">Our expert Doctors</h1>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Doctors;