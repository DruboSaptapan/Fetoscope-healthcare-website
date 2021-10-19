import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { service } = props;
  const { id, name, image, description } = service;
  return (
    <div className="col">
      <div className="card h-100 py-3 px-4 d-flex flex-column align-items-start">
        <img src={image} className="card-img-top" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text text-start">{description.slice(0, 175)}</p>

          <Link to={`/seemore/${id}`}>
            <button className="btn border" service={service}>See more about {name}</button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Service;