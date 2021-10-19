import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
      <div className='cont' id="contact">
        <div>
        <div>
          <h1>Make an Appointment</h1>
        </div>
        <div className='contact-form'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="number" placeholder="Enter your number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className='btn btn-primary'>Submit Request</Button>
</Form>
        </div>
        </div>
        <div>
          <h2>Full contact Details</h2>
          <br />
          <br />
          <p>Street:	2623 Bruce Street</p>
        <p>City:	Saint Louis</p>
        <p>State/Province full:	New Jersey</p>
        <p>Phone Number:	908-739-3634</p>
        <p>Mobile Number:	+88017-33426627</p>
        </div>
        
      </div>
    );
};

export default Contact;