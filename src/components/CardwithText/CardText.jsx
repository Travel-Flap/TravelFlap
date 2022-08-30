import React from "react";
import "./CardText.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

export const CardText = () => {
    return (
        <div className="card_container">
            <div className="heading-container">
                <h4>The Best Offers With Room</h4>
            </div>

            <div className="cardtext-cards">
                <div className="main_container">
                    <div className="row row-cols-1 row-cols-md-2 ">
                        <div className="col card-column">
                            <div className="card border-0">
                                <div className="row mb-5 textcards_main">
                                    <div className="col-md-6 ">
                                        <img src="https://i.imgur.com/8IRk2Wo.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body cards_body ">
                                            <h3 className="card-title">$70</h3>
                                            <div className="ratings">
                                                <IconContext.Provider value={{ className: "ratings" }}>
                                                    <AiFillStar color="#ffeb8d" />
                                                    <AiFillStar color="#fed46b" />
                                                    <AiFillStar color="#fbb53d" />
                                                    <AiFillStar color="#fa9e1b" />
                                                    <AiOutlineStar color="#fa9e30" />
                                                </IconContext.Provider>
                                            </div>
                                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                            <div className="card-text card-images">
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                            </div>
                                            <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col border-0 card-column">
                            <div className="card border-0">
                                <div className="row mb-5 textcards_main">
                                    <div className="col-md-6">
                                        <img src="https://i.imgur.com/8IRk2Wo.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body cards_body ">
                                            <h3 className="card-title">$50</h3>
                                            <div className="ratings">
                                                <IconContext.Provider value={{ className: "ratings" }}>
                                                    <AiFillStar color="#ffeb8d" />
                                                    <AiFillStar color="#fed46b" />
                                                    <AiFillStar color="#fbb53d" />
                                                    <AiFillStar color="#fa9e1b" />
                                                    <AiOutlineStar color="#fa9e30" />
                                                </IconContext.Provider>
                                            </div>
                                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                            <div className="card-text card-images">
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                            </div>
                                            <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col">
                    <div className="card ">
                        <div className="row ">
                            <div className="col-md-6 border-0">
                                <img src="https://i.imgur.com/8IRk2Wo.jpg" className="img-fluid rounded-start card_image" alt="card"/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body cards_body">
                                    <h3 className="card-title">$50</h3>
                                    <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                    <div className="card-text card-images">
                                        <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images"/>
                                        <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                        <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                        <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                    </div>
                                    <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                        <div className="col card-column">
                            <div className="card border-0">
                                <div className="row ">
                                    <div className="col-md-6">
                                        <img src="https://i.imgur.com/8IRk2Wo.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body cards_body">
                                            <h3 className="card-title">$90</h3>
                                            <div className="ratings">
                                                <IconContext.Provider value={{ className: "ratings" }}>
                                                    <AiFillStar color="#ffeb8d" />
                                                    <AiFillStar color="#fed46b" />
                                                    <AiFillStar color="#fbb53d" />
                                                    <AiFillStar color="#fa9e1b" />
                                                    <AiOutlineStar color="#fa9e30" />
                                                </IconContext.Provider>
                                            </div>
                                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                            <div className="card-text card-images">
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                            </div>
                                            <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col card-column">
                            <div className="card border-0">
                                <div className="row ">
                                    <div className="col-md-6 ">
                                        <img src="https://i.imgur.com/8IRk2Wo.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body cards_body">
                                            <h3 className="card-title">$30</h3>
                                            <div className="ratings">
                                                <IconContext.Provider value={{ className: "ratings" }}>
                                                    <AiFillStar color="#ffeb8d" />
                                                    <AiFillStar color="#fed46b" />
                                                    <AiFillStar color="#fbb53d" />
                                                    <AiFillStar color="#fa9e1b" />
                                                    <AiOutlineStar color="#fa9e30" />
                                                </IconContext.Provider>
                                            </div>
                                            <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                            <div className="card-text card-images">
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                            </div>
                                            <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

