import React from 'react';
import "./HotelCards.css";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
export const HotelCards = () => {
    return (
        <div className='outercard_div'>
            <div className="maincard_div card mb-3">

                <div className="row g-0 border-none">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage1.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body offerscard">
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

                <div className="row g-0 border-none">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >EUROSTAR HOTEL</Button>
                        <img src="images/OffersCardImage2.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body offerscard">
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

                <div className="row g-0 border-none">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage3.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body offerscard">
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

                <div className="row g-0 border-none">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Eurostar Hotel</Button>
                        <img src="images/OffersCardImage4.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body offerscard">
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

                <div className="row g-0 border-none">
                    <div className="col-md-4 hotelcards_image">
                        <Button className="offerscard_button" >Grand Castle</Button>
                        <img src="images/OffersCardImage5.png" alt="hotelcards image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body offerscard">
                            <h5 className="card-title">$90
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

    )
}
