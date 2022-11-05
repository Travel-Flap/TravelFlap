import React from 'react';
import "./InnerHandpicked2Banner.css";
// import ReactDOM from 'react-dom'
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   import { faight } from '@fortawesome/free-solid-svg-icons';

export const InnerHandpicked2Banner = ()=> {
    return(
        <>
        <div className='InnerHandpicked1BannerMainContainer'>
            <div className="InnerHandpicked1BannerBg">
                <img className="InnerHandpicked1BannerImageClass1" src="Images/SubPagesBackgroundImages/Innerhandpicked2banner.webp"/>
            <div className="InnerHandpicked1BannerFirstPageDescription">
                <span className='InnerHandpicked1BannerHeading' style={{textAlign:"left"}}> Best Restaurants and 
                Food places in Bali</span>
                <span className="InnerHandpicked1BannerModificationOfPara" style={{textAlign:"left"}}>An exotic tropical destination that flaunts scenic beaches and mountains,<br/>
                    Bali is deep-rooted in culture and tradition,which adds to the charm of<br></br>
                    this scenic island.
                </span>
                <div className="InnerHandpicked1BannerHeadingSliderInfo">
                <h3 className='InnerHandpicked1BannerSubHeading'>The Most Famous Tour Spots In BALI</h3>
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
                </div>
               
            </div>
            </div>
            </div>
        </>
    )
}
