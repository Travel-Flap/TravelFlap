import React from 'react';
import { NewStaycationTopOptionSlider } from './NewStaycationTopOptionSlider/NewStaycationTopOptionSlider';
import "./NewStaycationTopSlider.css";
import { StaycationTopCardSLider } from './StaycationTopCardSlider/StaycationTopCardSlider';
import { BsSearch } from "react-icons/bs";

export const NewStaycationTopSlider = () => {
    return (
        <>
            <div className='newStaycationTopSliderOuterDiv'>

                <div className='newStaycationTopSliderHeadingMainDiv'>
                    <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nemo alias? Nesciunt alias, deleniti,
                        placeat quos assumenda libero asperiores voluptate mollitia dolores architecto culpa facilis ut dolor similique dolorem sed.
                    </h3>

                    <div className='newStaycationHeadingInnerDiv'>

                        <div className='newStaycationOptionSliderTopSearchDiv'>
                            <div className='newStaycationsOptionSliderNameInput'>
                                <div className='newStaycationsOptionsSliderinputNameContainer'>
                                    <BsSearch size={"1.5em"} style={{ color: "black", marginLeft: "4%",fontSize:"18px",marginTop:"3%" }} /> <input type="text" placeholder='Search for Destination' />
                                </div>

                            </div>
                        </div>
                        <div className='newStaycationTopOptionsDiv'>
                            <NewStaycationTopOptionSlider />
                        </div>
                    </div>
                </div>

                {/* <div>
                    <NewStaycationTopOptionSlider/>
                </div> */}

                <StaycationTopCardSLider />
            </div>
        </>
    )
}
