import Button from 'react-bootstrap/Button';
import "./HolidayPageRating.css"
// import { useState } from 'react';

export const HolidayPageRating = () => {
    
    return(
        <>
            <div className="MainContainerdiv">
                <div className="row MainContainer">
                    <div className="card col-md-3" id="MainDivofCard" style={{height:"260px",marginLeft:"5%",width:"70%"}}>
                    <h3 className="HeadlineOfCard">Standard:</h3>
                        <div className="card-horizontal">
                            <div className="img-square-wrapper" style={{width:"100%",height:"200px"}}>
                                <img className="" height={"100%"} width={"100%"} src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                            </div>
                           
                    
 
                            <div className="card-body col-md-34 DescriptionText">
                                <p className="card-text" style={{ textAlign: "left",fontWeight:"700"  }}>Card title</p>
                                <p className="card-text" style={{ textAlign: "left",fontWeight:"600"  }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </div>

                    </div>
                    {/* <h3 className="Headline2OfCard">Deluxe:</h3>
                    <div className="card col-md-3" id="marginbetweendiv">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                            </div>
                            <div className="card-body col-md-34 DescriptionText">
                                <p className="card-text" style={{ textAlign: "left" }}>Card title</p>
                                <p className="card-text" style={{ textAlign: "left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div> */}

                  <div className="card col-md-3" id="MainDivofCard" style={{marginLeft:"5%",width:"70%"}}>
                    <h3 className="HeadlineOfCard">Deluxe:</h3>
                        <div className="card-horizontal">
                            <div className="img-square-wrapper" style={{width:"100%",height:"200px"}}>
                                <img className="" height={"100%"} width={"100%"} src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                            </div>
                           
                    
 
                            <div className="card-body col-md-34 DescriptionText">
                                <p className="card-text" style={{ textAlign: "left",fontWeight:"700" }}>Card title</p>
                                <p className="card-text" style={{ textAlign: "left",fontWeight:"600"  }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </div>

                    </div>
                </div>
          </div>
          </>
    )
}
    

