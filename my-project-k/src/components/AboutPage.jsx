import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0f0f0', color: '#333' }}>
            <Container>
                {/* Title Section */}
                <Row className="text-center mb-4">
                    <Col>
                        <h1>About Us</h1>
                        <p>We are dedicated to providing the best mobile service experience for our customers.</p>
                    </Col>
                </Row>

                {/* Our Mission and Vision */}
                <Row className="mb-4">
                    <Col md={6}>
                        <h2>Our Mission</h2>
                        <p>To offer safe, reliable, and affordable mobile and laptop options for everyone.</p>
                        <img
                            src="https://t4.ftcdn.net/jpg/06/77/35/73/360_F_677357396_1vl4cairTcrXgNvOF8bh9cOmEHiPSmy0.jpg"
                            alt="Mission"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Our Vision</h2>
                        <p>To be the best mobile service provider, known for our commitment to customer satisfaction.</p>
                        <img
                            src="https://media.istockphoto.com/id/1224319940/vector/vector-flat-illustration-of-electronic-store.jpg?s=612x612&w=0&k=20&c=H1jmtrvr-0ab_XcTY2_yCb4AT88fBuJrHiB5Conn_FY="
                            alt="Vision"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>

                {/* Values Section */}
                <Row>
                    <Col>
                        <h2>Our Values</h2>
                        <ul>
                            <li>Better quality</li>
                            <li>Sustainability</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutPage;