import React from 'react';
import './Package.css';
 import { Link } from 'react-router-dom';

const Package = (props) => {
    const {id,destination,description,image,price,duration,review} = props.package
    return (
        <div className="col package">
            <div className="card h-100">
                <img
                    src={image}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title text-start">{destination}</h5>
                    <p className="card-text text-start text-muted">{description}</p>
                    <div className="d-flex justify-content-between">
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-danger">Book Now <i className="fas fa-location-arrow"></i></button>
                    </Link>
                    <p><i class="fas fa-dollar-sign">{price}</i></p>
                    </div>
                    
                    <hr />
                    <div className="d-flex justify-content-between">
                    <p className="text-muted"><i class="far fa-clock text-danger"></i> {duration} days</p>
                    <p className="text-muted">{review} reviews</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Package;