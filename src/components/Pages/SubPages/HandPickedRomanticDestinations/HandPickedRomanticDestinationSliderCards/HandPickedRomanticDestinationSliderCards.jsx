import './HandPickedRomanticDestinationSliderCards.css';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export const HandPickedRomanticDestinationSliderCards = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
       
            <div className='HandpickedRomanticDestinationconatinerDiv'>

           <div className='HandpickedRomanticDestinationPageHeading'>
                <h3>Recommended For You</h3>
            </div>

                <div className='HandPickedRomanticSliderConatiner'>
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
                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/amalfi-coast-italy.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Italy</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/aspen-colorado-usa.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Colorado</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/florence-italy.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Italy</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/krabi-thailand.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Thailand</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

                <div className='HandPickedRomanticSliderConatiner1'>
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
                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/kyoto-japan.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">kyoto</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/maui-hawaii-usa.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Hawaii</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/paris-france.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">France</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/pykara-waterfalls-ooty-india.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Ooty</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>

                <div className='HandPickedRomanticSliderConatiner2'>
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
                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/venice-city.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Venice</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/santorini-greece.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Greece</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/savannah-georgia.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">Georgia</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationRomanticYououterdiv">
                            <div class="row g-0 newhandPickedDestinationRomanticYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationRomanticYouCardimage">
                                    <img src="Images/SubpageofHandPicked/1/the-berkshires-new-england-usa.webp" class="img-fluid handPickedDestinationRomanticRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationRomanticYouTextcard">
                                    <div class="card-body newhandPickedDestinationRomanticYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationRomanticYouCardtitle">New England</h3>
                                        <p>Get ready for an amazing Romantic vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationRomanticButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>

    );
}

