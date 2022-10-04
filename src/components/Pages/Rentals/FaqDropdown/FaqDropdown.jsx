import Accordion from 'react-bootstrap/Accordion';
import "./FaqDropdown.css"

export const FaqDropdown = () => {
    return (
        <>
            <div className='accordion_dropdowncontainer'>
                <h2>
                    Frequently Asked Questions
                </h2>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What do i need to hire a car?</Accordion.Header>
                        <Accordion.Body>
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
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>

    );
}

// export default AllCollapseExample;