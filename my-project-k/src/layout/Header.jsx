import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const Navigate= useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    Navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
            <Container>
                <Navbar.Brand as={Link} to="/" state={{color:"red"}}>Mobile-Store.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/product">product</Nav.Link>
                    <Nav.Link as={Link} to="/aboutpage">About</Nav.Link>

     <Form inline 
     onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(e)=>setSearchTerm(e.target.value)}
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="search">Search</Button>
          </Col>
        </Row>
      </Form>
                       
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
             <a href="#loginpage">Sign In</a>
          </Navbar.Text> */}
          <Nav className='auto'>
           <Nav.Link as={Link} to="/cartpage">Cart</Nav.Link>
          <Nav.Link   as={Link} to="/contactpage">Contact</Nav.Link>
          <Nav.Link as={Link} to="/loginpage">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
