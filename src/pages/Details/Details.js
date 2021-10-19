import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data) )
    }, []);
    const { serviceId } = useParams();

    const service = services.find(serv => serv.id === +serviceId)
    console.log(service)

    return (
        <div className="details">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{ service?.service}</Card.Title>
    <Card.Text>{service?.details}</Card.Text>
    <Card.Text className="text-primary">Total Cost:{service?.cost}</Card.Text>
    <Link to="/"><Button className="btn btn-warning">Back to Home</Button></Link>
  </Card.Body>
</Card>

        </div>
    );
};

export default Details;