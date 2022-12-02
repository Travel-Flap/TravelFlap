import React from 'react';
import "./NewStaycationTopSlider.css";
import { StaycationTopCardSLider } from './StaycationTopCardSlider/StaycationTopCardSlider';

export const NewStaycationTopSlider = () => {
    return (
        <>
            <div className='newStaycationTopSliderOuterDiv'>
                <StaycationTopCardSLider/>
            </div>
        </>
    )
}
