import React, { useEffect, useState } from 'react';
import Package from './Package/Package';

const Packages = () => {
    const [packages,setPackages] = useState([]);
    useEffect(() => {
        fetch('/travelo.json')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <div id="services" className="container">
            <h2 className="py-4">Tour Packages</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
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