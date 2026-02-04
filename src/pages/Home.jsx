import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'

export default function Home(){
  const features = [
    {title:'Fast Performance', body:'Optimized bundles and best practices.'},
    {title:'Responsive', body:'Designed for mobile and desktop.'},
    {title:'Reusable UI', body:'Component-driven architecture.'},
  ]

  return (
    <>
      <HeroSection />
      <section className="my-5">
        <h3 className="mb-4">Why choose this template</h3>
        <Row xs={1} md={3} className="g-4">
          {features.map((f, i) => (
            <Col key={i}>
              <CardComponent title={f.title} text={f.body} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}
