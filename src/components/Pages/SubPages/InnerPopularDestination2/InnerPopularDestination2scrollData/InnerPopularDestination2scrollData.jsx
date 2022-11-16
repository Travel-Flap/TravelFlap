import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect,useState } from "react";
import "./InnerPopularDestination2scrollData.css";
import { Button } from "react-bootstrap";
import arrowgif from "./arrowgif.gif";

export const InnerPopularDestination2scrollData = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="innerPopularDestination2scrollDatamaindiv">
            {/* <div className="innerPopularDestination2scrollDataHeadingcontainer" >
                <h2 className="innerPopularDestination2scrollDataHeading1">Top of the world Domestic Destinations</h2>
            </div> */}

            <div className="innerPopularDestination2scrollDataSliderContainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    rows={5}
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


                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?b=1&s=170667a&w=0&k=20&c=7fZv26b4z8x7lE_7YKUerhjrtLLN1u_AQMaFNykFWPU=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Dubai</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Dubai is a city and emirate in the United Arab Emirates known for luxury shopping.</p>

                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1318298968/photo/alexandre-iii-bridge-in-paris-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=MoKxLOS65fcaoms24LFceNY_tCgj82tAKNRCPcTI1AM=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">France</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1343511623/photo/the-town-of-varenna-on-lake-como.jpg?b=1&s=170667a&w=0&k=20&c=l1v7S3WGosLAlR-fYlrHRMLACjPpqM_UZazlNZT8Mq0=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Italy</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western cuisine.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Turkey</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Turkey, officially the Republic of Turkey, is a transcontinental country located mainly on the Anatolian Peninsula.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1406825079/photo/morelia-michoacan-mexico.jpg?b=1&s=170667a&w=0&k=20&c=ptmXNKffHr6_TQFuCBGZSNtvoZbBsQvmEdv-gNH2uyk=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Mexico</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Mexico, officially the United Mexican States, is a country in the southern portion of North America.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1306075341/photo/bangkok-city-thailand.jpg?b=1&s=170667a&w=0&k=20&c=0l1Hpw1vv0v4iV6POIbn3RR-sn1JMWUgN63e-3JPDAg=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Thailand</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/590142600/photo/taj-mahal-in-sunset-light-agra-india.jpg?b=1&s=170667a&w=0&k=20&c=v4h0U7wMNF85PkGzwtstHDxthprflN43SOczJCq1CkA=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">India</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1369564704/photo/bridge-in-heidelberg.jpg?b=1&s=170667a&w=0&k=20&c=UKBn2L2vOOKznutJrbjC4uoXA9vPo_cYEzjqMRIVVNQ=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Germany</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?b=1&s=170667a&w=0&k=20&c=wOaDf_FP9nFOPg9GiigXIzqCJatw94bR74R0ZbxJe6A=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Greece</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?b=1&s=170667a&w=0&k=20&c=7fZv26b4z8x7lE_7YKUerhjrtLLN1u_AQMaFNykFWPU=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Dubai</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Dubai is a city and emirate in the United Arab Emirates known for luxury shopping.</p>

                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1318298968/photo/alexandre-iii-bridge-in-paris-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=MoKxLOS65fcaoms24LFceNY_tCgj82tAKNRCPcTI1AM=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">France</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1343511623/photo/the-town-of-varenna-on-lake-como.jpg?b=1&s=170667a&w=0&k=20&c=l1v7S3WGosLAlR-fYlrHRMLACjPpqM_UZazlNZT8Mq0=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Italy</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western cuisine.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Turkey</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Turkey, officially the Republic of Turkey, is a transcontinental country located mainly on the Anatolian Peninsula.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1406825079/photo/morelia-michoacan-mexico.jpg?b=1&s=170667a&w=0&k=20&c=ptmXNKffHr6_TQFuCBGZSNtvoZbBsQvmEdv-gNH2uyk=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Mexico</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Mexico, officially the United Mexican States, is a country in the southern portion of North America.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1306075341/photo/bangkok-city-thailand.jpg?b=1&s=170667a&w=0&k=20&c=0l1Hpw1vv0v4iV6POIbn3RR-sn1JMWUgN63e-3JPDAg=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Thailand</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/590142600/photo/taj-mahal-in-sunset-light-agra-india.jpg?b=1&s=170667a&w=0&k=20&c=v4h0U7wMNF85PkGzwtstHDxthprflN43SOczJCq1CkA=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">India</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1369564704/photo/bridge-in-heidelberg.jpg?b=1&s=170667a&w=0&k=20&c=UKBn2L2vOOKznutJrbjC4uoXA9vPo_cYEzjqMRIVVNQ=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Germany</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?b=1&s=170667a&w=0&k=20&c=wOaDf_FP9nFOPg9GiigXIzqCJatw94bR74R0ZbxJe6A=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Greece</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?b=1&s=170667a&w=0&k=20&c=7fZv26b4z8x7lE_7YKUerhjrtLLN1u_AQMaFNykFWPU=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Dubai</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Dubai is a city and emirate in the United Arab Emirates known for luxury shopping.</p>

                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1318298968/photo/alexandre-iii-bridge-in-paris-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=MoKxLOS65fcaoms24LFceNY_tCgj82tAKNRCPcTI1AM=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">France</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1343511623/photo/the-town-of-varenna-on-lake-como.jpg?b=1&s=170667a&w=0&k=20&c=l1v7S3WGosLAlR-fYlrHRMLACjPpqM_UZazlNZT8Mq0=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Italy</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western cuisine.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Turkey</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Turkey, officially the Republic of Turkey, is a transcontinental country located mainly on the Anatolian Peninsula.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="Images/ActivityAround/glacier hunt in greenland.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">XLine</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1406825079/photo/morelia-michoacan-mexico.jpg?b=1&s=170667a&w=0&k=20&c=ptmXNKffHr6_TQFuCBGZSNtvoZbBsQvmEdv-gNH2uyk=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Mexico</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Mexico, officially the United Mexican States, is a country in the southern portion of North America.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1306075341/photo/bangkok-city-thailand.jpg?b=1&s=170667a&w=0&k=20&c=0l1Hpw1vv0v4iV6POIbn3RR-sn1JMWUgN63e-3JPDAg=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Thailand</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/590142600/photo/taj-mahal-in-sunset-light-agra-india.jpg?b=1&s=170667a&w=0&k=20&c=v4h0U7wMNF85PkGzwtstHDxthprflN43SOczJCq1CkA=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">India</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1369564704/photo/bridge-in-heidelberg.jpg?b=1&s=170667a&w=0&k=20&c=UKBn2L2vOOKznutJrbjC4uoXA9vPo_cYEzjqMRIVVNQ=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Germany</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 innerPopularDestination2scrollDataOuterdiv" >
                        <div class="row g-0 innerPopularDestination2scrollDataImagetextcontainer">
                            <div class="col-md-8 innerPopularDestination2scrollDataCardimage">
                                <img src="https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.jpg?b=1&s=170667a&w=0&k=20&c=wOaDf_FP9nFOPg9GiigXIzqCJatw94bR74R0ZbxJe6A=" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 innerPopularDestination2scrollDataTextcard">
                                <div class="card-body innerPopularDestination2scrollDataCarddescmain">
                                    <h3 class="card-title innerPopularDestination2scrollDataCardtitle">Greece</h3>
                                    <p class="card-text innerPopularDestination2scrollDataCard_desc">Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="innerPopularDestination2scrollDataButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  

                </Slider>
            </div>

                 <div className='innerPopularDestination2arrowgif'>
                    <img height={"100%"} width={"100%"} src={arrowgif}/>
                 </div>
        </div>
    );
};


