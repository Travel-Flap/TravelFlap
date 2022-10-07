import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./NewHomeOurPartners.css";
export default class NewHomeOurPartners extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl:true,
            arrows: false,
            cssEase: "linear",
        };
        return (
            <div className="newhome_ourpartnersmaincarouseldiv">
                <h2>Our Partners</h2>

                <Slider {...settings}>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/6.png" className="_imagediv" alt="carouselimage" />
                        <div className="_hoverdiv">
                        </div>
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/8.png" className="_imagediv" alt="carouselimage" />


                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/7.png" className="_imagediv" alt="carouselimage" />


                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/9.png" className="_imagediv" alt="carouselimage" />


                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/10.png" className="_imagediv" alt="carouselimage" />


                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/11.png" className="_imagediv" alt="carouselimage" />


                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/12.png" className="_imagediv" alt="carouselimage" />


                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/13.png" className="_imagediv" alt="carouselimage" />

                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/1.png" className="_imagediv" alt="carouselimage" />

                    </div>
                </Slider>
            </div>
        );
    }
}
