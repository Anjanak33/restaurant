import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import { Link } from 'react-router-dom';


function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <div className='card1'>
      <Link to={`/view/${restaurant.id}`} style={{textDecoration:'none'}} >
         <Card className='card'>
      <Card.Img variant="top" src={restaurant.photograph} width={200} height={250}/>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Title style={{height:'150px'}}>
         Address: {restaurant.address}
         Neighbourhood: {restaurant.neighbourhood}
         Cuisine type: {restaurant.cuisine_type}
        </Card.Title>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Restcard