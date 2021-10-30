import React from 'react';

const Testimonial = () => {
    return (
            <section className="fdb-block py-4">
                <div className="container">
                    <div className="row text-center justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h1>Testimonials</h1>
                        <p className="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                    </div>
                    </div>

                    <div className="row mt-5 align-items-center justify-content-center py-5">
                    <div className="col-md-8 col-lg-4">
                        <div className="fdb-box border p-2">
                        <div className="row no-gutters align-items-center">
                            <div className="col-3">
                            <img alt="" className="img-fluid rounded" src="https://randomuser.me/api/portraits/med/men/75.jpg"/>
                            </div>
                            <div className="col-8 ml-auto">
                            <p>
                                <strong>Adam Lee</strong><br/>
                                <em>Co-founder at Lexeon</em>
                            </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                            <p className="lead">
                                "Even the all-powerful Pointing has no control about the blind texts it is an small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-4 mt-4 mt-lg-0">
                        <div className="fdb-box border p-2">
                        <div className="row no-gutters align-items-center">
                            <div className="col-3">
                            <img alt="" className="img-fluid rounded" src="https://randomuser.me/api/portraits/med/men/76.jpg"/>
                            </div>
                            <div className="col-8 ml-auto">
                            <p>
                                <strong>Robert Jhon</strong><br/>
                                <em>Professor at UIU</em>
                            </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                            <p className="lead">
                                "Far far away, behind the word mountains, far from the countries Vokalia. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-4 mt-4 mt-lg-0">
                        <div className="fdb-box border p-2">
                        <div className="row no-gutters align-items-center">
                            <div className="col-3">
                            <img alt="" className="img-fluid rounded" src="https://randomuser.me/api/portraits/med/men/77.jpg"/>
                            </div>
                            <div className="col-8 ml-auto">
                            <p>
                                <strong>Abrahum Rony</strong><br/>
                                <em>Programmer at Talentech</em>
                            </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                            <p className="lead">
                                "Separated they live in Bookmarksgrove right at the coast of the Semantics, the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        
    );
};

export default Testimonial;