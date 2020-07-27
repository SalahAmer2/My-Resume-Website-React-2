import React from "react";

export const Portfolio = () => (
    <div class="protofolio">
        <div class="container">
            <h1>My protofolio</h1>
            <div class="bottom">
                <div class="dark"></div>
            </div>
            <div class="list text-center">
                <ul>
                    <li class="upper active" data-filter="all">ALL</li>
                    <li class="filter" data-filter=".Responsive">Responsive</li>
                    <li class="filter" data-filter=".NOT_Responsive">NOT Responsive</li>
                </ul>
            </div>

            <div class="row wow bounceInRight" data-wow-duration="1s" data-wow-offset="100">
                <div class="col-lg-4 col-md-6 col-xs-12 mix NOT_Responsive">
                    <div class="item">
                        <img src="../../img/project1.png" alt=""></img>
                        <div class="over text-center">
                            <a href="https://github.com/amr-mohamed1/classic-project" target="_blank">
                                <button>View Project</button>
                            </a>
                            <a href="../../img/screencapture-file-E-EDU-HTML-Jquery-project-no-2-classic-temp-index-html-2020-06-25-12_59_29.png" target="_blank">
                                <i class="far fa-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-12 mix Responsive">
                    <div class="item">
                        <img src="../../img/project4.png" alt=""></img>
                        <div class="over text-center">
                            <a href="https://github.com/amr-mohamed1/responsive-project" target="_blank"><button>View Project</button></a>
                            <a href="../../img/screencapture-file-E-EDU-HTML-Bootstrap-elzer-project-index-html-2020-06-30-12_22_33.png" target="_blank"><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-12 mix Responsive">
                    <div class="item">
                        <img src="../../img/project3.png" alt=""></img>
                        <div class="over text-center">
                            <a href="https://amr-mohamed1.github.io/hosting-website/" target="_blank"><button>View Project</button></a>
                            <a href="../../img/screencapture-file-E-EDU-HTML-Bootstrap-hosting-website-index-html-2020-06-25-12_57_09.png" target="_blank"><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row wow bounceInLeft" data-wow-duration="1s" data-wow-offset="100">
                <div class="col-lg-4 col-md-6 col-xs-12 mix NOT_Responsive">
                    <div class="item">
                        <img src="../../img/project2.png" alt=""></img>
                        <div class="over text-center">
                            <a href="https://github.com/amr-mohamed1/Tanatos-project" target="_blank"><button>View Project</button></a>
                            <a href="../../img/screencapture-file-E-EDU-HTML-Jquery-project-no-1-Tanatos-project-index-html-2020-06-25-12_58_43.png" target="_blank"><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-12 mix NOT_Responsive">
                    <div class="item text-center">
                        <img src="../../img/project5.png" alt=""></img>
                        <div class="over">
                            <a href="https://github.com/amr-mohamed1/simple-project-with-html-and-css" target="_blank"><button>View Project</button></a>
                            <a href="../../img/screencapture-file-E-EDU-HTML-retech-project-1-index-html-2020-06-30-12_24_02.png" target="_blank"><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-12 mix NOT_Responsive">
                    <div class="item text-center">
                        <img src="../../img/project6.png" alt=""></img>
                        <div class="over">
                            <a href="https://amr-mohamed1.github.io/hosting-website/" target="_blank"><button>View Project</button></a>
                            <a href="../../img/screencapture-file-E-EDU-HTML-forms-form1-vortex-html-2020-06-30-12_25_32.png" target="_blank"><i class="far fa-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)