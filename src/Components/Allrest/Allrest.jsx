import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Allrest.css'

// Import child component into parent component.

import Restcard from '../Restcard/Restcard';




function Allrest() {

  // To hold all reataurant details as in the for of array

  const [allRestaurant,setAllRestaurant]=useState([])

  const fetchData =async ()=>{
    const response =await axios ('http://localhost:3001/restaurants')
    console.log(response.data);
    setAllRestaurant(response.data) // array(10)
  }
    console.log(allRestaurant); // array(10)

  useEffect(()=>{
     fetchData() // Function call
  },[])
  return (
    <div className='cls'>
      <Row>
      {
         allRestaurant.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          
          <Restcard restaurant={item}/>
          </Col>
         ))
      }
      </Row>
    </div>
  )
}

export default Allrest