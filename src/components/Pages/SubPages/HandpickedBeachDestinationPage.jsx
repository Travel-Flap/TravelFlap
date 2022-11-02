import './HandpickedBeachDestinationPage.css';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandPickedBeachDestinationInternationalComponent from './HandPickedBeachDestinationInternationalComponent/HandPickedBeachDestinationInternationalComponent';

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
                        autoplay={true}
                        speed={4000}
                        autoplaySpeed={2000}
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={3}
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                        slidesToShow={3}
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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

                <div class="card mb-3 newhandPickedDestinationBeachYououterdiv"  style={{marginTop:"15%"}}>
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                        slidesToShow={3}
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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

                <div class="card mb-3 newhandPickedDestinationBeachYououterdiv"  style={{marginTop:"15%"}}>
                            <div class="row g-0 newhandPickedDestinationBeachYouImagetextcontainer">
                                <div class="col-md-8 newhandPickedDestinationBeachYouCardimage">
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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
                                    <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid handPickedDestinationBeachRecommendedimage" alt="..." />
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

                
                </Slider>

                </div> 

            </div>

            <HandPickedBeachDestinationInternationalComponent/>

            <div style={{marginTop:"5%"}}>
            <HandPickedBeachDestinationInternationalComponent/>  
            </div>
            
          </div>


        
        
    );
}

