import './HandPickedWeekendDestinationSliderCards.css';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export const HandPickedWeekendDestinationSliderCards = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
       
            <div className='HandpickedWeekendDestinationconatinerDiv'>

           <div className='HandpickedWeekendDestinationPageHeading'>
                <h3>Recommended For You</h3>
            </div>

                <div className='HandPickedWeekendSliderConatiner'>
                    <Slider
                        arrows={false}
                        // autoplay={true}
                        speed={2000}
                        autoplaySpeed={2000}
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={4}
                        slidesToScroll={2}
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
                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/amalfi-coast-italy.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Italy</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/aspen-colorado-usa.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Colorado</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/florence-italy.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Italy</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/krabi-thailand.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Thailand</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

                <div className='HandPickedWeekendSliderConatiner1'>
                    <Slider
                        arrows={false}
                        // autoplay={true}
                        speed={4000}
                        autoplaySpeed={2000}
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={4}
                        slidesToScroll={2}
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
                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/kyoto-japan.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">kyoto</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/maui-hawaii-usa.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Hawaii</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/paris-france.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">France</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/pykara-waterfalls-ooty-india.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Ooty</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>

                <div className='HandPickedWeekendSliderConatiner2'>
                    <Slider
                        arrows={false}
                        // autoplay={true}
                        speed={4000}
                        autoplaySpeed={2000}
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={4}
                        slidesToScroll={2}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow:3,
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

                        <Link to="/bali">
                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/venice-city.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Venice</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/santorini-greece.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Greece</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/savannah-georgia.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">Georgia</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationWeekendYououterdiv">
                            <div class="row g-0 newhandPickedDestinationWeekendYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationWeekendYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/the-berkshires-new-england-usa.webp" class="img-fluid handPickedDestinationWeekendRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationWeekendYouTextcard">
                                    <div class="card-body newhandPickedDestinationWeekendYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationWeekendYouCardtitle">New England</h3>
                                        <p>Get ready for an amazing Weekend vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationWeekendButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>

    );
}

