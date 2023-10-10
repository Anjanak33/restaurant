import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

function Footer() {
  return (
    <div>
        <Navbar className="bg-danger shadow">
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>
       <p>All Rights are Reserved Under Resto Cafe @restocafe@gmail.com</p>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer