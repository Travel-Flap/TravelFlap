import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TrendingCruise.css';
import { Button } from 'react-bootstrap';
import countrydata from '../../../../CountryData.json';
import {FaAngleRight} from "react-icons/fa";


// import "/src/App.css";

export default class TrendingCruise extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed:2000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            arrows:false,
        };
        return (
            <div className='newTrendingCruisecontainer'>
                <div style={{width:"90%" ,margin:"auto"}}>
                <div className='newTrendingCruiseHeadingContainer'>
                    <h2>Trending Cruise</h2>

                            <div className='newTrendingCruisedealsbutton'> 
                                View all Deals
                            </div>

                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-hydra-island-greece-1024x724.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h2> Greece Cruise <span className="job-title">
                                    <p>Explore the endless beauty of Greece on a cruise to the Greek Islands</p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-st-maarten-grand-anse-beach-and-rainbow-cafe-1024x683.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h2>The Caribbean <span className="job-title">
                                    <p>Enjoy two different cultures on the Eastern Caribbean island of St. Maarten.
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-el-arco-cabo-san-lucas-mexico-1536x1022.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h2>Mexican Riviera <span className="job-title">
                                    <p>For many, the Mexican Riviera is a highlight of the Pacific coast.
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-panama-canal-1024x683.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h2>Panama Canal <span className="job-title">
                                    <p>Admire a masterpiece of engineering during a cruise to the Panama Canal. Get a front-row seat to see the incredible design.
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-promenade-des-anglais-nice-france-1536x1025.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h2>Western Europe <span className="job-title">
                                    <p>Discover the highlights of Western Europe on a cruise along the Mediterranean’s northern coastline and Portugal’s Atlantic ports
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-kabira-bay-ishigaki-japan-1024x683.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h2>Southern Japan <span className="job-title">
                                    <p>In Tokyo, marvel at the fascinating combination of modern design and technology with ancient architecture and tradition.
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div> 
                </Slider>
                </div>
            </div>
        )
    }
}
