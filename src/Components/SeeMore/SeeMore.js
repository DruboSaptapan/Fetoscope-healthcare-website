import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './SeeMore.css'

const SeeMore = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    const [serviceInfo, setServiceInfo] = useState([])
    const [singleServiceInfo, setSingleServiceInfo] = useState({})

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/DruboSaptapan/service/main/service.json`)
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])

    useEffect(() => {
        const foundService = serviceInfo.find(service => service.name === serviceId)
        setSingleServiceInfo(foundService)
    }, [serviceId, serviceInfo])

    return (
        <div>
            <div className="row mx-3 my-5 no-gutters">
                <div className="col-md-6 d-none d-md-block">
                    <img src={singleServiceInfo?.image} className="img-thumbnail w-50 me-3 mb-2" alt="..." />
                </div>
                <div className="col-md-6 bg-white p-5">
                    <p className="text-start">{singleServiceInfo?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SeeMore;