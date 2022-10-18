import React from 'react';
import "./NewHotelCards.css";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const NewHotelCards = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
            <div className='outerNewOfferscard_div'>
                <div className="maincard_NewOffersdiv card mb-3">
                    <div className="row g-0 border-none newOffercontainerdiv">
                        <div className="col-md-4 hotelNewOffersCards_image">
                            <Button className="newOffersCard_button" >Grand Castle</Button>
                            <img src="images/OffersCardImage1.png" alt="hotelcards image" />
                        </div>
                        <div className="col-md-8 newOffersCard">
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

                                <div className="card-text newOffersCardimages">
                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                    <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                    <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                </div>

                                <div className="offerbutton">Book...</div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 border-none newOffercontainerdiv">
                        <div className="col-md-4 hotelNewOffersCards_image">
                            <Button className="newOffersCard_button" >EUROSTAR HOTEL</Button>
                            <img src="images/OffersCardImage2.png" alt="hotelcards image" />
                        </div>
                        <div className="col-md-8 newOffersCard">
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

                                <div className="card-text newOffersCardimages">
                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                    <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                    <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                </div>

                                <div className="offerbutton">Book...</div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 border-none newOffercontainerdiv">
                        <div className="col-md-4 hotelNewOffersCards_image">
                            <Button className="newOffersCard_button" >Grand Castle</Button>
                            <img src="images/OffersCardImage3.png" alt="hotelcards image" />
                        </div>
                        <div className="col-md-8 newOffersCard">
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

                                <div className="card-text newOffersCardimages">
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

                {/* <div className="maincard_NewOffersdiv card mb-3" style={{marginLeft:"-10%"}}>
                <div className="row g-0 border-none newOffercontainerdiv">
                    <div className="col-md-4 hotelNewOffersCards_image">
                        <Button className="newOffersCard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage1.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 newOffersCard">
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

                            <div className="card-text newOffersCardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 border-none newOffercontainerdiv">
                    <div className="col-md-4 hotelNewOffersCards_image">
                        <Button className="newOffersCard_button" >EUROSTAR HOTEL</Button>
                        <img src="images/OffersCardImage2.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 newOffersCard">
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

                            <div className="card-text newOffersCardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 border-none newOffercontainerdiv">
                    <div className="col-md-4 hotelNewOffersCards_image">
                        <Button className="newOffersCard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage3.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8 newOffersCard">
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

                            <div className="card-text newOffersCardimages">
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                            </div>

                            <div className="offerbutton">Book...</div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </>
    )
}
