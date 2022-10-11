import Accordion from 'react-bootstrap/Accordion';
import "./NewFooterLinkDrop.css";

export const NewFooterLinkDrop = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item className='statedop1' eventKey="0">
        <Accordion.Header className='statedrop1header'>Why choosing TravelFlap.com</Accordion.Header>
        <Accordion.Body className='statedroptexts'>
          Our competitive rates and exclusive offers are what gives us a top notch over our competitors. We promise 'Unbeatable' services both in pricing and quality. For instance: Every Wednesday, travelers can save big with our ZERO Convenience fee on flight bookings.

          Also, we get it - travel’s a big decision. It’s not every day that you fly across the world to wander the souks of Dubai or enjoy a dreamy sunrise in Paris. But for us, it’s been our every day job for the past four decades. Let’s just say we know what travelers really want. We give you the pros and cons for all the different travel products and allow you to decide what works best for you and your family. While many travel companies claim to have experts, we believe few, match our own specialists for genuine- firsthand knowledge. We combine first-hand knowledge with exceptional special offers, and we take care of every detail to create a holiday as unique as you are. You will no more need to worry about coordinating flight bookings, hotel reservations, visa stamps or tours as all your needs are taken care of under one roof; the Akbar Travels roof. More than 85% of clients come back to us for future trips.

          When you choose TravelFlap, your trip is in safe hands. Whilst you are abroad our team is available 24 hours a day, 365 days a year should you need assistance. We do absolutely everything for you, all you need to do is turn up at the airport with your bags and go!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Company Information</Accordion.Header>
        <Accordion.Body>
          Company Information
          TravelFlap.com is a leading global online travel portal providing a diverse range of world-class, hassle-free travel services online. Our services include domestic and international flight booking, tailor-made and inclusive holidays, hotel reservations, visa services, cruises, car rentals, train tickets, worldwide attraction tickets, sightseeings, foreign exchange, travel insurance and much more. Our online platform allows users to search and book discounted flight tickets, holiday packages, visas and other services online from the comfort of their homes, office or smartphone effortlessly. With offices in India, UK, US, Middle East, Europe and Malaysia, we have more than 150 branches worldwide that extends the company’s reach to almost all major travel destinations of the world.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

// export default BasicExample;