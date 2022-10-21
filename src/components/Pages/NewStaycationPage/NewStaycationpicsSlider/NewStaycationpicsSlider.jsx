import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewStaycationpicsSlider.css";
// import backsideImage from "./backsideImage.jpeg";
import staycation1 from "./staycation1.jpg";
import Manali from "./Manali.jpg";

export const NewStaycationpicsSlider = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
            <div className="NewStaycationpicsSlidermaindiv" >

                <div className="NewStaycationpicsSliderdealsconatinerdiv" >
                    <div className="NewStaycationpicsSliderdealsimageheading">
                        <img className="NewStaycationpicsSliderdealsimagefrontside" src={staycation1} />
                        <div className="NewStaycationpicsSliderdealsheadings">
                            <p className="NewStaycationpicsSliderheadingsboldheadings"> Planning a staycation? Contact TravelFlap !!!! </p>
                        </div>
                    </div>

                    <div className="NewStaycationpicsSliderdealssliderdata">
                        <div className="NewStaycationpicsSliderdealsmaindivslider" >
                            <Slider
                                arrows={false}
                                autoplay={true}
                                speed={4000}
                                autoplaySpeed={4000}
                                dots={true}
                                dotsclassName="slick-dots line-indicator"
                                ref={sliderRef}
                                slidesToShow={2}
                                slidesToScroll={2}
                                rows={2}
                                slidesPerRow={1}
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
                                            // position: "absolute",
                                            width: "100%",
                                            top: "-10px",
                                            opacity: 0,
                                        }}
                                    >
                                        {i}
                                    </div>
                                )}
                            >

                                <div className="card mb-4 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                            <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                               <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                               <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="card mb-3 NewStaycationpicsSliderouterdivtop" >
                                    <div className="row g-0 NewStaycationpicsSliderimagetextcontainer">
                                        <div className="col-md-8 NewStaycationpicsSlidercardimage">
                                        <img src={Manali} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        {/* <div className="col-md-4 NewStaycationpicsSliderdealstextcard">
                                            <div className="card-body NewStaycationpicsSlidercarddescmain">
                                                <h3 className="card-title NewStaycationpicsSliderdealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text NewStaycationpicsSliderdealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <Button className="NewStaycationpicsSliderdealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

