import React from 'react';
import "./HappyCustomer.css";

export const HappyCustomer = () => {
    return (
        <>
            <div className='rentalsHappyCustomerOuterDiv'>
                <div className='rentalsHappyCustomerInnerDiv1'>
                    <div className='happyCustomerInneDiv1ImageDiv'>
                        <img src='/Images/Rentals/MainPageImages/Comp2Image1.png' alt='image'/>
                    </div>
                    <div className='happyCustomerInnerDiv1ContentDiv'>
                        <h3> Simply Happy Customers </h3>
                    </div>
                    <div></div>
                </div>
                <div className='rentalsHappyCustomerInnerDiv2'>
                    <div className='happyCustomerInnerDiv2ImageDiv'>
                        <img src='/Images/Rentals/MainPageImages/Comp2Image3.png' alt='image'/>
                    </div>
                    <div className='happyCustomerInnerDiv2ContentDiv'>
                        <div className='innerDiv2ContentDivSubDiv1'>
                            <img src='/Images/Rentals/MainPageImages/Comp2Image2.png' alt='image'/>
                        </div>
                        <div className='innerDiv2ContentDivSubDiv2'>
                            <h3> A ride is more than just a ride. It's a gateway to opportunities and jobs. A connection to community. </h3>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
