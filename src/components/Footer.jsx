import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer(){
  return (
    <footer className="site-footer mt-auto">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="text-white">Modern UI</h5>
            <p className="text-muted">A clean React + Bootstrap starter for modern landing pages.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <small className="text-muted">© {new Date().getFullYear()} Modern UI. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
