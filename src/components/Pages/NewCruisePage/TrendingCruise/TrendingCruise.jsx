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
            autoplay: true,
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
                                <h5> Greece Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-st-maarten-grand-anse-beach-and-rainbow-cafe-1024x683.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h5>The Caribbean                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-el-arco-cabo-san-lucas-mexico-1536x1022.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h5>Mexican Riviera                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-panama-canal-1024x683.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h5>Panama Canal                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-promenade-des-anglais-nice-france-1536x1025.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h5>Western Europe                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTrendingCruisewrapper">
                        <div className="card newMultisection_TrendingCruiseimage">
                            <div className="card-image newTrendingCruisecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-kabira-bay-ishigaki-japan-1024x683.jpg" />
                            </div>
                            <div className="newWorldTrendingCruisedetails">
                                <h5>Southern Japan                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div> 
                </Slider>
                </div>
            </div>
        )
    }
}
