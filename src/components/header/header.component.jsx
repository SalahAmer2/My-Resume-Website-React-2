import React from "react";

export const Header = () => (
    <div className="header">
        <div className="overlay">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 header-info wow slideInLeft" data-wow-delay="2.7s">
                        <h3>Hello</h3>
                        <h1>I'm Salah Amer</h1>
                        <p className="writter"></p>
                        <br />
                        <button>More Details <i className="far fa-arrow-alt-circle-right"></i></button>
                    </div>
                    <div className="col-lg-6 header-img wow bounceInDown" data-wow-delay="2.7s">
                        <img className="i" src={require("../../img/header.png")} alt="image not found"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
)