import React from "react";

export const Services = () => (
    <div className="services text-center">
        <div className="container">
            <h1>My Services</h1>
            <div className="bottom">
                <div className="dark"></div>
            </div>
            <div className="row wow bounceInUp" data-wow-offset="150" data-wow-duration="1s" data-wow-duration="1s">
                <div className="col-lg-4 web">
                    <i className="fas fa-laptop"></i>
                    <h3>React/Redux</h3>
                </div>
                <div className="col-lg-4 responsive">
                    <i className="fas fa-crop-alt"></i>
                    <h3>Responsive</h3>
                </div>
                <div className="col-lg-4 shield">
                    <i className="fas fa-shield-alt "></i>
                    <h3>Clean Code</h3>
                </div>
            </div>
        </div>
    </div>
)