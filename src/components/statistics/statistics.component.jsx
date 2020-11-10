import React from "react";

import './statistics.styles.css'

export const Statistics = () => (
    <div className="statistics text-center">
        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-xs-12 wow bounceInDown" data-wow-duration="1.5s" data-wow-offset="100">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                            <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                        </svg>
                        <h3 className="count">7453</h3>
                        <p>Lines Of Code</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 wow bounceInDown" data-wow-duration="1.5s" data-wow-offset="100">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-layers" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z" />
                            <path fillRule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z" />
                        </svg>
                        <h3 className="count">28</h3>
                        <p>Projects Completed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)