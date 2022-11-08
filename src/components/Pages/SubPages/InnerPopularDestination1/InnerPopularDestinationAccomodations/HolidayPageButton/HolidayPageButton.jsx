import "./HolidayPageButton.css"
import Button from 'react-bootstrap/Button';

export const HolidayPageButton = () =>{
    return(
        <>
        <div className="HolidayPageButtonMainDiv">
      <Button variant="outline-secondary" size="lg" className="HolidayButton">Overview</Button>{' '}
      <Button variant="primary" size="lg" className="HolidayButton1">Accomodation</Button>{' '}
      <Button variant="outline-secondary" size="lg" className="HolidayButton">Inclusions & Exclusion</Button>{' '}
      <Button variant="outline-secondary" size="lg" className="HolidayButton">Cancellation Policy</Button>{' '}
      </div>
    </>
  );
}
