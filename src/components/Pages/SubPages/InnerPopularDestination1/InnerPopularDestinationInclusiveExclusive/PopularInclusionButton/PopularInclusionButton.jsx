import "./PopularInclusionButton.css"
import Button from 'react-bootstrap/Button';

export const PopularInclusionButton = () =>{
    return(
        <>
        <div className="PopularInclusionButtonMainDiv">
      <Button variant="outline-secondary" size="lg" className="InclusionButton">Overview</Button>{' '}
      <Button variant="primary" size="lg" className="InclusionButton1">Accomodation</Button>{' '}
      <Button variant="outline-secondary" size="lg" className="InclusionButton2">Inclusions & Exclusion</Button>{' '}
      <Button variant="outline-secondary" size="lg" className="InclusionButton">Cancellation Policy</Button>{' '}
      </div>
    </>
  );
}
