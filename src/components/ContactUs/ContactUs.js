import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                {/* <h3 className="mt-5 pt-5">Contact Us</h3>  */}
                <Form className="form-style text-start w-75">
                    <h3 className="mb-3">Contact Us</h3> 
                    <Form.Group className="mb-3 d-flex">
                        <Form.Control type="text" className="w-50 input" placeholder="Enter first name" />
                        <Form.Control type="text" className="w-50" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="text-white" variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ContactUs;