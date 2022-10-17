import Accordion from 'react-bootstrap/Accordion';
import "./FrequentlyAsked.css";

export const RentalsFrequentlyAsked = () => {
    return (
        <div className='rentals_accordionmain_container'>
            <div className='faq_Rentalsmaincontainer'>
                <div className='accordion_Rentalsdropdownmaincontainer1'>
                    <h2 className='faq_RentalsHeading'>
                        Frequently Asked Questions
                    </h2>

                    <Accordion className='rentals_dropdowncontext'>
                        <Accordion.Item className='rentals_dropdowncontext' eventKey="0">
                            <Accordion.Header className='rentals_dropdowncontext'>What do i need to hire a car?</Accordion.Header>
                            <Accordion.Body className='rentals_dropdowncontext'>
                                To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:
                                <ul>
                                    <li className='list_tags'>
                                        The main driver's credit / debit card, with enough available funds for the car's deposit.
                                    </li>
                                    <li>
                                        Each driver's full, valid driving licence, which they've held for at least 12 months (often 24).
                                    </li>

                                    <li>
                                        Your passport and any other ID the car hire company needs to see.
                                    </li>

                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="1">
                            <Accordion.Header>How old do I have to be to rent a car?</Accordion.Header>
                            <Accordion.Body>
                                To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:

                                For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70,
                                you might have to pay an additional fee.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="2">
                            <Accordion.Header>Can I book a hire car for someone else?</Accordion.Header>
                            <Accordion.Body>

                                Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="3">
                            <Accordion.Header> How do I find the cheapest car hire deal?</Accordion.Header>
                            <Accordion.Body>

                                We work with all the major international car hire brands (and lots of smaller local companies)
                                to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car
                                hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="4">
                            <Accordion.Header>What should I look for when I'm choosing a car?
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li className='list_tags'>
                                        Space: You'll enjoy your rental far more if you choose a car with plenty of room for your passengers and luggage.
                                    </li>
                                    <li>
                                        Fuel policy: Not planning on driving much? A Like for like fuel policy can save you a lot of money.
                                    </li>

                                    <li>
                                        Location: You can't beat an 'on-airport' pick-up for convenience, but an 'off-airport' pick-up with a shuttle bus can be much cheaper.
                                    </li>

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="5">
                            <Accordion.Header> Are all fees included in the rental price?</Accordion.Header>
                            <Accordion.Body>

                                The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes,
                                airport surcharges and any road fees. You'll pay for any ‘extras' when you pick your car up, along
                                with any young driver, additional driver or one-way fees – but we'll explain any additional costs
                                before you book your car (and taking your own child seats or GPS can be an easy way to reduce your
                                costs). For more details on what's included, just check the Ts&Cs of any car you're looking at.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className='accordion_RentalsDropdownmaincontainer2'>
                    <h2 className='faq_RentalsHeading'>
                        Additional Information
                    </h2>

                    <Accordion>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="1">
                            <Accordion.Header className='rentals_dropdowncontext'>How much does it cost to hire a car in India?</Accordion.Header>
                            <Accordion.Body>
                                On average a car hire in India costs ₹ 9,464 per day.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="2">
                            <Accordion.Header>What is the most popular car hire in India?</Accordion.Header>
                            <Accordion.Body>
                                Economy (Suzuki Swift or similar) is the most frequently booked car hire type in India.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="3">
                            <Accordion.Header>What is the cheapest car hire company in India?</Accordion.Header>
                            <Accordion.Body>
                                In the past 72 hours, the cheapest car hires were found at Hertz (₹ 3,968/day), Europcar (₹ 4,669/day) and SS Travels (₹ 5,922/day).
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="4">
                            <Accordion.Header> How can I find car hires near me in India?</Accordion.Header>
                            <Accordion.Body>
                                Take a look at our extensive car hire location map to find the best car hire deals near you.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='rentals_dropdowncontext' eventKey="5">
                            <Accordion.Header> What is driving like in India?</Accordion.Header>
                            <Accordion.Body>
                                Road conditions can vary greatly, and cities are subject to immense traffic congestion.
                                It is also important to watch out for hazards, such as potholes, landslides, and animals on the road,
                                especially when straying away from the major cities. Driving is on the left in India, and there are
                                several regulations to observe in terms of turning, intersections, and traffic lights.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='rentals_dropdowncontext' eventKey="6">
                            <Accordion.Header>How old do you have to be to hire a car in India?</Accordion.Header>
                            <Accordion.Body>
                                The minimum age to rent a car in India is 18 years, with popular companies like Avis
                                sticking to this limit. Some companies, however, have a higher age limit of 21 or 23 years.
                                To rent a car in India you must present an International Driver’s Permit (IDP) and passport;
                                the driver should also have held his or her domestic license for at least 1 year.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='rentals_dropdowncontext' eventKey="7">
                            <Accordion.Header> How can I find car hires near me in India?</Accordion.Header>
                            <Accordion.Body>
                                Speed limits in India vary greatly from province to province, so it is essential to always carefully
                                observe local signposts. As a general rule, you can expect to be limited to 50 km/h (31 mph) in urban
                                areas and 80 km/h (50 mph) on both single-lane highways and national expressways.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
            <div className='accordion_Rentalsdropdownmaincontainer3'>
                <h3>StillHave a Question ?</h3>
                <p>If you are not able to find your answers to your questions in our FAQ, you can always contact us.
                    <span>We willanswer to your questions shortly!</span>
                </p>
            </div>
        </div>

    );
}

// export default AllCollapseExample;