import React from 'react';
import "./CruiseFilterButtons.css";

export const CruiseFilterButtons = () => {
    return (
        <>
            <div className="cruiseDetailsInnerWebPageFilterButtonsContainerDiv">

                <h4> Refine Search </h4>
                
                <div className='cruiseDetailsInnerWebPageFilterSelectors'>
                    <div class="btn-group cruiseDetailsInnerWebPageFilterMainDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary cruiseDetailsInnerWebPageFilter1" for="btnradio1">Sort By</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary cruiseDetailsInnerWebPageFilter2" for="btnradio2"> Price Low to High </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary cruiseDetailsInnerWebPageFilter3" for="btnradio3"> Price High to Low </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary cruiseDetailsInnerWebPageFilter4" for="btnradio4"> Name  A to Z </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                        <label class="btn btn-outline-primary cruiseDetailsInnerWebPageFilter5" for="btnradio5"> Name Z to A </label>
                    </div>
                </div>
            </div>
        </>
    )
}
