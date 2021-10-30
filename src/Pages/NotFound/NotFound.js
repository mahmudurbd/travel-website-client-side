import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="notfound-wrap">
            <div>
            <div className="text">
                <Link to='/home' className="btn btn-primary">Go Back Homepage</Link>
            </div>
            </div>
            
        </div>
    );
};

export default NotFound;