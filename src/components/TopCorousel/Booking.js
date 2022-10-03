import React from 'react';
import "../Nav/Nav.css";
import { Container } from 'react-bootstrap';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }

    }
    onchange = e => {
        this.setState({ value: e.target.value });

     }
     
    // const [startDate, setStartDate] = useState(new Date());
    render() {
        const { value } = this.state;

        return (
            <React.Fragment>
                {/* <Container> */}
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="radioOptions">
                                <h1>Book Flight Ticket</h1>
                                <div className='selectoneway'>Oneway
                                    <input type="radio" className="mx-2" name='isyes' value="1" onChange={this.onchange} />
                                </div>
                                <div className="selectroundtrip">RoundTrip
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onChange={this.onchange} />
                                </div>
                                <div className="selectmultitrip">Multi Trip
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="3" onChange={this.onchange} />
                                </div>
                            </div>
     
                            {value === '1' && (
                                <div className='filter-travel-container'>
                                    <div className='filter-fromTo' >
                                        <div className='from-name'>
                                            <h3>From</h3>
                                            <h6><input type="search" placeholder="Enter Your Desired City" /></h6>
                                        </div>
                                        <div className='from-name2'>
                                            <h3>To</h3>
                                            <h6><input type="search" placeholder="Enter Your Desired City" /></h6>
                                        </div>
                                    </div>
                                    <div className='date-from'>
                                        <div className='selectdate'>
                                            <h3>Departure</h3>
                                            <DatePicker placeholderText='Select Your Departure Date' className='dateoneway' />   
                                        </div>
                                        {/* <div className='depart'>
                            <FaCalendarAlt />
                            <label className='fade'>Return</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Book a round trip to save more</p>
                        </div> */}
                                    </div>
                                    <div id='travel' style={{border:"1px solid"}}>
                                        <div className='depart'>
                                            <label>Travellers & Class</label>
                                            <h6>1 <span>Travellers</span></h6>
                                            <p>Economy</p>
                                        </div>
                                    </div>
                                    <div><button className='search-btn'>Search Flight</button></div>
                                </div>
                            )}

                      {value === '2' && (
                                <div className='filter-travel-container'>
                                    <div className='filter-fromTo' >
                                        <div className='from-name'>
                                            <h3>From</h3>
                                            <h6><input type="search" placeholder="Enter Your Desired City" /></h6>
                                            
                                        </div>
                                        <div className='from-name2'>
                                            <h3>To</h3>
                                            <h6><input type="search" placeholder="Enter Your Return City" /></h6>
                                           
                                        </div>
                                    </div>
                                    <div className='date-from'>
                                    <div className='selectdate '>
                                            <h3>Departure</h3>
                                            <DatePicker placeholderText='Select Your Departure Date' className='dateoneway' />   
                                        </div>
                                        <div className='selectReturndate' >
                                            <h3>Return</h3>
                                        <DatePicker placeholderText='Select Your Return Date' className='dateoneway' />
                                        </div>
                                        
                                    </div>
                                    <div id='travel' style={{border:"1px solid"}}>
                                        <div className='depart'>
                                            <label>Travellers & Class</label>
                                            <h6>1 <span>Travellers</span></h6>
                                            <p>Economy</p>
                                        </div>
                                    </div>
                                    <div><button className='search-btn'>Search Flight</button></div>
                                </div>
                            )}     


                      {value === '3' && (
                                <div className='filter-travel-container'>
                                    <div className='filter-fromTo' >
                                        <div className='from-name'>
                                            <h3>From</h3>
                                            <h6><input type="search" placeholder="Enter Your Desired City" /></h6>
                                            
                                        </div>
                                        <div className='from-name2'>
                                            <h3>To</h3>
                                            <h6><input type="search" placeholder="Enter Your Desired City" /></h6>
                                           
                                        </div>
                                    </div>
                                    <div className='date-from'>
                                        <div className='selectdate' >
                                            <h3>Departure</h3>
                                        <DatePicker placeholderText='Select Your Departure Date' className='dateoneway' />
                                            
                                        </div>
                                        <div className=' selectReturndate' >
                                            <h3>Return</h3>
                                        <DatePicker placeholderText='Select Your Return Date' className='dateoneway' />
                                            
                                        </div>
                                    </div>
                                    <div id='travel' style={{border:"1px solid"}}>
                                        <div className='depart'>
                                            <label>Travellers & Class</label>
                                            <h6>1 <span>Travellers</span></h6>
                                            <p>Economy</p>
                                        </div>
                                    </div>
                                    <div><button className='search-btn'>Search Flight</button></div>
                                </div>
                            )}

                           {value === '3' && (
                                <div className='filter-travel-container'>
                                    <div className='filter-fromTo' >
                                        <div className='from-name'>
                                            <h3>From</h3>
                                            <h6><input type="search" placeholder="Enter Your Desired City" /></h6>
                                            
                                        </div>
                                        <div className='from-name2'>
                                            <h3>To</h3>
                                            <h6><input type="search" placeholder="Enter Your Return City" /></h6>
                                           
                                        </div>
                                    </div>
                                    <div className='date-from'>
                                        <div className='selectdate' >
                                            <h3>Departure</h3>
                                        <DatePicker placeholderText='Select Your Departure Date' className='dateoneway' />
                                        </div>
                                        <div className='selectReturndate' >
                                            <h3>Return</h3>
                                        <DatePicker placeholderText='Select Your Return Date' className='dateoneway' />
                                        </div>
                                        
                                    </div>
                                    <div id='travel' style={{border:"1px solid"}}>
                                        <div className='depart'>
                                            <label>Travellers & Class</label>
                                            <h6>1 <span>Travellers</span></h6>
                                            <p>Economy</p>
                                        </div>
                                    </div>
                                    <div><button className='search-btn'>Search Flight</button></div>
                                </div>
                            )}            
                        </div>


                    </div>
                {/* </Container> */}
            </React.Fragment>
        );
    }
}
export default Booking;