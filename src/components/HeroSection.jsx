import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default function HeroSection(){
  return (
    <section className="hero bg-transparent">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-5 mb-3">Beautiful, modern UI components</h1>
          <p className="lead mb-4">A clean starter template using React and Bootstrap — responsive, accessible, and ready for your project.</p>
          <div className="d-flex gap-2">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline-secondary" size="lg">View Docs</Button>
          </div>
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
          <div style={{maxWidth:420, marginLeft:'auto'}}>
            <img src="https://images.unsplash.com/photo-1541798506-4e5c5c6b6b6f?w=1200&q=80&auto=format&fit=crop" alt="app preview" className="img-fluid rounded-3 shadow" />
          </div>
        </Col>
      </Row>
    </section>
  )
}
