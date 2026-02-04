import React from 'react'
import { Navbar as BNavbar, Container, Nav, Button } from 'react-bootstrap'

export default function Navbar(){
  return (
    <BNavbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <BNavbar.Brand href="#home" className="brand">Modern UI</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="primary" className="ms-3">Get Started</Button>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  )
}
