import React from 'react';
// import { Link } from 'react-router-dom';

const Package = (props) => {
    const {id,service_name,description,image} = props.package
    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={image}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{service_name}</h5>
                    <p className="card-text">{description}</p>
                    <a href={`/booking/${id}`}>
                        <button className="service-btn btn-primary">Take Service <i className="fas fa-location-arrow"></i></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Package;