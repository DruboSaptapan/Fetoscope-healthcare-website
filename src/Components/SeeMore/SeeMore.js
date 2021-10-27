import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './SeeMore.css'

const SeeMore = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/service/main/service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const serviceInfo = service.find(service => service.id === serviceId);

    return (
        <div className="container-lg">
            <div className="row mx-3 my-5 no-gutters align-items-center">
                <h2 className="mb-4">{serviceInfo?.name}</h2>
                <div className="col-md-6">
                    <img src={serviceInfo?.image} className="img-thumbnail me-3 mb-2" alt="..." />
                </div>
                <div className="col-md-6 bg-white p-lg-0">
                    <p className="text-start">{serviceInfo?.description.slice(0,1300)}</p>
                </div>
            </div>
        </div>
    );
};

export default SeeMore;