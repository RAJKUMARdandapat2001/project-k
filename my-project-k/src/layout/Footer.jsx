
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a Mobile Shop service dedicated to bringing you the best Mobile from your favorite mobile store.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: support@MobileShop.com</li>
              <li>Phone: +91 234 567 8904</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/" className="text-light">Facebook</a></li>
              <li><a href="https://x.com/" className="text-light">Twitter</a></li>
              <li><a href="https://www.instagram.com/" className="text-light">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Mobile Store. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
