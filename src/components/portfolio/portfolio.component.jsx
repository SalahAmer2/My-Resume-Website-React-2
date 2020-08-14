import React from "react";

import Project_1 from "../../img/project1.png";
import Project_4 from "../../img/project4.png";
import Project_3 from "../../img/project3.png";
import Project_2 from "../../img/project2.png";
import Project_5 from "../../img/project5.png";
import Project_6 from "../../img/project6.png";
import CrwnClothing from "../../img/crwn-clothing-site.png";
import BeActive from "../../img/Be Active.png";
import PrevResume from "../../img/previous-portfolio-website.png";

import TravelApp from "../../videos/Travel App.mp4";
import Auth_Secrets_with_Database from "../../videos/Auth_Secrets.mp4";
import Blog_with_Database from "../../videos/Blog Website with Database.mp4";

import "./portfolio.styles.css"

//Only not live projects should use videos

export const Portfolio = () => (
    <div className="portfolio">
        <div className="container">
            <h1>My portfolio</h1>
            <div className="bottom">
                <div className="dark"></div>
            </div>
            <div className="list text-center">
                <ul>
                    <li className="upper active" data-filter="all">ALL</li>
                    <li className="filter" data-filter=".Live">Live</li>
                    <li className="filter" data-filter=".NOT_Live">NOT Live</li>
                </ul>
            </div>
            {/* Live websites will have "View Project Live" as the text of the button while the others won't have a button, you'll just click play */}
            <div className="row wow bounceInRight" data-wow-duration="1s" data-wow-offset="100">
                <div className="col-lg-4 col-md-6 col-xs-12 mix Live">
                    <div className="item">
                        <img src={CrwnClothing} alt=""></img>
                        <div className="over text-center">
                            <a href="https://salah-crwn-live.herokuapp.com/" target="_blank"><button>View Project</button></a>
                            <a href="https://github.com/SalahAmer2/crwn-clothing" target="_blank"><i className="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12 mix Live">
                    <div className="item">
                        <img src={PrevResume} alt="image not found"></img>
                        <div className="over text-center">
                            <a href="https://salah-amer-resume.netlify.app/" target="_blank"><button>View Project</button></a>
                            <a href="https://github.com/SalahAmer2/My-Resume-Website-React" target="_blank"><i className="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12 mix Live">
                    <div className="item">
                        <img src={BeActive} alt="image not found"></img>
                        <div className="over text-center">
                            <a href="https://quiet-lowlands-72158.herokuapp.com/" target="_blank"><button>View Project</button></a>
                            <a href="https://github.com/SalahAmer2/Live-Website-Project" target="_blank"><i className="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row wow bounceInLeft" data-wow-duration="1s" data-wow-offset="100">
                <div className="col-lg-4 col-md-6 col-xs-12 mix NOT_Live">
                    <div className="item">
                        {/* <div className="over text-center"> //Commenting this out because it will make video not appear */}
                            <video width="500" controls>
                                <source src={TravelApp} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12 mix NOT_Live">
                    <div className="item text-center">
                        <video width="500" controls>
                            <source src={Auth_Secrets_with_Database} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12 mix NOT_Live">
                    <div className="item text-center">
                        <video width="500" controls>
                            <source src={Blog_with_Database} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
)