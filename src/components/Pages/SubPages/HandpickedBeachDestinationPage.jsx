import './HandpickedBeachDestinationPage.css';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandPickedBeachDestinationInternationalComponent from './HandPickedBeachDestinationInternationalComponent/HandPickedBeachDestinationInternationalComponent';
import HandPickedBeachDestinationDomesticComponent from './HandPickedBeachDestinationDomesticComponent/HandPickedBeachDestinationDomesticComponent';
import { StaycationFaq } from './Faq/Faq';
import { VideoTextStaycation } from './VideoText/VideoText';
import { Link } from 'react-router-dom';
import { InnerHandpickedSlider } from './InnerHandpicked2/InnerHandpickedSlider/InnerHandpickedSlider';

export const HandpickedBeachDestinationPage = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (

        <div className='HandpickedBeachDestinationPageOuterPage'>
            <div className='HandpickedBeachDestinationbannerDiv'>
                <h5>The Most Excitting Beaches to Experience the Magic of Nature are a step away.</h5>
                <p>“All You need is a good dose of vitamin sea.” Just Have a visit once.</p>
            </div>
            <div className='HandpickedBeachDestinationPageHeading'>
                <h3>Recommended For You</h3>
            </div>
            <div className='HandpickedBeachDestinationconatinerDiv'>

                <div className='HandPickedBeachSliderConatiner'>
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
                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/Puerto-Rico.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Puerto-Rico</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/starfish-beach-panama.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">starfish beach Panama</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/Thailand.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Thailand</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/Trogir_-Croatia.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Trogir Croatia</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

                <div className='HandPickedBeachSliderConatiner1'>
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
                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/Lavezzi-Islands.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Lavezzi-Islands</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv" style={{ marginTop: "15%" }}>
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/Marbella_-Spain.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Marbella Spain</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/mcwayfalls-usa.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">mcwayfalls USA</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/mexico.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Mexico</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>

                <div className='HandPickedBeachSliderConatiner2'>
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
                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/australia.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Australia</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/bali.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Bali</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/goa.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Goa</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newhandPickedDestinationBeachYououterdiv">
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/SubpageofHAndPicked/First webp/Cala Gonone, Sardinia italy.webp" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 newhandPickedDestinationBeachYouTextcard">
                                    <div class="card-body newhandPickedDestinationBeachYouCarddescmain">
                                        <h3 class="card-title newhandPickedDestinationBeachYouCardtitle">Italy</h3>
                                        <p>Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>
                                        <button className='newhandPickedDestinationBeachButton'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>

            <HandPickedBeachDestinationInternationalComponent />

            <div style={{ marginTop: "5%" }}>
                <HandPickedBeachDestinationDomesticComponent />
            </div>

            {/* <InnerHandpickedSlider/> */}

            <div style={{ margin: "5%" }}>
                <StaycationFaq />
            </div>

            <div>
            </div>
            <VideoTextStaycation />
        </div>


    );
}

