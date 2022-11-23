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
                                    <img src="Images/InnerVisaPage/touristvisti/hanaoi.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Hanoi</h3>
                                        <p>Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/Ninh Bình.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Ninh Binh</h3>
                                        <p>Ninh Bình is a small city in the Red River Delta of northern Vietnam. It is the capital of Ninh Bình Province.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/hoian.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Hoian</h3>
                                        <p>Hội An is a city on Vietnam’s central coast known for its well-preserved Ancient Town, cut through with canals.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/vietnam-sapa-countryside.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Sapa</h3>
                                        <p>Sapa town stands at the head of a deep valley of magnificent rice terraces that are still farmed today as they have been for centuries.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/vietnam-cu-chi-tunnels.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Chu Chi Tunnel</h3>
                                        <p>The tunnels of Củ Chi are an immense network of connecting tunnels located in the Củ Chi District of Ho Chi Minh City, Vietnam.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/vietnam-ba-be-national-park.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">BA Be National Park</h3>
                                        <p>Ba Bể National Park is a reserve in Bắc Kạn Province, Northeast region of Vietnam, set up to protect a very murky lake along with surrounding limestone and highland nevergreen forests.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/vietnam-best-places-to-visit-cat-ba-island-view.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Cat Ba Island</h3>
                                        <p>Cát Bà Island is the largest of the 367 islands spanning 260 km² that comprise the Cat Ba Archipelago, which makes up the southeastern edge of Lan Ha Bay in Northern Vietnam.</p>
                                        <button className='newhandPickedDestinationHillStationsButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 innerVisaTouristPlaceouterdiv">
                            <div class="row g-0 innerVisaTouristPlaceImagetextcontainer">
                                <div class="col-md-8 innerVisaTouristPlaceCardimage">
                                    <img src="Images/InnerVisaPage/touristvisti/halongbay.webp" class="img-fluid handPickedDestinationHillStationsRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 innerVisaTouristPlaceTextcard">
                                    <div class="card-body innerVisaTouristPlaceCarddescmain">
                                        <h3 class="card-title innerVisaTouristPlaceCardtitle">Ha Long Bay</h3>
                                        <p>ạ Long Bay, in northeast Vietnam, is known for its emerald waters and thousands of towering limestone islands topped by rainforests.</p>
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

