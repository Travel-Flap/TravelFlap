
import './InnerPopularDestinationButton.css';
import {Link} from "react-router-dom";

export const InnerPopularDestinationButton =() =>{
    return(
        <>
        <div className="innerPopularDestiation1ButtonLinks">
          <div className='innerPopularDestiation1ButtonDiv'>
            Overview
          </div>
          <div className='innerPopularDestiation1ButtonDiv'>
           <Link to="/accomodations">Accomodations</Link>
          </div>
          <div className='innerPopularDestiation1ButtonDiv'>
            Inclusion and Exclusion
          </div>
          <div className='innerPopularDestiation1ButtonDiv'>
            Cancellation Policy
          </div>
        </div>
       
        
        </>
    ) 
}