
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
           <Link to="/accomodations" style={{textDecoration:"none",color:"#393939"}}>Accomodations</Link>
          </div>
          <div className='innerPopularDestiation1ButtonDiv'>
            <Link to="/inc&exc" style={{textDecoration:"none",color:"#393939"}}>Inclusion and Exclusion</Link>
          </div>
          <div className='innerPopularDestiation1ButtonDiv'>
           <Link to="/CancelPolicy"> Cancellation Policy </Link>
          </div>
        </div>
       
        
        </>
    ) 
}