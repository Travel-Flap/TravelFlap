// export const CuriseInnerPagFacilities = () => {
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import "./CuriseInnerPageOptions.css";
import countrydata from '../../../../../CountryData.json';
// import { InnerCruisePageContactDiv } from '../InnerCruisePageContactDiv/InnerCruisePageContactDiv';

export const CuriseInnerPagFacilities = () => {

  const [showtab, setShowtab] = useState(1);
  const [countryid, setCountryid] = useState('');
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState('');
  const [counter, setCounter] = useState(0);

  const handletab = (e) => {
    setShowtab(e);
  }

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
  }

  const handlestate = (e) => {
    const stateid = e.target.value;
    //console.log(stateid);
    setStateid(stateid);

  }

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count - 1);
  };
  return (
    <>
      <div className='innerCruisepagemainDiv'>

        <React.Fragment>
          <Container>
            <div className="row">
              <div className="col-sm-12 bg-light innerCruiseChangemainDiv">

                <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist" className='innerCruisebuttonouterDiv'>
                  <li class="nav-item" role="presentation" className="innerCruisebuttonDiv">
                    <button className={showtab === 1 ? "innerCruiseHeadingButtons active" : "innerCruiseHeadingButtons"} onClick={() => handletab(1)}> Offer available </button>
                  </li>
                  <li class="nav-item" role="presentation" className="innerCruisebuttonDiv">
                    <button className={showtab === 2 ? "innerCruiseHeadingButtons active" : "innerCruiseHeadingButtons"} onClick={() => handletab(2)}> Amenities </button>
                  </li>

                  <li class="nav-item" role="presentation" className="innerCruisebuttonDiv">
                    <button className={showtab === 3 ? "innerCruiseHeadingButtons active" : "innerCruiseHeadingButtons"} onClick={() => handletab(3)}> Cruise highlights </button>
                  </li>
                  <li class="nav-item" role="presentation" className="innerCruisebuttonDiv">
                    <button className={showtab === 4 ? "innerCruiseHeadingButtons active" : "innerCruiseHeadingButtons"} onClick={() => handletab(4)}> Onboard experiences </button>
                  </li>
                  <li class="nav-item" role="presentation" className="innerCruisebuttonDiv">
                    <button className={showtab === 5 ? "innerCruiseHeadingButtons active" : "innerCruiseHeadingButtons"} onClick={() => handletab(5)}> Itineary </button>
                  </li>


                </ul>
                <div class="tab-content text-dark" id="pills-tabContent">

                  <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>
                    <div className='innerCruiseBookingOfferOuterDiv'>
                      <h5> Top Highlights </h5>

                      <p>
                        The Empress by Cordelia Cruises is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                        The ship was initially ordered by Admiral Cruises and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                        and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian Cruise Liner, Cordelia Cruises
                        by Waterways Tourism Pvt. Ltd. Cordelia Cruises is proud to welcome the Empress to India
                      </p>
                    </div>
                  </div>

                  <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >

                    <div className='innerCruiseBookingOfferOuterDiv'>
                      <h5> Top Highlights </h5>

                      <p>
                        The Empress by Cordelia Cruises is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                        The ship was initially ordered by Admiral Cruises and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                        and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian Cruise Liner, Cordelia Cruises
                        by Waterways Tourism Pvt. Ltd. Cordelia Cruises is proud to welcome the Empress to India
                      </p>
                    </div>

                  </div>

                  <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >

                    <div className='innerCruiseBookingOfferOuterDiv'>
                      <h5> Top Highlights </h5>

                      <p>
                        The Empress by Cordelia Cruises is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                        The ship was initially ordered by Admiral Cruises and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                        and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian Cruise Liner, Cordelia Cruises
                        by Waterways Tourism Pvt. Ltd. Cordelia Cruises is proud to welcome the Empress to India
                      </p>
                    </div>

                  </div>

                  <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>

                    <div className='innerCruiseBookingOfferOuterDiv'>
                      <h5> Top Highlights </h5>

                      <p>
                        The Empress by Cordelia Cruises is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                        The ship was initially ordered by Admiral Cruises and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                        and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian Cruise Liner, Cordelia Cruises
                        by Waterways Tourism Pvt. Ltd. Cordelia Cruises is proud to welcome the Empress to India
                      </p>
                    </div>

                  </div>

                  <div className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }}>

                    <div className='innerCruiseBookingOfferOuterDiv'>
                      <h5> Top Highlights </h5>

                      <p>
                        The Empress by Cordelia Cruises is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                        The ship was initially ordered by Admiral Cruises and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                        and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian Cruise Liner, Cordelia Cruises
                        by Waterways Tourism Pvt. Ltd. Cordelia Cruises is proud to welcome the Empress to India
                      </p>
                    </div>

                  </div>

                </div>


              </div>
            </div>
          </Container>

        </React.Fragment>

      </div>
    </>
  );
}

