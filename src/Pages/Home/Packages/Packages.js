import React, { useEffect, useState } from 'react';
import Package from './Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages,setPackages] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-springs-98541.herokuapp.com/tourPackages')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <div id="packages" className="container packages">
            <h2 className="py-4">Tour Packages</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-4">
                    {
                        packages.map(pack => <Package
                        key={pack.id}
                        package = {pack}
                        ></Package>)
                    }
                </div>
        </div>
    );
};

export default Packages;