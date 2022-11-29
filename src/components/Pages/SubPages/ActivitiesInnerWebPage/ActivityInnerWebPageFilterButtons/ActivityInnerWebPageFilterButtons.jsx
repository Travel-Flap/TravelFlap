import "./ActivityInnerWebPageFilterButtons.css";

export const ActivityInnerWebPageFilterButtons = () => {

    return (

            <>
               <div className="activityInnerWebPageFilterButtonsContainerDiv">
                  <h4>Refine Search</h4>
                  <div className='activityInnerWebPageFilterSelectors'>
                            <div class="btn-group activityInnerWebPageFilterMainDiv" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                                <label class="btn btn-outline-primary activityInnerWebPageFilter1" for="btnradio1">Sort By</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                <label class="btn btn-outline-primary activityInnerWebPageFilter2" for="btnradio2"> Price Low to High </label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                <label class="btn btn-outline-primary activityInnerWebPageFilter3" for="btnradio3"> Price High to Low </label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                <label class="btn btn-outline-primary activityInnerWebPageFilter4" for="btnradio4"> Name  A to Z </label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                <label class="btn btn-outline-primary activityInnerWebPageFilter5" for="btnradio4"> Name Z to A </label>
                            </div>
                        </div>
                </div>
            </>
    );
}

