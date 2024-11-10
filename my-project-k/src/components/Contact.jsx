import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f9f9f9', color: '#333' }}>
            <Container>
                {/* Title Section */}
                <Row className="text-center mb-4">
                    <Col>
                        <h1>Contact Us</h1>
                        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                    </Col>
                </Row>

                {/* Contact Form */}
                <Row>
                    <Col md={6} className="mx-auto">
                        <Form>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your message" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;