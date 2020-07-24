import React from "react";

export const Testimonial = () => (
    <div class="testi text-center">
        <div class="overlay">
            <div class="container">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-left-quote" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path fill-rule="evenodd" d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                <h1>Testimonial</h1>
                <div class="bottom">
                    <div class="dark"></div>
                </div>
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p>All thanks and appreciation my brother Amr, good behavior I recommend dealing with him</p>
                            <span>Ahmed majed | Site Owner</span>
                        </div>
                        <div class="carousel-item">
                            <p>I would recommend deal with him, high manners, accomplished in record time I wish you success.</p>
                            <span>ali mejahed | Site Owner</span>
                        </div>
                        <div class="carousel-item">
                            <p>Thank you Amr This is not the first deal , I wish you success</p>
                            <span>mustafa roshdy | Site Owner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)