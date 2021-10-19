import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Serve.css'

const Serve = (props) => {
    const { id ,service ,img , details} = props.service;
    return (
        <div className="serve">
            <Card style={{ width: '20rem', height: '30rem' }}>
  <Card.Img className="card-img" variant="top" src={img} />
  <Card.Body>
        <Card.Title>{service }</Card.Title>
    <Card.Text>
      {details}
    </Card.Text>
  </Card.Body>
    <Card.Body className="d-flex justify-content-around">
  <Link to={`/details/${id}`}><Button variant="info">Details</Button></Link>
    <Button variant="warning">Book Now</Button>
    </Card.Body>
  
</Card>
            </div>
    );
};

export default Serve;