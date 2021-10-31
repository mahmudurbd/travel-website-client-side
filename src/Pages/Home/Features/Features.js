import React from 'react';
import './Features.css';
const Features = () => {
    return (
        <section className="fdb-block py-5 features">
            <div className="container">
                <div className="row text-center">
                <div className="col-12">
                    <h1>Features</h1>
                </div>
                </div>
                <div className="row text-center justify-content-center mt-5">
                <div className="col-12 col-sm-6 col-lg-3">
                    <img alt="" className="img-fluid" src="https://i.ibb.co/VMWF7bB/train.png"/>
                    <h3><strong>Comfortable Journey</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                    <img alt="" className="fdb-icon" src="https://i.ibb.co/Th1RrfX/hotel.png"/>
                    <h3><strong>Luxuries Hotel</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="" className="fdb-icon" src="https://i.ibb.co/gSm0MtD/travel-guide.png"/>
                    <h3><strong>Travel Guide</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="" className="fdb-icon" src="https://i.ibb.co/qjMvZvR/rating.png"/>
                    <h3><strong>Top Rated</strong></h3>
                    <p>Duden flows by their place far far away, behind the word mountains.</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Features;




