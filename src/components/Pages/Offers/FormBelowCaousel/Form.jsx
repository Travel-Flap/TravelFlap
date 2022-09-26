
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./Form.css";

export const MiddleForm = () => {
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
    <Form className='main-form text-info middleForm' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="inputrow mt-4 justify-content-center align-items-end belowrow">
        <Form.Group className='text-info ' as={Col} md="4" controlId="validationCustom01">
          <Form.Label>DESTINATION</Form.Label>
          <Form.Control xs={4}
            required
            type="text"
            placeholder="Enter Destination"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This is for the Check in form contro; */}
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>CHECK IN</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="YYYY-MM-DD"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This is for the check out Form Control */}
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>CHECK OUT</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="YYYY-MM-DD"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This Form Group is for the Selecting Adult Values */}
        <Form.Group as={Col} md="1" xs={3} controlId="validationCustom04">
          <Form.Label>ADULTS</Form.Label>
          {/* <Form.Control type="text" placeholder="State" required /> */}
          <Form.Select defaultValue="">
            <option>1</option>
            <option>2</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This form group is for Selecting the Children Values */}
        <Form.Group as={Col} md="1" xs={3} controlId="validationCustom04">
          <Form.Label>
            CHILDREN</Form.Label>
          {/* <Form.Control type="text" placeholder="State" required /> */}
          <Form.Select defaultValue="0">
            <option>02</option>
            <option>03</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This Form Froup is for the button of the form group */}
        <Form.Group className='text-center button-info' as={Col} md="1" controlId="validationCustom02">
          {/* <Button type="submit">Search</Button> */}
          <button className='belowformButton'>SEARCH</button>
        </Form.Group>
      </Row>

      {/* 2nd row for the check boxes */}
      <Row className="checkbox_main mt-2">
        <div className='checkboxes_div'>
          <div className="checkbox1 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" for="inlineCheckbox1">Pet Friendly</label>
          </div>
          <div className="checkbox2 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" for="inlineCheckbox2">Car Parking</label>
          </div>

          <div className="checkbox3 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="form-check-label" for="inlineCheckbox3">Wifi</label>
          </div>
          <div className="checkbox4 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
            <label className="form-check-label" for="inlineCheckbox4">Reservations</label>
          </div>
          <div className="checkbox5 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
            <label className="form-check-label" for="inlineCheckbox5">private Parking</label>
          </div>


          <div className="checkbox6 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6" />
            <label className="form-check-label" for="inlineCheckbox6">Smoking Area</label>
          </div>
          <div className="checkbox7 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7" />
            <label className="form-check-label" for="inlineCheckbox7">private Parking</label>
          </div>
          <div className="checkbox8 form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8" />
            <label className="form-check-label" for="inlineCheckbox8">private Parking</label>
          </div>
        </div>
      </Row>

      <Row className='offersbutton_div mt-2'>
        <div className='offersform_button'>
          <button>SEARCH ...</button>
        </div>
      </Row>
    </Form>
  );
}

// render(<FormExample />);