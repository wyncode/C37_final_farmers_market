import React from 'react';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import { Form, Row, Col } from 'react-bootstrap';

const Help = () => {
  return (
    <div className="help">
      <Navbar />
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
  );
};

export default Help;
