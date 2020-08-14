import React from "react";

import ReactLogo from "../../img/react-logo.png";

export const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={ReactLogo} alt="image not found"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <i style={{color: "#fff"}} className="fas fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item  nav-home activated">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item nav-about">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item nav-services">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item nav-portfolio">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item nav-testimonials">
                            <a className="nav-link" href="#">Certificates</a>
                        </li>
                        <li className="nav-item nav-contact">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)