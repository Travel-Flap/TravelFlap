import React from 'react';
import "./NewWhyChooseTravelFlap.css";



import Image1 from "./Group 1955.png";
import Image2 from "./Group 1956.png";
import Image3 from "./Group 1957.png";
import Image4 from "./Group 1958.png";
import Image5 from "./Group 1959.png";
import Image6 from "./Group 1960.png";
import Image7 from "./Group 1961.png";
import Image8 from "./Group 1962.png";
import Image9 from "./Group 1963.png";


export const NewWhychooseTravelflap = () => {
    return (
        <>
            <div className='whychoose_TravelFlapmaindiv'>
                <div className='whychooseheading'>
                    <h1>
                        Why Choose TravelFlap ?
                    </h1>
                </div>
                <div className='whychoose_TravelFlapdatadiv'>

                    <div className='one_TravelFlap_test'>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' 
                                src={Image1} alt='image' />
                            </div>

                            <h5>We Provide Pickup and drop at your door steps</h5>
                        </div>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image1} />
                            </div>
                            <h5>We Provide Safety and confidentiality</h5>
                        </div>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image2} />
                            </div>
                            <h5>We have 40+ year of experience</h5>
                        </div>
                    </div>

                    <div className='one_TravelFlap_test'>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image3} />
                            </div>
                            <h5>We Provide Visa Services for all Countries</h5>
                        </div>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image4} />
                            </div>
                            <h5>We Provide End-to-End Visa Assistance</h5>
                        </div>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image5} />
                            </div>
                            <h5>We have more than 150+ Branches</h5>
                        </div>
                    </div>

                    <div className='one_TravelFlap_test'>
                        <div className='whychoose_TravelFlapheadinglogos' >
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image6} />
                            </div>
                            <h5>We provide exclusive deals and offers</h5>
                        </div>

                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image7} />
                            </div>
                            <h5>We Provide global E-visa assistance</h5>
                        </div>
                        <div className='whychoose_TravelFlapheadinglogos'>
                            <div className='whyChooseTravelFlap_imagediv'>
                                <img className='whychoose_TravelFlaplogos' src={Image8} />
                            </div>
                            <h5>Time Saving and hassel free</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
