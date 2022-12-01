import React from 'react'
import './RentalsBookingPayment.css';
import { AiFillStar } from "react-icons/ai";

export const RentalsBookingPayment = () => {
    return (
        <div>
            <div className='experimentOuterDiv'>
            
                <div className='promocoode' style={{}}>
                    <div class="card paymentRentalsValueBody">
                        <div className='applyRentalsPromocode'>
                            <form>
                                <div class="form-group applyRentalsPromocodeparentdiv" >
                                    <label className='promo rentalsPromo'> Coupon & discount </label>
                                    <div class="input-group couponInputContainer">
                                        <input type="text" class="form-control couponInput" name="" placeholder="Coupon code" >
                                        </input>
                                        <button class="btn btn-primary btn-apply couponButton">Apply</button>
                                        {/* <span class="input-group-append"> */}
                                        {/* </span> */}
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="card-body paymentCarRentalsparentdiv">
                            <h3> Price Summary </h3>
                            <dl class="dlist-align rentalsPackagePrice ">
                                <dt>Package Cost:</dt>
                                <dd className="text-right ml-3 rentalsrentalsPaymentdiv" >$59.97</dd>
                            </dl>

                            <dl class="dlist-align rentalsPackagePrice">
                                <dt>GST:</dt>
                                <dd className="text-right ml-3 rentalsrentalsPaymentdiv" >$59.97</dd>
                            </dl>
                            <dl class="dlist-align rentalsPackagePrice">
                                <dt>Total Amount:</dt>
                                <dd className="text-right ml-3 rentalsrentalsPaymentdiv" >$59.97</dd>
                            </dl>
                            <dl className="dlist-align rentalsPackagePrice" >
                                <dt>TCS (5%):</dt>
                                <dd className="text-right ml-3 rentalsrentalsPaymentdiv" >$59.97</dd>
                            </dl>
                            <dl class="dlist-align rentalsPackagePrice">
                                <dt>Grand Total:</dt>
                                <dd className="text-right text-dark b ml-3 rentalsrentalsPaymentdiv">$59.97</dd>
                            </dl>

                            <a href="#" className="btn btn-out btn-primary btn-square btn-main rentalsBookNowButton" data-abc="true"> BOOK NOW </a> 
                            <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2 rentalsSendQueryButton" data-abc="true">SEND QUERY</a>
                        </div>

                        <div className='rentalsCancellationOuterDiv'>
                            <h3> Cancellation Policy </h3>
                            <p> Free cancellation before pick-up </p>
                        </div>

                    </div>
                </div>

            </div >

        </div >
    )
}

