import React from 'react';
import "./HotelCards.css";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

export const HotelCards = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
        <div className='outercard_div'>
            <div className="maincard_div card mb-3">
                <div className="row g-0 border-none offercontainerdiv">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage1.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 offerscard">
                        <div className="card-body">
                            <h5 className="card-title">$70
                                <span>per night</span>
                            </h5>

                            <div className="offercardratings">
                                <IconContext.Provider value={{ className: "ratings" }}>
                                    <AiFillStar color="#ffeb8d" />
                                    <AiFillStar color="#fed46b" />
                                    <AiFillStar color="#fbb53d" />
                                    <AiFillStar color="#fa9e1b" />
                                    <AiOutlineStar color="#fa9e30" />
                                </IconContext.Provider>
                            </div>

                            <p className="card-text" ><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>

                            <div className="card-text offerscardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 border-none offercontainerdiv">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >EUROSTAR HOTEL</Button>
                        <img src="images/OffersCardImage2.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 offerscard">
                        <div className="card-body ">
                            <h5 className="card-title">$50
                                <span>per night</span>
                            </h5>

                            <div className="offercardratings">
                                <IconContext.Provider value={{ className: "ratings" }}>
                                    <AiFillStar color="#ffeb8d" />
                                    <AiFillStar color="#fed46b" />
                                    <AiFillStar color="#fbb53d" />
                                    <AiFillStar color="#fa9e1b" />
                                    <AiOutlineStar color="#fa9e30" />
                                </IconContext.Provider>
                            </div>

                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>

                            <div className="card-text offerscardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 border-none offercontainerdiv">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage3.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 offerscard">
                        <div className="card-body ">
                            <h5 className="card-title">$110
                                <span>per night</span>
                            </h5>

                            <div className="offercardratings">
                                <IconContext.Provider value={{ className: "ratings" }}>
                                    <AiFillStar color="#ffeb8d" />
                                    <AiFillStar color="#fed46b" />
                                    <AiFillStar color="#fbb53d" />
                                    <AiFillStar color="#fa9e1b" />
                                    <AiOutlineStar color="#fa9e30" />
                                </IconContext.Provider>
                            </div>

                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>

                            <div className="card-text offerscardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="maincard_div card mb-3" style={{marginLeft:"-10%"}}>
                <div className="row g-0 border-none offercontainerdiv">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage1.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 offerscard">
                        <div className="card-body">
                            <h5 className="card-title">$70
                                <span>per night</span>
                            </h5>

                            <div className="offercardratings">
                                <IconContext.Provider value={{ className: "ratings" }}>
                                    <AiFillStar color="#ffeb8d" />
                                    <AiFillStar color="#fed46b" />
                                    <AiFillStar color="#fbb53d" />
                                    <AiFillStar color="#fa9e1b" />
                                    <AiOutlineStar color="#fa9e30" />
                                </IconContext.Provider>
                            </div>

                            <p className="card-text" ><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>

                            <div className="card-text offerscardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 border-none offercontainerdiv">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >EUROSTAR HOTEL</Button>
                        <img src="images/OffersCardImage2.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 offerscard">
                        <div className="card-body ">
                            <h5 className="card-title">$50
                                <span>per night</span>
                            </h5>

                            <div className="offercardratings">
                                <IconContext.Provider value={{ className: "ratings" }}>
                                    <AiFillStar color="#ffeb8d" />
                                    <AiFillStar color="#fed46b" />
                                    <AiFillStar color="#fbb53d" />
                                    <AiFillStar color="#fa9e1b" />
                                    <AiOutlineStar color="#fa9e30" />
                                </IconContext.Provider>
                            </div>

                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>

                            <div className="card-text offerscardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 border-none offercontainerdiv">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage3.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 offerscard">
                        <div className="card-body ">
                            <h5 className="card-title">$110
                                <span>per night</span>
                            </h5>

                            <div className="offercardratings">
                                <IconContext.Provider value={{ className: "ratings" }}>
                                    <AiFillStar color="#ffeb8d" />
                                    <AiFillStar color="#fed46b" />
                                    <AiFillStar color="#fbb53d" />
                                    <AiFillStar color="#fa9e1b" />
                                    <AiOutlineStar color="#fa9e30" />
                                </IconContext.Provider>
                            </div>

                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>

                            <div className="card-text offerscardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="famousdestinationsheadingcontainer">
                <h2 className="famousdestinationsheading">Offers for New Users</h2>
                
                
               {/* <div className="famousdestinationviewalltext">
                  View all offers
                 </div> */}
                <div className="famousdestinationssliderbuttons" >
                    
                    <div className="famousdestinationsbuttons">
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                            onClick={() => sliderRef.current.slickPrev()}
                            />
                            
                            <FaAngleRight size={"2.5em"}
                               onClick={() => sliderRef.current.slickNext()}
                           />
                        </div>
                    </div>

                </div>
            </div>

        <div className='offersecondsection'>
           
           <div className="offerscardmaindiv">
                
                <Slider
                       arrows={false}
                         autoplay={true}
                       speed={1000}
                       autoplaySpeed={2000}
                       // dots
                       dotsclassName="slick-dots line-indicator"
                       ref={sliderRef}
                       slidesToShow={5}
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
   
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton1" >Discounts on Hotels</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton2" >Discounts on flights</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton3" >Hotels with free Lunch</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton4" >special packages</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton5" >Tour packages</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>     
           
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton1" >Discounts on Hotels</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton2" >Discounts on flights</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton3" >Hotels with free Lunch</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton4" >special packages</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
            <div className='offersecondsectionconatiner'>
              <div className="offersecondsectionbutton5" >Tour packages</div>
              <img className='offersecondsectionimage' src="images/OffersCardImage3.png" alt="hotelcards image" />
            </div>
   
                  
   
                   </Slider >
                </div>
           
        </div>
</>
    )
}
