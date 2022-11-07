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
                        <img src="Images/Partners Logos/Air_India.png" className="_imagediv" alt="Air India" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/Emirates.png" style={{width:"120px",height:"80px"}} className="_imagediv" alt="Emirates" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/Ethiopian.png" className="_imagediv" alt="Ethiopia" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/Etihad.png" style={{width:"120px",height:"80px"}} className="_imagediv" alt="Etihad" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/Europcar.png" style={{width:"120px",height:"80px",marginTop:"5%"}} className="_imagediv" alt="Europcar" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/Kenya.png" className="_imagediv" alt="Kenya" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/Royal_Air.png" className="_imagediv" alt="Morocco" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/South_African.png" className="_imagediv" alt="carouselimage" />
                    </div>
                    <div className="_carouseldiv1">
                        <img src="Images/Partners Logos/tboHolidays.png" className="_imagediv" alt="carouselimage" />
                    </div>
                </Slider>
            </div>
        );
    }
}
