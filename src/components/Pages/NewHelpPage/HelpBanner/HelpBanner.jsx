import React from 'react';
import "./HelpBanner.css";
import { NewHelpBannerForm } from './NewHelpBannerForm';

export const HelpBanner = () => {
    return (
        <>
            <div className='newHelpBannerOuterDiv'>
                <div class="card text-bg-dark newHelpImageDiv">
                    <img src="/Images/NewHomeLayout/Help/HelpBanner.webp" class="card-img" alt="image" />
                        <div class="card-img-overlay">

                            <NewHelpBannerForm/>
                            {/* <h5 class="card-title">Card title</h5> */}
                            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                        </div>
                </div>
            </div>
        </>
    )
}
