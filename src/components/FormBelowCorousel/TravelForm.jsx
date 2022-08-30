
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./TravelForm.css";

export const TravelForm = () => {
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
    <Form className='main-form text-info trevForm' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mt-4 justify-content-center align-items-end trevrow">
        <Form.Group className='text-info '  as={Col} md="2" controlId="validationCustom01">
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
            Please provide a valid state.
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
            Please provide a valid state.
          </Form.Control.Feedback>
          
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This Form Group is for the Selecting Adult Values */}
        <Form.Group as={Col} md="2" xs={3} controlId="validationCustom04">
          <Form.Label>ADULTS</Form.Label>
          {/* <Form.Control type="text" placeholder="State" required /> */}
          <Form.Select defaultValue="">
            <option>1</option>
            <option>2</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This form group is for Selecting the Children Values */}
        <Form.Group as={Col} md="2" xs={3} controlId="validationCustom04">
          <Form.Label>
            CHILDREN</Form.Label>
          {/* <Form.Control type="text" placeholder="State" required /> */}
          <Form.Select defaultValue="0">
            <option>02</option>
            <option>03</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This Form Froup is for the button of the form group */}
        <Form.Group className='text-center button-info' as={Col} md="1" controlId="validationCustom02">
          {/* <Button type="submit">Search</Button> */}
          <button className='trevButton'>SEARCH</button>
        </Form.Group>
      </Row>
    </Form>
  );
}

// render(<FormExample />);