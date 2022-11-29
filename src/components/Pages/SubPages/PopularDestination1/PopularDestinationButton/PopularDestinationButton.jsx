
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import './PopularDestinationButton.css';
import { AiFillStar } from "react-icons/ai";
import {FaPlane ,FaStar} from "react-icons/fa";


export const PopularDestinationButton = () => {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    return (

        <>
            
 <div className='innerpopularoutercontainer'>
            <React.Fragment>
                <Container>
                    <div className="row">
                        <div className="buttonshow">

                            <ul class="nav nav-pills mb-3  ButtonBorder" id="pills-tab" role="tablist">
                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                    <button className={showtab === 1 ? "Buttoninner1 innerpopulardestinationactive1" : "Buttoninner1"} onClick={() => handletab(1)} >Overview</button>
                                </li>
                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                    <button className={showtab === 2 ? "Buttoninner1 innerpopulardestinationactive1" : "Buttoninner1"} onClick={() => handletab(2)}>Accomodation</button>
                                </li>

                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                    <button className={showtab === 3 ? "Buttoninner1 innerpopulardestinationactive1" : "Buttoninner1"} onClick={() => handletab(3)}>Inclusion & Exclusion</button>
                                </li>

                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                    <button className={showtab === 4 ? "Buttoninner1 innerpopulardestinationactive1" : "Buttoninner1"} onClick={() => handletab(4)}>Cancellation Policy</button>
                                </li>

                            </ul>

                            <div class="tab-content text-dark" id="pills-tabContent">
                                <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} style={{textDecoration:"none"}} >

                                  <div className='innerpopulardestinationOverviewDiv'>

                                    <div className='descriptionParentDiv' >
                                        <div className='popularDescriptionInnerDiv'>
                                            <h2 className='PopularDestinationAboutspace'>
                                                About Destination
                                            </h2>
                                            <p className='PopularDestinationAboutpragraf'>
                                                A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                            </p>
                                        </div>

                                        <div className='innerpopulardestinationFilterButtons'>
                                            <ul class="nav nav-pills mb-3  innerpopularfilterButtonBorder" id="pills-tab" role="tablist" style={{backgroundColor:"#3380F2"}}>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 5 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(5)} >4 Day Plans</button>
                                                </li>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 6 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(6)}>2 Flights</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 7 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(7)}>4 Hotels</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 8 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(8)}>2 Activities</button>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className='PopularDestinationAboutimageouteriv'>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day1</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p> MORNING<br />
                                                        Arrive in Istanbul. Transfer to Hotel.</p>
                                                </div>

                                            </div>

                                            <div className='popularInnerFilterdetails'>
                                                <div className='popularInnerFilterdetailsflightlogos'>
                                                    <img src='Images/Partners Logos/Air India.png' />
                                                </div>
                                                <div className='popularInnerFilternames'>
                                                    01:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>JAI</p>
                                                </div>
                                                <div className='popularInnerFilterdetailsflightTimming'>
                                                    2Hrs  10Minutes
                                                    <br/>
                                                    <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                                </div>
                                                <div className='popularInnerFilterplaneIcon'><FaPlane/></div>
                                                <div className='popularInnerFilterdetailsflightStops'>
                                                    03:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>Delhi</p>
                                                </div> 
                                            </div>

                                            <div className='innerpopularoverviewHotelActivityDetails'>
                                                <div className='innerpopularoverviewHotelDetails'>
                                                    <h2>Hotel</h2>
                                                        <div className='innerpopularHotelFilter1'>
                                                            <h3>Ramada by Wyndham Cappadocia </h3>
                                                            <p>Ortahisar Belediyesi <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>
                                                            <p>Sun, 22 Jan 2023 - Wed, 25 Jan 2023</p>
                                                            <h6>Standart Oda</h6>
                                                            <p>Meal Plan : Breakfast</p>
                                                            <h6>Room Inclusions:</h6>
                                                            <ul>
                                                                <li><p>Breakfast buffet</p></li>
                                                                <li><p>Free self parking</p></li>
                                                                <li><p>Free WiFi</p></li>
                                                            </ul>
                                                        </div>
                                                </div>
                                                <div className='innerpopularoverviewActivityDetails'>
                                                    <h2>Activities</h2>
                                                    <div className='innerpopularoverviewActivitiesFilter1'>
                                                        <h6>Turkish Night and Belly Dance Show</h6>
                                                        <p>Cappadocia, Turkey</p>
                                                        <p>Enjoy an unforgettable night out as you take your seat for the Turkish Night Show, an immersive and entertaining show which highlights the dance traditions of various regions of Turkey.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day2</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p> FULL DAY<br />
                                                        Full Day Istanbul City Tour with Local Lunch</p>
                                                </div>
                                            </div>

                                            <div className='innerpopularoverviewActivitiesFilter1'>
                                                <h2 className='innerpopularActivityHeading'>Activities</h2>
                                                <h6>Turkish Night and Belly Dance Show</h6>
                                                <p>Cappadocia, Turkey</p>
                                                <p>Enjoy an unforgettable night out as you take your seat for the Turkish Night Show, an immersive and entertaining show which highlights the dance traditions of various regions of Turkey.</p>
                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day3</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p>MORNING TO NOON<br />
                                                        Half Day Istanbul Tour with Entrance to Bosphorus Cruise with Spice Market</p>
                                                </div>
                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day4</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p> MORNING TO NOON<br />
                                                        Transfer to Istanbul Airport for flight (on own) to Cappadocia</p>
                                                </div>
                                            </div>

                                            <div className='popularInnerFilterdetails'>
                                                <div className='popularInnerFilterdetailsflightlogos'>
                                                    <img src='Images/Partners Logos/Air India.png' />
                                                </div>
                                                <div className='popularInnerFilternames'>
                                                    01:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>JAI</p>
                                                </div>
                                                <div className='popularInnerFilterdetailsflightTimming'>
                                                    2Hrs  10Minutes
                                                    <br/>
                                                    <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                                </div>
                                                <div className='popularInnerFilterplaneIcon'><FaPlane/></div>
                                                <div className='popularInnerFilterdetailsflightStops'>
                                                    03:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>Delhi</p>
                                                </div> 
                                            </div>

                                            <div className='innerpopularoverviewHotelActivityDetails'>
                                                <div className='innerpopularoverviewHotelDetails'>
                                                    <h2>Hotel</h2>
                                                        <div className='innerpopularHotelFilter1'>
                                                            <h3>Ramada by Wyndham Cappadocia </h3>
                                                            <p>Ortahisar Belediyesi <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>
                                                            <p>Sun, 22 Jan 2023 - Wed, 25 Jan 2023</p>
                                                            <h6>Standart Oda</h6>
                                                            <p>Meal Plan : Breakfast</p>
                                                            <h6>Room Inclusions:</h6>
                                                            <ul>
                                                                <li><p>Breakfast buffet</p></li>
                                                                <li><p>Free self parking</p></li>
                                                                <li><p>Free WiFi</p></li>
                                                            </ul>
                                                        </div>
                                                </div>
                                                <div className='innerpopularoverviewActivityDetails'>
                                                    <h2>Activities</h2>
                                                    <div className='innerpopularoverviewActivitiesFilter1'>
                                                        <h6>Turkish Night and Belly Dance Show</h6>
                                                        <p>Cappadocia, Turkey</p>
                                                        <p>Enjoy an unforgettable night out as you take your seat for the Turkish Night Show, an immersive and entertaining show which highlights the dance traditions of various regions of Turkey.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div  style={{height:"550px",width:"30%"}}>
                                        <div class="card paymentValueBody">
                                            <div className='applyPromocode'>
                                                <form>
                                                    <div class="form-group applyPromocodeparentdiv" >
                                                        <label className='promo'>Apply Promocode</label>
                                                        <div class="input-group couponInputContainer">
                                                            <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                            </input>
                                                            <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                    
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body paymentparentdiv">
                                                <dl class="dlist-align ">
                                                    <dt>Package Cost:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>

                                                <dl class="dlist-align ">
                                                    <dt>GST:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Total Amount:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl className="dlist-align " >
                                                    <dt>TCS (5%):</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Grand Total:</dt>
                                                    <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                </dl>
                                                <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                            </div>

                                        </div>
                                    </div>

                                  </div>

                                </div>

                                <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade show"} style={{textDecoration:"none"}} >
                                    <div className='innerpopularDestinationAccomodationDiv'>
                                        <div className='descriptionParentDiv'>
                                            <div className='popularDescriptionInnerDiv'>
                                                <p className='PopularDestinationAboutspace'>
                                                    About Destination
                                                </p>
                                                <p className='PopularDestinationAboutpragraf'>
                                                    A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                                </p>
                                            </div>

                                            <div>
                                            <div className='Accomodationouterdiv'>
                                                <div className='stardiv'>
                                                    <h5 className='starheading'>Standard :</h5>
                                                    <div className='star'><AiFillStar />
                                                        <AiFillStar />
                                                        <AiFillStar />
                                                    </div>
                                                </div>
                                                <div className='PopularDestinationAboutimage'>

                                                    <img className='Accomodationbox'

                                                        src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                        alt=""
                                                    />

                                                    <div className='AccomodationCard'>
                                                        <p> MORNING<br />
                                                            Arrive in Istanbul. Transfer to Hotel.</p>
                                                    </div>
                                                </div>
                                            
                                            <div>
                                                </div>
                                            </div>

                                            <div className='Accomodationouterdiv'>
                                                <div className='stardiv'>
                                                    <h5 className='starheading'>Deluxe :</h5>
                                                    <div className='star'><AiFillStar />
                                                        <AiFillStar />
                                                        <AiFillStar />
                                                    </div>
                                                </div>
                                                <div className='PopularDestinationAboutimage'>

                                                    <img className='Accomodationbox'

                                                        src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                        alt=""
                                                    />

                                                    <div className='AccomodationCard'>
                                                        <p> MORNING<br />
                                                            Arrive in Istanbul. Transfer to Hotel.</p>
                                                    </div>
                                                </div>
                                            
                                            <div>
                                               

                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div  style={{height:"550px",width:"30%"}}>
                                            <div class="card paymentValueBody">
                                                <div className='applyPromocode'>
                                                    <form>
                                                        <div class="form-group applyPromocodeparentdiv" >
                                                            <label className='promo'>Apply Promocode</label>
                                                            <div class="input-group couponInputContainer">
                                                                <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                                </input>
                                                                <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                        
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-body paymentparentdiv">
                                                    <dl class="dlist-align ">
                                                        <dt>Package Cost:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>

                                                    <dl class="dlist-align ">
                                                        <dt>GST:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Total Amount:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl className="dlist-align " >
                                                        <dt>TCS (5%):</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Grand Total:</dt>
                                                        <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                    </dl>
                                                    <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} style={{textDecoration:"none"}}>
                                    <div className='innerpopulardestinationIncExc'>
                                        <div className='descriptionParentDiv' >
                                            <div className='popularDescriptionInnerDiv'>
                                                <h2 className='PopularDestinationAboutspace'>
                                                    About Destination
                                                </h2>
                                                <p className='PopularDestinationAboutpragraf'>
                                                    A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                                </p>
                                            </div>
                                            
                                            <div className='inclusionexclusiondiv'>
                                                <h4 className='inclusionexclusionheading'>Inclusion</h4>
                                                <p className='inclusionexclusiontext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis neque dicta.
                                                    Modi perspiciatis nemo minus, reprehenderit sapiente velit inventore.
                                                    Nam dolorum minima necessitatibus molestiae illo ullam beatae commodi recusandae.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis neque dicta.
                                                    Modi perspiciatis nemo minus, reprehenderit sapiente velit inventore.
                                                    Nam dolorum minima necessitatibus molestiae illo ullam beatae commodi recusandae.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis neque dicta.
                                                    Modi perspiciatis nemo minus, reprehenderit sapiente velit inventore.
                                                    Nam dolorum minima necessitatibus molestiae illo ullam beatae commodi recusandae</p>
                                            </div>

                                            <div className='exclusiondiv'>
                                                <h4 className='inclusionexclusionheading'>Exclusion</h4>
                                                <p className='inclusionexclusiontext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis neque dicta.
                                                    Modi perspiciatis nemo minus, reprehenderit sapiente velit inventore.
                                                    Nam dolorum minima necessitatibus molestiae illo ullam beatae commodi recusandae.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis neque dicta.
                                                    Modi perspiciatis nemo minus, reprehenderit sapiente velit inventore.
                                                    Nam dolorum minima necessitatibus molestiae illo ullam beatae commodi recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis neque dicta.
                                                    Modi perspiciatis nemo minus, reprehenderit sapiente velit inventore.
                                                    Nam dolorum minima necessitatibus molestiae illo ullam beatae commodi recusandae</p>
                                            </div>

                                        </div>

                                        <div  style={{height:"550px",width:"30%"}}>
                                            <div class="card paymentValueBody">
                                                <div className='applyPromocode'>
                                                    <form>
                                                        <div class="form-group applyPromocodeparentdiv" >
                                                            <label className='promo'>Apply Promocode</label>
                                                            <div class="input-group couponInputContainer">
                                                                <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                                </input>
                                                                <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                        
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-body paymentparentdiv">
                                                    <dl class="dlist-align ">
                                                        <dt>Package Cost:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>

                                                    <dl class="dlist-align ">
                                                        <dt>GST:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Total Amount:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl className="dlist-align " >
                                                        <dt>TCS (5%):</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Grand Total:</dt>
                                                        <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                    </dl>
                                                    <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"} style={{textDecoration:"none"}}>
                                   
                                    <div className='innerpopulardestinationCancel'>
                                        <div className='descriptionParentDiv' >
                                            <div className='popularDescriptionInnerDiv'>
                                                <h2 className='PopularDestinationAboutspace'>
                                                    About Destination
                                                </h2>
                                                <p className='PopularDestinationAboutpragraf'>
                                                    A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                                </p>
                                            </div>

                                            <div className='cancellationPolicydiv' >
                                            <p className='policyheading'>Cancellation Policy</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Cancellation Pollicy (per person)</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                            <table className='tablediv1'>

                                                <tr className='tablediv'>
                                                    <td className='tableborder'>Days before dearture</td>
                                                    <td className='tableborder'>Cancellation Charge</td>

                                                </tr>
                                                <tr className='tablediv'>
                                                    <td className='tableborder'>10 days </td>
                                                    <td className='tableborder'>100%</td>

                                                </tr>
                                                <tr className='tablediv'>
                                                    <td className='tableborder'>10 to 15 days </td>
                                                    <td className='tableborder'>75% + non refundable component </td>

                                                </tr>
                                                <tr className='tablediv'>
                                                    <td className='tableborder'>15 to 30 days </td>
                                                    <td className='tableborder'>30% + non refundable component </td>

                                                </tr>
                                                <tr className='tablediv'>
                                                    <td className='tableborder'>hotel / air</td>
                                                    <td className='tableborder'>100% in case of non-refundable ticket /hotel room </td>

                                                </tr>
                                                <tr>
                                                    <td className='tableborder'>cruise / visa </td>
                                                    <td className='tableborder'>On Actuals </td>

                                                </tr>
                                            </table>
                                            <p className='policyheading'> Payment Policy</p>

                                            <table className='tablediv1'>
                                                <tr className='tablediv'>
                                                    <th className='tableborder'>Payment Policy </th>
                                                    <th className='tableborder'>Online advance as per Website </th>

                                                </tr>

                                                <tr className='tablediv'>
                                                    <td className='tableborder'> Within 45 to 30 days prior to the departure of the tour </td>
                                                    <td className='tableborder'>75% of total tour cost or Non Refundable component whichever is higher</td>
                                                </tr>
                                                <tr className='tablediv'>
                                                    <td className='tableborder'>within 30 days prior to the departure of the tour </td>
                                                    <td className='tableborder'>100% of total tour cost </td>
                                                </tr>
                                            </table>

                                            <ul className='listdiv'>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li className='unorderlist' style={{ listStyleType: "square" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>


                                            </ul>




                                            </div>
                                            <div className='tremsconditiondiv'>
                                                <p className='tremsheading'>Terms & Condition </p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Molestiae, quisquam officiis exercitationem ex impedit tempore quae suscipit dignissimos.
                                                    Aperiam aliquam quisquam odit laboriosam nobis error ipsum impedit, sit sunt aliquid.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Molestiae, quisquam officiis exercitationem ex impedit tempore quae suscipit dignissimos.
                                                    Aperiam aliquam quisquam odit laboriosam nobis error ipsum impedit, sit sunt aliquid.</p>
                                            </div>
                                        </div>

                                        <div  style={{height:"550px",width:"30%"}}>
                                            <div class="card paymentValueBody">
                                                <div className='applyPromocode'>
                                                    <form>
                                                        <div class="form-group applyPromocodeparentdiv" >
                                                            <label className='promo'>Apply Promocode</label>
                                                            <div class="input-group couponInputContainer">
                                                                <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                                </input>
                                                                <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                        
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-body paymentparentdiv">
                                                    <dl class="dlist-align ">
                                                        <dt>Package Cost:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>

                                                    <dl class="dlist-align ">
                                                        <dt>GST:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Total Amount:</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl className="dlist-align " >
                                                        <dt>TCS (5%):</dt>
                                                        <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Grand Total:</dt>
                                                        <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                    </dl>
                                                    <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade show"} style={{textDecoration:"none"}} >

                                  <div className='innerpopulardestinationOverviewDiv'>

                                    <div className='descriptionParentDiv' >
                                        <div className='popularDescriptionInnerDiv'>
                                            <h2 className='PopularDestinationAboutspace'>
                                                About Destination
                                            </h2>
                                            <p className='PopularDestinationAboutpragraf'>
                                                A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                            </p>
                                        </div>

                                        <div className='innerpopulardestinationFilterButtons'>
                                            <ul class="nav nav-pills mb-3  innerpopularfilterButtonBorder" id="pills-tab" role="tablist" style={{backgroundColor:"#3380F2"}}>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 5 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(5)} >4 Day Plans</button>
                                                </li>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 6 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(6)}>2 Flights</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 7 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(7)}>4 Hotels</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 8 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(8)}>2 Activities</button>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className='PopularDestinationAboutimageouteriv'>
                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day1</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p> MORNING<br />
                                                        Arrive in Istanbul. Transfer to Hotel.</p>
                                                </div>

                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day2</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p> FULL DAY<br />
                                                        Full Day Istanbul City Tour with Local Lunch</p>
                                                </div>
                                            </div>
                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day3</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p>MORNING TO NOON<br />
                                                        Half Day Istanbul Tour with Entrance to Bosphorus Cruise with Spice Market</p>
                                                </div>
                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day4</h5>
                                                <div className='PopularDestinationAboutcard'>
                                                    <p> MORNING TO NOON<br />
                                                        Transfer to Istanbul Airport for flight (on own) to Cappadocia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div  style={{height:"550px",width:"30%"}}>
                                        <div class="card paymentValueBody">
                                            <div className='applyPromocode'>
                                                <form>
                                                    <div class="form-group applyPromocodeparentdiv" >
                                                        <label className='promo'>Apply Promocode</label>
                                                        <div class="input-group couponInputContainer">
                                                            <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                            </input>
                                                            <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                    
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body paymentparentdiv">
                                                <dl class="dlist-align ">
                                                    <dt>Package Cost:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>

                                                <dl class="dlist-align ">
                                                    <dt>GST:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Total Amount:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl className="dlist-align " >
                                                    <dt>TCS (5%):</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Grand Total:</dt>
                                                    <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                </dl>
                                                <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                            </div>

                                        </div>
                                    </div>

                                  </div>

                                </div>

                                <div className={showtab === 6 ? "tab-pane fade show active" : "tab-pane fade show"} style={{textDecoration:"none"}} >

                                  <div className='innerpopulardestinationOverviewDiv'>

                                    <div className='descriptionParentDiv' >
                                        <div className='popularDescriptionInnerDiv'>
                                            <h2 className='PopularDestinationAboutspace'>
                                                About Destination
                                            </h2>
                                            <p className='PopularDestinationAboutpragraf'>
                                                A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                            </p>
                                        </div>

                                        <div className='innerpopulardestinationFilterButtons'>
                                            <ul class="nav nav-pills mb-3  innerpopularfilterButtonBorder" id="pills-tab" role="tablist" style={{backgroundColor:"#3380F2"}}>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 5 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(5)} >4 Day Plans</button>
                                                </li>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 6 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(6)}>2 Flights</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 7 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(7)}>4 Hotels</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 8 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(8)}>2 Activities</button>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className='PopularDestinationAboutimageouteriv'>
                                            <div className='popularInnerFilterdetails'>
                                                <div className='popularInnerFilterdetailsflightDays'>
                                                Day 1
                                                </div>
                                                <div className='popularInnerFilterdetailsflightlogos'>
                                                    <img src='Images/Partners Logos/Air India.png' />
                                                </div>
                                                <div className='popularInnerFilternames'>
                                                    01:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>JAI</p>
                                                </div>
                                                <div className='popularInnerFilterdetailsflightTimming'>
                                                    2Hrs  10Minutes
                                                    <br/>
                                                    <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                                </div>
                                                <div className='popularInnerFilterplaneIcon'><FaPlane/></div>
                                                <div className='popularInnerFilterdetailsflightStops'>
                                                    03:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>Delhi</p>
                                                </div> 
                                            </div>

                                            <div className='popularInnerFilterdetails'>
                                                <div className='popularInnerFilterdetailsflightDays'>
                                                Day 4
                                                </div>
                                                <div className='popularInnerFilterdetailsflightlogos'>
                                                    <img src='Images/Partners Logos/Air India.png' />
                                                </div>
                                                <div className='popularInnerFilternames'>
                                                    01:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>JAI</p>
                                                </div>
                                                <div className='popularInnerFilterdetailsflightTimming'>
                                                    2Hrs  10Minutes
                                                    <br/>
                                                    <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                                </div>
                                                <div className='popularInnerFilterplaneIcon'><FaPlane/></div>
                                                <div className='popularInnerFilterdetailsflightStops'>
                                                    03:45AM
                                                    <br />
                                                    <p style={{ color: "gray" }}>Delhi</p>
                                                </div> 
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div  style={{height:"550px",width:"30%"}}>
                                        <div class="card paymentValueBody">
                                            <div className='applyPromocode'>
                                                <form>
                                                    <div class="form-group applyPromocodeparentdiv" >
                                                        <label className='promo'>Apply Promocode</label>
                                                        <div class="input-group couponInputContainer">
                                                            <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                            </input>
                                                            <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                    
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body paymentparentdiv">
                                                <dl class="dlist-align ">
                                                    <dt>Package Cost:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>

                                                <dl class="dlist-align ">
                                                    <dt>GST:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Total Amount:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl className="dlist-align " >
                                                    <dt>TCS (5%):</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Grand Total:</dt>
                                                    <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                </dl>
                                                <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                            </div>

                                        </div>
                                    </div>

                                  </div>

                                </div>

                                <div className={showtab === 7 ? "tab-pane fade show active" : "tab-pane fade show"} style={{textDecoration:"none"}} >

                                  <div className='innerpopulardestinationOverviewDiv'>

                                    <div className='descriptionParentDiv' >
                                        <div className='popularDescriptionInnerDiv'>
                                            <h2 className='PopularDestinationAboutspace'>
                                                About Destination
                                            </h2>
                                            <p className='PopularDestinationAboutpragraf'>
                                                A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                            </p>
                                        </div>

                                        <div className='innerpopulardestinationFilterButtons'>
                                            <ul class="nav nav-pills mb-3  innerpopularfilterButtonBorder" id="pills-tab" role="tablist" style={{backgroundColor:"#3380F2"}}>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 5 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(5)} >4 Day Plans</button>
                                                </li>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 6 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(6)}>2 Flights</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 7 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(7)}>4 Hotels</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 8 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(8)}>2 Activities</button>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className='PopularDestinationAboutimageouteriv'>
                                            <div className='innerPopularDestinationAboutimage'>
                                                <img className='innerPopularhotelImage'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt="hotel image"
                                                />
                                                <h5 className='innerpopularhotelaboutheading'>Day1</h5>

                                                <div className='innerpopularHotelFilter'>
                                                    <h3>Ramada by Wyndham Cappadocia </h3>
                                                    <p>Ortahisar Belediyesi <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>
                                                    <p>Sun, 22 Jan 2023 - Wed, 25 Jan 2023</p>
                                                    <h6>Standart Oda</h6>
                                                    <p>Meal Plan : Breakfast</p>
                                                    <h6>Room Inclusions:</h6>
                                                    <ul>
                                                        <li><p>Breakfast buffet</p></li>
                                                        <li><p>Free self parking</p></li>
                                                        <li><p>Free WiFi</p></li>
                                                    </ul>
                                                </div>

                                            </div>

                                            <div className='innerPopularDestinationAboutimage'>
                                                <img className='innerPopularhotelImage'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='innerpopularhotelaboutheading'>Day4</h5>

                                                <div className='innerpopularHotelFilter'>
                                                    <h3>Ramada by Wyndham Cappadocia </h3>
                                                    <p>Ortahisar Belediyesi <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
                                                    <p>Sun, 22 Jan 2023 - Wed, 25 Jan 2023</p>
                                                    <h6>Standart Oda</h6>
                                                    <p>Meal Plan : Breakfast</p>
                                                    <h6>Room Inclusions:</h6>
                                                    <ul>
                                                        <li><p>Breakfast buffet</p></li>
                                                        <li><p>Free self parking</p></li>
                                                        <li><p>Free WiFi</p></li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div  style={{height:"550px",width:"30%"}}>
                                        <div class="card paymentValueBody">
                                            <div className='applyPromocode'>
                                                <form>
                                                    <div class="form-group applyPromocodeparentdiv" >
                                                        <label className='promo'>Apply Promocode</label>
                                                        <div class="input-group couponInputContainer">
                                                            <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                            </input>
                                                            <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                    
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body paymentparentdiv">
                                                <dl class="dlist-align ">
                                                    <dt>Package Cost:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>

                                                <dl class="dlist-align ">
                                                    <dt>GST:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Total Amount:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl className="dlist-align " >
                                                    <dt>TCS (5%):</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Grand Total:</dt>
                                                    <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                </dl>
                                                <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                            </div>

                                        </div>
                                    </div>

                                  </div>

                                </div>

                                <div className={showtab === 8 ? "tab-pane fade show active" : "tab-pane fade show"} style={{textDecoration:"none"}} >

                                  <div className='innerpopulardestinationOverviewDiv'>

                                    <div className='descriptionParentDiv' >
                                        <div className='popularDescriptionInnerDiv'>
                                            <h2 className='PopularDestinationAboutspace'>
                                                About Destination
                                            </h2>
                                            <p className='PopularDestinationAboutpragraf'>
                                                A fascinating mix of modern and ancient, where East meets West, Turkey is one of the most incredible countries in the world. As such it has plenty of European and Asian influences from all sides. With close proximity to Africa too, it is a cultural melting pot where people of all beliefs and faiths can feel at home. Turkey is one of the most popular holiday destinations for Indian travelers, and it truly has something to offer everyone’s tastes: white sandy beaches, ruins of ancient civilizations, world-class sights, delicious food, cosmopolitan feels, and holiday spirits. Turkey is truly a country that leaves you breathless.
                                            </p>
                                        </div>

                                        <div className='innerpopulardestinationFilterButtons'>
                                            <ul class="nav nav-pills mb-3  innerpopularfilterButtonBorder" id="pills-tab" role="tablist" style={{backgroundColor:"#3380F2"}}>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 5 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(5)} >4 Day Plans</button>
                                                </li>
                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 6 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(6)}>2 Flights</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 7 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(7)}>4 Hotels</button>
                                                </li>

                                                <li class="nav-item innerpopularButtonClick" role="presentation">
                                                    <button className={showtab === 8 ? "innerpopularFilterButton1 innerpopularFilteractive1" : "innerpopularFilterButton1"} onClick={() => handletab(8)}>2 Activities</button>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className='PopularDestinationAboutimageouteriv'>
                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day1</h5>
                                                <div className='innerpopularoverviewActivitiesFilter'>
                                                    <h6>Turkish Night and Belly Dance Show</h6>
                                                    <p>Cappadocia, Turkey</p>
                                                    <p>Enjoy an unforgettable night out as you take your seat for the Turkish Night Show, an immersive and entertaining show which highlights the dance traditions of various regions of Turkey.</p>
                                                </div>

                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day2</h5>
                                                <div className='innerpopularoverviewActivitiesFilter'>
                                                    <h6>Hagia Sophia Tour with Historian Guide</h6>
                                                    <p>Istanbul, Turkey</p>
                                                    <p>Explore the History of the Hagia Sophia with a historian tour guide, and learn about the history of the Roman, Byzantine, and Ottoman Empires. Highlights Skip the lines and save 2 hours Learn from a historian guide.</p>
                                                </div>
                                            </div>

                                            <div className='PopularDestinationAboutimage'>
                                                <img className='PopularDestinationAboutbox'

                                                    src="Images/PopularDestinationImages/Populardestinationinnerimage banner.jpg"
                                                    alt=""
                                                />
                                                <h5 className='aboutheading'>Day4</h5>
                                                <div className='innerpopularoverviewActivitiesFilter'>
                                                   <h6>Quad Safari in Cappadocia</h6>
                                                   <p>Cappadocia, Turkey</p>
                                                   <p>Every day quad biking tours are run in Cappadocia. From the hotel, you will be picked up and drive to the starting point of the trip. You can get a safety briefing and details on how to handle a quad when you arrive.</p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div  style={{height:"550px",width:"30%"}}>
                                        <div class="card paymentValueBody">
                                            <div className='applyPromocode'>
                                                <form>
                                                    <div class="form-group applyPromocodeparentdiv" >
                                                        <label className='promo'>Apply Promocode</label>
                                                        <div class="input-group couponInputContainer">
                                                            <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                                            </input>
                                                            <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                                    
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="card-body paymentparentdiv">
                                                <dl class="dlist-align ">
                                                    <dt>Package Cost:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>

                                                <dl class="dlist-align ">
                                                    <dt>GST:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Total Amount:</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl className="dlist-align " >
                                                    <dt>TCS (5%):</dt>
                                                    <dd className="text-right ml-3 paymentdiv" >$59.97</dd>
                                                </dl>
                                                <dl class="dlist-align">
                                                    <dt>Grand Total:</dt>
                                                    <dd className="text-right text-dark b ml-3 paymentdiv">$59.97</dd>
                                                </dl>
                                                <a href="#" className="btn btn-out btn-primary btn-square btn-main booknowbutton" data-abc="true"> BOOK NOW</a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 sandquerybutton" data-abc="true">SEND QUERY</a>
                                            </div>

                                        </div>
                                    </div>

                                  </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </Container>

            </React.Fragment>
 </div>
        </>




    );
}

