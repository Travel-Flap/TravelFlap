
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import './PopularDestinationButton.css';
import { AiFillStar } from "react-icons/ai";


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


                            </div>

                        </div>
                    </div>
                </Container>

            </React.Fragment>
 </div>
        </>




    );
}

