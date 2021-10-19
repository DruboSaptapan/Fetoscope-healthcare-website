import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/service/main/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className="container my-5">
            <h1 className="mb-4">Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;