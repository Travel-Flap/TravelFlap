import React from "react";
import "./WhyChooseUs.css";
import { MdLocalOffer, MdHome, MdOutlineDownloading, MdOutlineMessage } from 'react-icons/md';
export const WhyChooseUs = () => {
    return (
        <>
            <div className="newChoose_container">
                <div id="newChoose_containerchild1">
                    <h5>Why Choose Us?</h5>
                </div>
                <div id="newChoose_containerchild2">
                    <div id="newChoosechild_part1" className="newChoose_commonchild">
                        <div className="newChoose_icons ">
                            <div className="chooseUsIconsdiv">
                                <MdLocalOffer className="choseUsIcons" />
                            </div>

                        </div>
                        <div className="newChoose_data">
                            <h6>Search for the best hotel deals</h6>
                            <span>Compare deals from 3M+ hotels and accommodations in one place.</span>
                        </div>
                    </div>
                    <div id="chid2_part2" className="newChoose_commonchild">

                        <div className="newChoose_icons">
                            <div className="chooseUsIconsdiv">
                                <MdHome className="choseUsIcons" />
                            </div>
                        </div>

                        <div className="newChoose_data" >
                            <h6>Stasys For every need</h6>
                            <span>Choose your ideal stay from hotels, resotsm homestays, cotteges and other property types.</span>
                        </div>
                    </div>
                    <div id="chid2_part3" className="newChoose_commonchild">

                        <div className="newChoose_icons">
                            <div className="chooseUsIconsdiv">
                                <MdOutlineDownloading className="choseUsIcons"  />
                            </div>
                        </div>
                        <div className="newChoose_data">
                            <h6>Free cancellation </h6>
                            <span>With easy to use filterslike free cancelleation,enjoy flexibility while booking your stay with Travelflap.</span>
                        </div>
                    </div>
                    <div id="chid2_part4" className="newChoose_commonchild">
                        <div className="newChoose_icons">
                            <div className="chooseUsIconsdiv">
                                <MdOutlineMessage className="choseUsIcons"  />
                            </div>
                        </div>
                        <div className="newChoose_data">
                            <h6>Millions of reviews</h6>
                            <span>Check rating based on millions of real guest reviews.</span>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}
