import Button from 'react-bootstrap/Button';
import "./HolidayPageRating.css"
// import { useState } from 'react';

export const HolidayPageRating = () => {
    
    return(
        <>
            <div className="MainContainerdiv">
                <div className="row MainContainer">
                    <div className="card col-md-3" id="MainDivofCard">
                    <h3 className="HeadlineOfCard">Standard:</h3>
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src="Images/AustriaImage.jfif" alt="Card image cap" />
                            </div>
                           
                    
 
                            <div className="card-body col-md-34 DescriptionText">
                                <p className="card-text" style={{ textAlign: "left" }}>Card title</p>
                                <p className="card-text" style={{ textAlign: "left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </div>

                    </div>
                    <h3 className="Headline2OfCard">Deluxe:</h3>
                    <div className="card col-md-3" id="marginbetweendiv">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src="Images/AustriaImage.jfif" alt="Card image cap" />
                            </div>
                            <div className="card-body col-md-34 DescriptionText">
                                <p className="card-text" style={{ textAlign: "left" }}>Card title</p>
                                <p className="card-text" style={{ textAlign: "left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          </>
    )
}
    

