import "./HolidayPageFilter.css"

export const HolidayPageFilter = () => {
    return (
        <>
            <div className="HolidayFilterDiv">
                <div className="HolidayFilterPageMainDiv">
                    <div className="PageFilterContent1">
                        <h3>$1235<sub>Per person</sub></h3>
                        <div className="OfferBox">
                            <span>20% Off</span>
                        </div>

                        <div className="TaxesApplied">
                            <span>4 days/3 night<br /><sub>*Excluding Applicable taxes</sub></span>
                        </div>
                    </div>
                    <hr />
                    <div className="PageFilterContent2">
                        <div className="PageFilterContentItems"><span>10 July-12 July</span></div>
                        <div className="PageFilterContentItems">
                            <a href="#">Change</a>
                        </div>
                    </div>
                    <hr />
                    <div className="PageFilterContent3">
                        <button className="PaymentButton">Proceed to Payment</button>
                    </div>
                </div>
                <div className="HolidayPageSubContainer">
                    <div className="PageFilterContent4">
                        <div className="PageFilterContentItem2">
                            <input type="text" placeholder="Have a Coupon Code?" size="40" />
                        </div>

                        <div className="PageFilterContentItem2">
                            <button className="ApplyButton">Apply</button>
                        </div>
                    </div>
                    <hr />
                    <div className="PageFilterContent5">
                        <div className="PageFilterSubContent">
                            <div className="PageFilterContentItem3">
                                <span className="HeadingOfOffer">GRANDOFFER</span><br />
                                <span className="DescriptionOFHeadline">Coupon applied Successfully</span><br />
                                <span className="PriceOfOffer"> - 57,613</span>
                            </div>
                            <div className="PageFilterContentItem3">
                                <a href="#">REMOVE</a>
                            </div>
                        </div>
                        <div className="PageFilterSubContent">
                            <div className="PageFilterContentItem3">
                                <span className="HeadingOfOffer">GRANDOFFER</span><br />
                                <span className="DescriptionOFHeadline">Coupon applied Successfully</span><br />
                                <span className="PriceOfOffer"> - 57,613</span>
                            </div>
                            <div className="PageFilterContentItem3">
                                <a href="#">REMOVE</a>
                            </div>
                        </div>
                        <div className="PageFilterSubContent">
                            <div className="PageFilterContentItem3">
                                <span className="HeadingOfOffer">GRANDOFFER</span><br />
                                <span className="DescriptionOFHeadline">Coupon applied Successfully</span><br />
                                <span className="PriceOfOffer"> - 57,613</span>
                            </div>
                            <div className="PageFilterContentItem3">
                                <a href="#">REMOVE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}