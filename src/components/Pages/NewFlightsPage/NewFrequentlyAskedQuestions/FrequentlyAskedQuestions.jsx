import React from 'react';
import "./FrequentlyAskedQuestions.css"

export const FrequentlyAskedQuestions = () => {
    return (
        <>
            <div className='newflightfaqmaindiv'>
            <h2 className='newflightfaqheadings'>Frequently Asked Questions</h2>

            <div class="accordion newflightfaqaccordiondiv" id="accordionExample">
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header " id="headingOne">
                        <button class="accordion-button newflightfaqaccordiondivcontainer" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Q1.What are the advantages of online flight booking?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans. Through online air ticket booking you can easily compare prices of multiple airlines to get your air tickets at lowest rates. Also, it is easy to do online flight booking as multiple payment options are available on websites like Goibibo.
                        </div>
                    </div>
                </div>
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Q2.When should I book to get best flight ticket prices?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans.For best flight ticket prices and flight ticket offers, it is recommended to book at least 3 to 4 weeks in advance for domestic air tickets. For international flight ticket it is recommended to book at least 7 to 8 weeks in advance, so that you can get the best flight ticket prices.
                         </div>
                    </div>
                </div>
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Q3. How can I book flight tickets online?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans. With the help of Travelflap, you can easily book both domestic flight tickets and international air tickets in simple steps within a few seconds.
                        </div>
                    </div>
                </div>
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Q4. Why should I make a flight booking from Travelflap?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans. Along with an easy flight booking process, Travelflap offers various discounts, instant EMI options and credit/ debit card related offers on flight booking. By availing such benefits, you can book air tickets at reasonable prices.
                         </div>
                    </div>
                </div>
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Q5.In how much time, my flight booking will get confirmed?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans. After completing the air ticket booking process on Travelflap, you will get an instant confirmation mail and a message on the registered number and email id respectively.
                         </div>
                    </div>
                </div>
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                           Q6. What are some of the popular flight routes?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans.<b style={{color:"#3380f2"}}>Some of the popular domestic flight routes are:</b><br/>
                                            <ul>
                                                <li> Delhi to Mumbai Flights </li>
                                                <li>Delhi to Bangalore Flights</li>
                                                <li>Mumbai to Bangalore Flights</li>
                                                <li>Pune to Delhi Flights</li>
                                                <li>Delhi to Goa Flights</li>
                                            </ul>
                                        <b style={{marginLeft:"2%",color:"#3380f2"}}>Some of the popular international flight routes are:</b> <br/>
                                            <ul>
                                                <li>Delhi to Dubai Flights</li>
                                                <li>Kolkata to Bangkok Flights</li>
                                                <li>Mumbai to Hong Kong Flights</li>
                                                <li>Delhi to Bangkok Flights</li>
                                                <li>Delhi to Singapore Flights</li>
                                            </ul>    
                        </div>
                    </div>
                </div>
                <div class="accordion-item newflightfaqaccordiondivcontainer">
                    <h2 class="accordion-header" id="headingSeven">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSix">
                           Q7. Which are the popular airlines for air travel?
                        </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Ans.<b style={{color:"#3380f2"}}>Some of the popular airlines for domestic travel are:</b>
                                           <ul>
                                                <li> Indigo Airlines</li>
                                                <li>Air India Airlines</li>
                                                <li>SpiceJet Airlines</li>
                                                <li>GoAir Airlines</li>
                                                <li>AirAsia Airlines</li>
                                            </ul>
                                        <b style={{marginLeft:"2%",color:"#3380f2"}}>Some of the popular airlines for international travel are:</b> <br/>
                                            <ul>
                                                <li>Emirates Airlines</li>
                                                <li>Singapore Airlines</li>
                                                <li>Thai Airlines</li>
                                                <li>Lufthansa Airlines</li>
                                                <li>Qatar Airways</li>
                                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className='newflightquestiondiv'>
                <h1 className='newflightquestionheading'> Still have a question ?</h1>
                <p className='newflightquestiontext'>If you can't find answer to your questions in our FAQ, You can always contact to us. We will answer to you shortly!</p>
            </div>
            </div>
        </>
    )
}
