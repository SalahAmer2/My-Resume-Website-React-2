import React from "react";

export const Navbar = () => (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../../img/59.png" style="" alt=""></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="">
                        <i style="color:#fff;" class="fas fa-bars"></i>
                    </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item  nav-home activated">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item nav-about">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item nav-services">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item nav-portfolio">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item nav-testimonials">
                            <a class="nav-link" href="#">Testimonials</a>
                        </li>
                        <li class="nav-item nav-contact">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)