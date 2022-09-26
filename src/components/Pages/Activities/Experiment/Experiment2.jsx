import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef, useState } from "react";
import { useEffect } from "react";
import "./Experiment2.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";

export const ActivityExperiment2 = () => {
    const [more, setmore] = useState(false);
    const [num, setnum] = useState();
    const [a, seta] = useState();

    const arr1 = [
        {
            servicename: "Mauritius",
            buttontext: "Tap for more",
            img: "https://images.unsplash.com/photo-1513415563383-4e580ed27a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdXJpdGl1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Greece",
            img: "https://c4.wallpaperflare.com/wallpaper/144/949/164/nature-photography-landscape-road-wallpaper-preview.jpg",
            buttontext: "Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Scotland",
            img: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600",
            buttontext: "Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Paris",
            img: "https://cdn.pixabay.com/photo/2019/04/11/13/59/paris-4119828__340.jpg",
            buttontext: "Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        // {
        //     servicename: "New York",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "Spain",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "America",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "Australia",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
    ]
    const toggle = (i) => {
        let b = i;
        if (b != a) {
            // console.log(i,"upper");
            // console.log(more);
            setnum(i)
            setmore(true)
        }
        if (b == a) {
            // console.log(i,"lower");
            // console.log(more);
            // // setnum(i)
            setmore(!more)
        }
        seta(i);
        // console.log(a)
        // console.log(b)
    }

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="besthotelsmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="besthotelsheadingcontainer" >
                <div className='hotelroomfilterdrop'>
                    <h5>Choose your Hotel Type</h5>
                    <select className="form-select hotelroomdrop" aria-label="Default select example" style={{ color: "#3380f2", fontWeight: "700", border: "2px solid #3380f2", width: "38%", height: "38px", marginLeft: "2%", borderRadius: "12px" }}>
                        <option className='hotelroomdropvalue' selected>select here</option>
                        <option className='hotelroomdropvalue' value="1">Luxury</option>
                        <option className='hotelroomdropvalue' value="2">Economy</option>
                        <option className='hotelroomdropvalue' value="3">Cheap</option>
                        <option className='hotelroomdropvalue' value="4">King Size Room</option>
                        <option className='hotelroomdropvalue' value="5">Honeymoon Suite</option>
                        {/* <option className='hotelroomdropvalue' value="6">Europe</option>
                        <option className='hotelroomdropvalue' value="7">Australia</option> */}
                    </select>
                </div>

                <div className='hotelcardtextheading'>
                    <h2 className='hoteltop-heading text-center'>Best Offers with Hotel Rooms</h2>
                </div>

                <div className="viewallactivityaroundbuttons" >
                    <p className="viewallactivityhotelvcardtext" style={{ width: "45" }}>view all deals</p>
                    <div className="activityaroundheadingbuttons">
                        {/* <div style={{ display: "flex" }}>

                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",

                                }}
                                className="buttons experimentbutton1"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ArrowBackIos />
                            </ButtonBase>
                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                }}
                                className="buttons"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ArrowForwardIos />
                            </ButtonBase>
                        </div> */}
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                                onClick={() => sliderRef.current.slickPrev()}
                            />
                            {/* <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    borderRadius: 7,
                                    color:"blue",
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                    border:"2px solid black",
                                }}
                                className="buttons exclusivebutton1"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ArrowBackIos />
                            </ButtonBase> */}
                            {/* <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                }}
                                className="buttons"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ArrowForwardIos />
                            </ButtonBase> */}
                            <FaAngleRight size={"2.5em"}
                                onClick={() => sliderRef.current.slickNext()}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="activityaroundslidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
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

                    <div className="_SeoLocalservicesmaindiv">
                        <div className="_SeoLocalservicesslider">
                            {
                                arr1.map((items, i) => {
                                    return (
                                        <div className=" _SeoLocalServicesnames">

                                            {/* <IconContext.Provider value={{ className: more && num == i ? "_SeoLocalicons2" : "_SeoLocalicons1" }}>
                                    {items.icons}
                                </IconContext.Provider> */}
                                            <div className="_Activitiescard">
                                                <img src={items.img} />
                                                <p className={more && num == i ? "_SeoLocalName2" : "_SeolocalNamebutton"}>{items.buttontext}</p>
                                                <div className={more && num == i ? "_SeoLocalName2" : "_SeoLocalName"}>{items.servicename}</div>
                                            </div>
                                            <div className={more && num == i ? "_SeoLocalservicedata1" : "_SeoLocalservicedata"} onClick={() => toggle(i)} >{items.data}</div>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>

                    {/* <div className=" tripcard_maindiv">
                        <div className="review">
                            <th>Excellent
                                <br />
                                <span style={{ fontSize: "10px" }}>198 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">8.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/himg/a1/bb/9f/expediav2-681434-414e81-091812.jpg?xhint=500&yhint=385" alt="" />
                        <div className="card-titleexp">Novotel Phuket City Phokeethra(SHA Extra Plus)
                            <br />
                            <span className="title_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="discount_price">
                            <span className="discount_percent">48% DISCOUNT</span>
                            <span className="Price_before_discount">&#x24;8,258</span>
                            <span className="Price_after_discount">&#x24;4,280</span>
                        </div>
                    </div>   */}

                    {/* <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card-titleexp"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>

                    <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card-titleexp"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card-titleexp"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card-titleexp"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card-titleexp"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card-titleexp"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div> */}


                </Slider>
            </div>
        </div>
    );
};

