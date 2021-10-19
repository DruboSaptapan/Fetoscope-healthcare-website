import React from 'react';
import { useParams } from 'react-router';

const SeeMore = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>This is : {serviceId}</h2>
        </div>
    );
};

export default SeeMore;