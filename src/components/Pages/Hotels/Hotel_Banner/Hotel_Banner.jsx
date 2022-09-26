import("../Hotel_Banner/Hotel_Banner.css")
export const Hotel_Banner = () => {


    return (
        <>
            <div className="container_banner">
                <div className="banner_title">
                    <p>Find Your Place To Stay</p>
                </div>
                <div className="banner_input">
                    <div className="want_stay">
                        <div>Where do you want to Stay?</div>
                        <div>Check-in</div>
                        <div>Check-out</div>
                        <div>Guest and Roome</div>
                    </div>
                    <div className="hotel_search_destination">
                        <div>
                            <input type="text" placeholder="Enter Hotel Name " className="hotelnametext" />
                        </div>
                        <div><input type="date" /></div>
                        <div>
                            <input type="date" />
                        </div>
                        <div>
                            <select name="" className="adult_select">
                                <option value="">1 adult 1 room</option>
                                <option value="">2 adult 2 room</option>
                                <option value="">5 adult 3 room</option>
                                <option value="">2 adult no room</option>
                            </select>
                        </div>
                    </div>
                    <div className="popularfilter">
                        <div className="checkfilter">
                            <div>
                                <span>
                                    Popular Filter:
                                </span>
                            </div>
                            <div >
                            <input type="checkbox" />
                                <span>Free Cancellition</span>
                            </div>
                            <div>
                            <input type="checkbox" />
                                <span>4 stars</span>
                            </div>
                            <div>
                            <input type="checkbox" />
                                <span>3 starts</span>
                            </div>
                        </div>
                        <div>
                            <input type="button" className="search_hotel_button" value="Search hotels"/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}