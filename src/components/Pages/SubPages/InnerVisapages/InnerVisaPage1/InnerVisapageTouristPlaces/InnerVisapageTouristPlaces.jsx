import './InnerVisapageTouristPlaces.css';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export const InnerVisapageTouristPlaces = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
       
            <div className='innerVisaTouristPlaceconatinerDiv'>

            <div className='innerVisaTouristPlaceHeading'>
                <h3>Tourist Places in Vietnam</h3>
            </div>

                <div className='innerVisaTouristPlaceSliderConatiner'>
                    <Slider
                        arrows={false}
                        // autoplay={true}
                        speed={2000}
                        autoplaySpeed={2000}
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={4}
                        slidesToScroll={2}
                        rows={2}
                        responsive={[
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
                        ]}
                        customPaging={(i) => (
                            <div
                                style={{
                                    width: "100%",
                                    top: "-10px",
                                    opacity: 0,
                                }}
                            >
                                {i}
                            </div>
                        )}
                    >
                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/amalfi-coast-italy.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Italy</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/aspen-colorado-usa.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Colorado</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/florence-italy.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Italy</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/krabi-thailand.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Thailand</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/amalfi-coast-italy.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Italy</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/aspen-colorado-usa.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Colorado</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/florence-italy.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Italy</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/SubpageofHandPicked/1/krabi-thailand.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Thailand</h3>
                                        <p>Get ready for an amazing HillStations vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>

    );
}

