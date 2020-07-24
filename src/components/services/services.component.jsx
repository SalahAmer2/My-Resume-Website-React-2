import React from "react";

export const Services = () => (
    <div class="services text-center">
        <div class="container">
            <h1>My Services</h1>
            <div class="bottom">
                <div class="dark"></div>
            </div>
            <div class="row wow bounceInUp" data-wow-offset="150" data-wow-duration="1s" data-wow-duration="1s">
                <div class="col-lg-4 web">
                    <i class="fas fa-laptop"></i>
                    <h3>Web Design</h3>
                </div>
                <div class="col-lg-4 responsive">
                    <i class="fas fa-crop-alt"></i>
                    <h3>Responsive</h3>
                </div>
                <div class="col-lg-4 shield">
                    <i class="fas fa-shield-alt "></i>
                    <h3>Clean Code</h3>
                </div>
            </div>
        </div>
    </div>
)