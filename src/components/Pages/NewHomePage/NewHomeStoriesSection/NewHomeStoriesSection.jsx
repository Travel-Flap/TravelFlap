import React from "react";
import "./NewHomeStoriesSection.css";
import "./TestComments.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle, BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
// import { useTransition, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
import YoutubeLink from "./YoutubeLink";


export const NewHomeStoriesSection = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    const [videoString, setVideoString] = useState();
    const [toggle, setToggle] = useState(false);
    const settings = {
        infinite: true,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToScroll: 1,
        initialSlide: 5,
        draggable: false,
        touchMove: false,
        slidesToShow: 5,
        pauseOnHover: false,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    const arr = [
        {
            BrandName: "ScaleForce",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories1.png",
            name: "Venus Wills",
            role: "Senior Director of Demand Execution",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "Incubeta",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories2.png",
            name: "Linda Farr",
            role: "Chief of Staff",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "Ranking Carolina",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories4.png",
            name: "Tommy Sugishita",
            role: "interective Officer",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "Studio marche",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories5.png",
            name: "Alisha Dunsford",
            role: "Graphic Designer",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "HSE",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories1.png",
            name: "Chani Thompson",
            role: "Nutrition and Health Coach",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "National Geographic",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories2.png",
            name: "Susie murphy",
            role: "Senior Specialist,Audience Selection",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "ScaleForce",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories1.png",
            name: "Venus Wills",
            role: "Senior Director of Demand Execution",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "Incubeta",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories4.png",
            name: "Linda Farr",
            role: "Chief of Staff",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "Ranking Carolina",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories5.png",
            name: "Tommy Sugishita",
            role: "interective Officer",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "Studio marche",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories1.png",
            name: "Alisha Dunsford",
            role: "Graphic Designer",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "HSE",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories2.png",
            name: "Chani Thompson",
            role: "Nutrition and Health Coach",
            video: "GEsw-rqC-Hk",
        },
        {
            BrandName: "National Geographic",
            brandImage: "Images/NewHomeLayout/NewHomeStoriesSection/stories5.png",
            name: "Susie murphy",
            role: "Senior Specialist,Audience Selection",
            video: "GEsw-rqC-Hk",
        },
    ];

    const handleModal = (item) => {
        console.log(item);
        setVideoString(item.video);
        setToggle(true);
    };
    const handleModalOut = () => {
        setToggle(false);
    };
    return (
        <div className="storiesSection">
            <h2>What Our clients says about us</h2>
            <Slider {...settings}>
                {arr.map((item, i) => (
                    <div key={i} className="mainContentDiv">
                        <IconContext.Provider value={{ className: "playIcon" }}>
                            <BsPlayCircle />
                        </IconContext.Provider>
                        <p className="storiesBrandName">{item.BrandName}</p>
                        <p className="storiesFloating">{item.BrandName}</p>
                        <div className="storiesContentDiv">
                            <div className="storiesImageDiv">
                                <img src={item.brandImage} alt="" />
                            </div>
                        </div>
                        <div className="bylineContent">
                            <p>{item.name}</p>
                            <p className="roleFont">{item.role}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div onClick={handleModalOut} className={toggle?"youtubeDiv":"none"}>
              {toggle && <YoutubeLink embedId={videoString} />}
            </div> */}
            <p className="testimonial">View more testimonials <IconContext.Provider value={{ className: "rightArrow" }}>
                <BsArrowRight />
            </IconContext.Provider></p>


            <div className="testcommentssliderdata">
                {/* <div className="exclusivedealsmaindivslider" > */}
                <Slider
                    arrows={false}
                    autoplay={true}
                    // speed={1000}
                    // autoplaySpeed={1000}
                    // dots={true}
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={2}
                    slidesToScroll={2}
                    rows={1}
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

                    {/* <div className="card mb-4 exclusiveouterdivtop" >
                    <div className="row g-0 exclusiveimagetextcontainer"> */}
                    <div className="testcommentsdivouter">
                        <div className="testcommentsprofilediv">
                            <img width={"100%"} height={"100%"} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>
                        <div className="testcommentstextdiv">
                            <p style={{ marginTop: "15%" }}>I love the experience with the travel Flap. I surely recommend it other for same</p>
                        </div>
                        <div className="testcommentsnamediv">
                            <p style={{ marginTop: "35%", marginLeft: "5%" }}>Chris</p>
                        </div>
                    </div>
                    {/* </div>
          </div> */}

                    {/* <div className="card mb-4 exclusiveouterdivtop" >
                <div className="row g-0 exclusiveimagetextcontainer"> */}
                    <div className="testcommentsdivouter">
                        <div className="testcommentsprofilediv">
                            <img width={"100%"} height={"100%"} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>
                        <div className="testcommentstextdiv">
                            <p style={{ marginTop: "15%" }}>I love the experience with the travel Flap. I surely recommend it other for same</p>
                        </div>
                        <div className="testcommentsnamediv">
                            <p style={{ marginTop: "35%", marginLeft: "5%" }}>Chris</p>
                        </div>
                    </div>
                    {/* </div>
          </div> */}

                    {/* <div className="card mb-4 exclusiveouterdivtop" >
                    <div className="row g-0 exclusiveimagetextcontainer"> */}
                    <div className="testcommentsdivouter">
                        <div className="testcommentsprofilediv">
                            <img width={"100%"} height={"100%"} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>
                        <div className="testcommentstextdiv">
                            <p style={{ marginTop: "15%" }}>I love the experience with the travel Flap. I surely recommend it other for same</p>
                        </div>
                        <div className="testcommentsnamediv">
                            <p style={{ marginTop: "35%", marginLeft: "5%" }}>Chris</p>
                        </div>
                    </div>
                    {/* </div>
          </div> */}

                </Slider>
            </div>


        </div>
    );
};

// export default StoriesSection;
