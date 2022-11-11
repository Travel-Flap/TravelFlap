
import './InnerPopularDestination2scrollData.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import arrowgif from "./arrowgif.gif";

export const InnerPopularDestination2scrollData = () => {
    const [slideindex, setSlideindex] = useState(0);

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    const settings = {
        // dots: true,
        dotsclassName: "slick-dots line-indicator",
        infinite: true,
        // autoplay: true,
        autoplayspeed: 1000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        rows:5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <>
            <div className='innerPopularDestination2scrollDataslickslidercontainer'>
                                <Slider {...settings} className="multiCardSlider">
                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/abudhabhi.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Abu Dhabi <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <span> <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4></span> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Abu Dhabi</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/africa1.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Epupa Falls <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Epupa Falls</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/america.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Las Vegas <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Las Vegas</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/australia.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Sydney <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Sydney</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/canada.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Toronto <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Toronto</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/landon.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>London <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>London</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/denmark.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Aarhus <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Aarhus</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/zambiaafrica.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Zambia <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Zambia</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/swedan.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Stockholm <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Stockholm</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/abudhabhi.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Abu Dhabi <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Abu Dhabi</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/africa1.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Epupa Falls <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Epupa Falls</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/america.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Las Vegas <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Las Vegas</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/australia.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Sydney <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Sydney</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/canada.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Toronto <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Toronto</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/landon.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>London <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>London</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/denmark.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Aarhus <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Aarhus</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/zambiaafrica.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Zambia <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Zambia</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/swedan.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Stockholm <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Stockholm</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/abudhabhi.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Abu Dhabi <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Abu Dhabi</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/africa1.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Epupa Falls <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Epupa Falls</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/america.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Las Vegas <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Las Vegas</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/australia.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Sydney <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Sydney</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/canada.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Toronto <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Toronto</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/landon.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>London <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>London</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card innerPopularDestination2scrollDatadiv">
                                            <div className="card-image innerPopularDestination2scrollDatacardimage">
                                                <img src="Images/TopCities/denmark.jpg" />
                                            </div>
                                            <div className="innerPopularDestination2scrollDatadetails">
                                                <h2>Aarhus <span className="newhomeEasyVisajob-title">
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>4 Nights / 5 Days</p>
                                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                    <p style={{ marginTop: "-6%", fontSize: "13px", fontWeight: "100" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p>
                                                </span>
                                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Aarhus</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                </Slider>

                                <div className='innerPopularDestination2arrowgif'>
                                    <img height={"100%"} width={"100%"} src={arrowgif}/>
                                </div>
                            </div>
        </>

    );
}

