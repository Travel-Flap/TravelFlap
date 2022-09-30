import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-datepicker/dist/react-datepicker.css";
import "../../../../TopCorousel/Corousel.css";
import UAE1 from "./UAE1.jpg";
import UAE2 from "./UAE2.jpg";
import UAE3 from "./UAE3.jpg";
import UAE4 from "./UAE4.jpg";
export const VisaCarousel = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div id='main-section'>
      <div className='carousel-main' data-interval="false">
        <Carousel className='my-carousel' data-interval="false" slide={true}>

          <Carousel.Item>
            <div className='carousel_image'>
              <img width={100} height={470}
                style={{marginTop:"4%"}}
                className="d-block w-100"
                src={UAE1}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='carousel_image'>
              <img width={100} height={470}
                className="d-block w-100"
                style={{marginTop:"4%"}}
                src={UAE2}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='carousel_image'>
              <img width={100} height={470}
                style={{marginTop:"4%"}}
                className="d-block w-100"
                src={UAE3}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className='carousel_image'>
              <img width={100} height={470}
                style={{marginTop:"4%"}}
                className="d-block w-100"
                src={UAE4}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>

  );
}
