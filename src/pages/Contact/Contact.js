import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container px-0 mb-4'>
            <Card className='mt-4 py-4'>
                <div className="row">
                    <div className="col-md-8 mx-auto contact-header">
                        <h2 className="text-center py-4">Contact Us</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Label>Message</Form.Label>
                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicMessage">

                                <textarea name="" id="" cols="110" rows="8"></textarea>

                            </Form.Group>

                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Contact;