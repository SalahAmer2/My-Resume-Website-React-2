import React from "react";

import MyPhoto from "../../img/My Photo.jpg";

import "./about.styles.css";

export const About = () => (
    <div className="about">
        <div className="row">
            <div className="col0-lg-3 col-xs-12 wow fadeInLeftBig" data-wow-duration="1s" data-wow-offset="150">
                <img src={MyPhoto} alt="image not found" className="myPhoto"></img>
            </div>
            <div className="col0-lg-9 col-xs-12  wow slideInRight text-align-left" data-wow-duration="1s" data-wow-offset="150">
                <h1>MERN Stack Web Developer</h1>
                <p>
                    I am <strong>Salah Amer</strong> I'm a committed, responsible, driven web developer, 
                      <br /> who gets the job done and gives his client exactly what he needs promptly.
                      <br /> I am well-versed in both Front End and Back End development and I'm currently focused on MERN Stack projects.
                      <br /> I am interested in trying to keep up with modern designs, and taking care of features,
                      <br /> while maintaining ease of use,
                      <br /> and maximizing the benefit of simplicity and elegance.
                      <br /> That is what I commit to in all my projects.
                  </p>
                <div className="social-icon">
                    <a href="https://www.facebook.com/salah.ayman.9406/" target="_blank"><i className="fa fir fa-facebook"></i></a>
                    <a href="https://wa.me/0201069651732" target="_blank"><i className="fab fou fa-whatsapp"></i></a>
                </div>
                <button>CONTACT ME</button>
            </div>
        </div>
    </div>
)