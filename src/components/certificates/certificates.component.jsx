import React from "react";

import uda_frontend_Nanodegree_certificate from "../../img/Front End Developer Nanodegree.jpg";
import web_dev_certificate from "../../img/Web Development Certificate.jpg";
import uda_frontend_completion_certificate from "../../img/Udacity Graduation Certificate of Completion Front End Dev.jpg";
import uda_frontend_participation_certificate from "../../img/Udacity Graduation Certificate of Participation Front End Dev.jpg";
import uda_fullstack_participation_certificate from "../../img/Udacity Graduation Certificate Full Stack Dev.jpg";

import './certificates.styles.css'

export const Certificates = () => (
    <div className="testi text-center">
        <div className="overlay">
            <div className="container">
                <h1>Certificates</h1>
                <div className="bottom">
                    <div className="dark"></div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href={uda_frontend_Nanodegree_certificate} target="_blank" rel="noopener noreferrer">
                                <img className='certificate' src={uda_frontend_Nanodegree_certificate} alt="image not found" />
                            </a>
                            <br/>
                            <span>Front End Developer | Nanodegree Program</span>
                        </div>
                        <div className="carousel-item">
                            <a href={web_dev_certificate} target="_blank" rel="noopener noreferrer">
                                <img className='certificate' src={web_dev_certificate} alt="image not found" />
                            </a>
                            <br />
                            <span>Certificate of Completion | Web Development Bootcamp</span>
                        </div>
                        <div className="carousel-item">
                            <a href={uda_frontend_completion_certificate} target="_blank" rel="noopener noreferrer">
                                <img className='certificate' src={uda_frontend_completion_certificate} alt="image not found" />
                            </a>
                            <br />
                            <span>Certificate of Completion | Front End Development Track</span>
                        </div>
                        <div className="carousel-item">
                            <a href={uda_frontend_participation_certificate} target="_blank" rel="noopener noreferrer">
                                <img className='certificate' src={uda_frontend_participation_certificate} alt="image not found" />
                            </a>
                            <br />
                            <span>Certificate of Participation | Front End Development Track</span>
                        </div>
                        <div className="carousel-item">
                            <a href={uda_fullstack_participation_certificate} target="_blank" rel="noopener noreferrer">
                                <img className='certificate' src={uda_fullstack_participation_certificate} alt="image not found" />
                            </a>
                            <br />
                            <span>Certificate of Participation | Front End Development Track</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)