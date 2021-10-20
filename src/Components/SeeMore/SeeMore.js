import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './SeeMore.css'

const SeeMore = () => {
    const { serviceName } = useParams();
    const [serviceInfo, setServiceInfo] = useState([])
    const [singleServiceInfo, setSingleServiceInfo] = useState({})

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/service/main/service.json')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])

    useEffect(() => {
        const foundService = serviceInfo.find(service => service.name === serviceName)
        setSingleServiceInfo(foundService)
    }, [serviceInfo])

    return (
        <div>
            <h2 className="mt-3 mb-5">{singleServiceInfo?.name}</h2>
            <div className="container see-more">
                <img src={singleServiceInfo?.image} className="img-thumbnail w-50 me-3 mb-2" alt="..." />
                <p className="text-start">{singleServiceInfo?.description}</p>
            </div>
        </div>
    );
};

export default SeeMore;