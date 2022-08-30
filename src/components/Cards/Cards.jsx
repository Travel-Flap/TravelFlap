import React from 'react';
// import { Card, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import './Cards.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

export const DataCards = () => {
  return (
    <>
      {/* Checking the Intent and the requirement of the documentation */}
      <div className='outercards'>
        <div className='cards-container '>
          <h2 className='top-heading text-center'>We have the best tours</h2>

          <p className='belowheadingtext text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>

          <div class="card_row row row-cols-1 row-cols-md-3 g-4 align-center">
            {/* <div className='image_cards'> */}
            <div class="col ">
              <div class="card text-white border-0">
                <img src="https://i.imgur.com/eKZd0rc.jpg" class="card-img" alt="card image" />
                <div class="card-img-overlay image-texts">
                  <div className="cards_heading">
                    <h1 class="card-title cards_heading">Mauritius</h1>
                  </div>

                  <div className='cards_content'>
                    <p className="card-text">From $1450</p>
                  </div>

                  <div className="cardsrating">
                    <IconContext.Provider value={{ className: "cardrating" }}>
                      <AiFillStar color="#ffeb8d" />
                      <AiFillStar color="#fed46b" />
                      <AiFillStar color="#fbb53d" />
                      <AiFillStar color="#fa9e1b" />
                      <AiOutlineStar color="#fa9e30" />
                    </IconContext.Provider>
                  </div>

                  <div className='cards_button'>
                    <button>SEND MESSAGE</button>
                    {/* <a href="#seemore" class="btn btn-primary ">See More ...</a> */}
                  </div>
                </div>
              </div>
              {/* <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div> */}
            </div>
            <div class="col">
              <div class="card  text-white border-0">
                <img src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="card-img" alt="card image" />
                <div class="card-img-overlay">
                  <div className="cards_heading">
                    <h1 class="card-title">Greece</h1>
                  </div>

                  <div className='cards_content'>
                    <p className="card-text">From $1450</p>
                  </div>

                  <div className="cardsrating">
                    <IconContext.Provider value={{ className: "cardrating" }}>
                      <AiFillStar color="#ffeb8d" />
                      <AiFillStar color="#fed46b" />
                      <AiFillStar color="#fbb53d" />
                      <AiFillStar color="#fa9e1b" />
                      <AiOutlineStar color="#fa9e30" />
                    </IconContext.Provider>
                  </div>

                  <div className='cards_button'>
                    <button>SEND MESSAGE</button>
                    {/* <a href="#seemore" class="btn btn-primary ">See More ...</a> */}
                  </div>

                </div>
              </div>
              {/* <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div> */}
            </div>
            <div class="col">
              <div class="card  text-white border-0">
                <img src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" class="card-img" alt="card image" />
                <div class="card-img-overlay">
                  <div className="cards_heading">
                    <h1 class="card-title">Scotland</h1>
                  </div>

                  <div className='cards_content'>
                    <p className="card-text">From $1450</p>
                  </div>

                  <div className="cardsrating">
                    <IconContext.Provider value={{ className: "cardrating" }}>
                      <AiFillStar color="#ffeb8d" />
                      <AiFillStar color="#fed46b" />
                      <AiFillStar color="#fbb53d" />
                      <AiFillStar color="#fa9e1b" />
                      <AiOutlineStar color="#fa9e30" />
                    </IconContext.Provider>
                  </div>

                  <div className='cards_button'>
                    <button>SEND MESSAGE</button>
                    {/* <a href="#seemore" class="btn btn-primary ">See More ...</a> */}
                  </div>
                </div>
              </div>
              {/* <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div> */}
            </div>
          </div>
          {/* <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
        </div>
      </div>
      {/* </div> */}
      {/* <div className="main-container">
            <div className="row">
            <div className="col-md-4">
                    <Card className=" text-white border-0">
                        <Card className=" text-white border-0">
                            <Card.Img className='card-image' src="https://i.imgur.com/eKZd0rc.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='main-title'>May 25th - June  01st</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>

                                <Button variant="primary" class="button-class" size="lg">
                                    See More ......
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className=" text-white border-0">
                        <Card className=" text-white border-0">
                            <Card.Img src="https://i.imgur.com/eKZd0rc.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>

                                <Button variant="primary" size="lg">
                                    See More ......
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className=" text-white border-0">
                        <Card className=" text-white border-0">
                            <Card.Img src="https://i.imgur.com/eKZd0rc.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>

                                <Button variant="primary" size="lg">
                                    See More ......
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </div>
            
            </div>
        </div>  */}

    </>
  );
}

// export default DataCards;