import React from 'react';
import Footer from './footer/Footer';
import NavbarTwo from './header/NavbarTwo';
import { Form, Row, Col } from 'react-bootstrap';
import Aboutus from './Aboutus';

const Help = () => {
  return (
    <div className="help">
      <NavbarTwo />
      <Aboutus/>
      <div className="section">
      <h4>Contact Us</h4>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control placeholder = "Comments Here" rows="3" />
      </Form.Group>
      <Footer />
      </div>
    </div>
  );
};

export default Help;
