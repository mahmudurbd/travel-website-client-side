import React from 'react';
 import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div id="notfound">
            <div class="notfound">
            <div class="notfound-404">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <Link to="/">Report</Link>
            <Link to="/home">Homepage</Link>
            </div>
   </div>
    );
};

export default NotFound;