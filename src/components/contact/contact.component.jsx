import React from "react";

import GitHubLogo from "../../img/github-logo.png";

export const Contact = () => (
    <div className="contact">
        <div className="overlay">
            <div className="container">
                <h1>Get In Touch</h1>
                <div className="bottom">
                    <div className="dark"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="item">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-phone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <div className="cont">
                                <h6>Phone</h6>
                                <p>+201069651732</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                            </svg>
                            <div className="cont">
                                <h6>Email</h6>
                                <p><a href="mailto:salahayman2@gmail.com" style={{ textDecoration: "none", color: "inherit" }} target="_blank">salahayman2@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <img src={GitHubLogo} alt="" style={{ float: "left"}}></img>
                            <div className="cont">
                                <h6>GitHub</h6>
                                <p><a href="https://github.com/SalahAmer2" style={{ textDecoration: "none", color: "inherit" }} target="_blank">https://github.com/SalahAmer2</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="cont">
                                <h6>Address</h6>
                                <p>Asyut, Egypt </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)