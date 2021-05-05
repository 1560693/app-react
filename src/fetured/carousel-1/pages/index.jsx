import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; 
import '../pages/styles.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 
 

function Carousel_1(props) {
    const options = {
        items: 3,
        nav: true,
        rewind: true,
        center: true,
        loop: true,
        margin: 140,
        autoWidth: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        smartSpeed: 600,
    };
     
    const events = {
        onInitialized: function(event) {
            var element = event.target;
            var nav_btn_prev = $(element).find(".owl-prev");
            var nav_btn_next = $(element).find(".owl-next");

            nav_btn_prev.on('click', function(){
                $(nav_btn_prev).addClass("disable-btn");
                setTimeout( function() {
                    $(nav_btn_prev).removeClass("disable-btn");
                },500)
            });

            nav_btn_next.on('click', function(){
                $(nav_btn_next).addClass("disable-btn");
                setTimeout( function() {
                    $(nav_btn_next).removeClass("disable-btn");
                },500)
            });
        },
    };
    return (
        <div className="mnmd-block mnmd-block--fullwidth slider-1">
            <div className="mnmd-block__inner">
                <OwlCarousel 
                    className="slider-circle nav-circle owl-carousel js-carousel"
                    options={options} events={events}
                >
                    <article className="post post--vertical post--vertical-circle">
                        <div className="post__thumb object-fit">
                            <Link to="/">
                                <img src={require('../../../image/img.jpg').default} />
                            </Link>
                        </div>
                        <div className="post__text">
                            <h3 className="post__title text-center f-36 f-w-700">
                                <Link>
                                    Keep Your Eyes On The Stars And Your Feet One Ground
                                </Link>
                            </h3>
                        </div>
                    </article>

                    <article className="post post--vertical post--vertical-circle">
                        <div className="post__thumb object-fit">
                            <Link to="/">
                                <img src={require('../../../image/img.jpg').default} />
                            </Link>
                        </div>
                        <div className="post__text">
                            <h3 className="post__title text-center f-36 f-w-700">
                                <Link>
                                    Keep Your Eyes On The Stars And Your Feet One Ground
                                </Link>
                            </h3>
                        </div>
                    </article>

                    <article className="post post--vertical post--vertical-circle">
                        <div className="post__thumb object-fit">
                            <Link to="/">
                                <img src={require('../../../image/module1.1.jpg').default} />
                            </Link>
                        </div>
                        <div className="post__text">
                            <h3 className="post__title text-center f-36 f-w-700">
                                <Link>
                                    Keep Your Eyes On The Stars And Your Feet One Ground
                                </Link>
                            </h3>
                        </div>
                    </article>

                    <article className="post post--vertical post--vertical-circle">
                        <div className="post__thumb object-fit">
                            <Link to="/">
                                <img src={require('../../../image/module1.1.jpg').default} />
                            </Link>
                        </div>
                        <div className="post__text">
                            <h3 className="post__title text-center f-36 f-w-700">
                                <Link>
                                    Keep Your Eyes On The Stars And Your Feet One Ground
                                </Link>
                            </h3>
                        </div>
                    </article>

                    
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Carousel_1;