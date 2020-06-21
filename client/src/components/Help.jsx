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
      <h2>Contact Us</h2>
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
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Footer />
      </div>
    </div>
  );
};

export default Help;
