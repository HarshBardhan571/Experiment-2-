import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="app-root d-flex flex-column min-vh-100">
      <Navbar />
      <Container as="main" className="flex-grow-1 my-5">
        <Home />
      </Container>
      <Footer />
    </div>
  )
}
