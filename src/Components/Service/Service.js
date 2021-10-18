import React from 'react';

const Service = (props) => {
    const {service} = props;
    const {name, image} = service;
    return (
        <div className="col">
        <div className="card h-100 py-3 px-4 d-flex flex-column align-items-center">
          <img src={image} className="card-img-top" alt="..." style={{width: 85}}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    );
};

export default Service;