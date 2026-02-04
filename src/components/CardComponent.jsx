import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardComponent({title, text}){
  return (
    <Card className="feature-card p-3 h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}
