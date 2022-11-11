import "./InnerPopularDestination2payment.css";

export const InnerPopularDestination2payment = () => {

    return (
        <>
          <div className="InclusionMainContainerDiv">
                <div className="InclusionContainerDiv1">
                    <div className="InclusionSubContainerDiv">
                        <span className="Inclusionheadline1">$1235</span>
                        <span className="Inclusionsubscript">Per person</span>
                        <span className="InclusionOfferBox">20% Off</span>
                        <span className="InclusionApplicableTaxes">4 days/3 nights</span>
                        <span className="InclusionExclusiveDeals">*Exclusing Applicable Taxes</span>
                    </div>
                    <div className="InclusionFilterContent2">
                        <div className="InclusionFilterContentItems">
                            <input type="datetime-local" placeholder='Check-Out Date' />
                        </div>
                        <div className="InclusionFilterContentItems">
                            <a href="#">Change</a>
                        </div>
                    </div>
                    <hr />
                    <div className="InclusionFilterContent3">
                        <button className="Paymentbutton">Proceed to Payment</button>
                    </div>
                </div>
                <div className="InclusionSubMainContainer2">
                    <div className="InclusionContainerDiv2">
                       
                        <div className="InclusionFilterContent4">
                        <span className="CouponHeadline1">Offers & Coupon</span>
                            <div className="InclusionFilterContentItem2">
                                <input type="text" placeholder="Have a Coupon Code?" size="30" />
                            </div>

                            <div className="InclusionFilterContentItem2">
                                <button className="ApplyButton1">Apply</button>
                            </div>
                        </div>
                    </div>
        
                    <div className="OfferDeals">
                        <div className="OfferDealsDetails">
                            <span className="OfferDealHeadline">GRANDOFFER</span>
                            <span className="OfferDealDescription">Coupon Applied Successfully</span>
                            <span className="OfferPrice"> -54,145</span>
                            <a href="#" className="CouponApplyButton">REMOVE</a>
                        </div>
                        <div className="OfferDealsDetails1">
                            <span className="OfferDealHeadline">GRANDOFFER</span>
                            <span className="OfferDealDescription1">Coupon Applied Successfully</span>
                            <span className="OfferPrice1"> -54,145</span>
                            <a href="#" className="CouponApplyButton1">Apply</a>
                        </div>
                        <div className="OfferDealsDetails1">
                            <span className="OfferDealHeadline">GRANDOFFER</span>
                            <span className="OfferDealDescription2">Coupon Applied Successfully</span>
                            <span className="OfferPrice2"> -54,145</span>
                            <a href="#" className="CouponApplyButton2">Apply</a>
                        </div>


                    </div>
                </div>
            </div>
        </>
       
    );
}

