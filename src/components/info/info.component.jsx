import React from "react";

export const Info = () => (
    <div className="information">
        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12 wow bounceInLeft" data-wow-duration="2s" data-wow-offset="150" data-wow-duration="1.5s">
                        <div className="education">
                            <i className="fas fa-pencil-alt"></i>
                            <h3>Education</h3>
                            <div className="underline"></div>
                            {/* <div className="university">
                                <h5>Faculty of Computers and Artificial Intelligence</h5>
                                <p>Computer Sciences</p>
                            </div> */}
                            <div className="online">
                                <h5>The One Million Arab Coders program</h5>
                                <p>Front End Development</p>
                            </div>
                            <div className="online">
                                <h5>The Complete 2019 Web Development Bootcamp Udemy Course</h5>
                                <p>Full Stack Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 wow bounceInRight" data-wow-duration="2s" data-wow-offset="150" data-wow-duration="1.5s">
                        <div className="skills">
                            <i className="fas fa-layer-group"></i>
                            <h3>Skills</h3>
                            <div className="underline"></div>
                            <div className="pro">
                                <div className="html">
                                    <h6>HTML/HTML5 <span>93%</span></h6>
                                    <div className="eq-html">
                                        <div className="h"></div>
                                    </div>
                                </div>
                                <div className="css">
                                    <h6>CSS/CSS3 <span>95%</span></h6>
                                    <div className="eq-css">
                                        <div className="c"></div>
                                    </div>
                                </div>
                                <div className="bootstrap">
                                    <h6>BOOTSTRAP <span>90%</span></h6>
                                    <div className="eq-bootstrap">
                                        <div className="b"></div>
                                    </div>
                                </div>
                                <div className="javascript">
                                    <h6>JAVASCRIPT <span>80%</span></h6>
                                    <div className="eq-javascript">
                                        <div className="ja"></div>
                                    </div>
                                </div>
                                <div className="jquery">
                                    <h6>JQUERY <span>85%</span></h6>
                                    <div className="eq-jquery">
                                        <div className="jq"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)