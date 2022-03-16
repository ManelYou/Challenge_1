import React from 'react';
import './Contact.css';
import {Form, Button} from 'react-bootstrap';

const Contact = ()=>{
    return(<div>
        <h1 style={{textAlign:'center'}}>Contact</h1>
        <Form>
  <Form.Group className="form" controlId="formFullName">
    <Form.Label>Full Name:</Form.Label>
    <Form.Control placeholder="Full Name" />
  </Form.Group>

  <Form.Group className="form" controlId="formBasicEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control  type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="form" controlId="formMessage">
    <Form.Label>Message:</Form.Label>
    <Form.Control  type="Message" as="textarea" rows={4} placeholder="Message" />
  </Form.Group>

    <div className = "button" >
    <Button  variant="primary" type="submit">
        Send
    </Button>
    </div>
 
</Form>

    </div>);
}
export default Contact;
