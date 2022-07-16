import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {id, name, image, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={image} />
                <Card.Body className='style'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <h4> Bdt {price}</h4>
                    </Card.Text>
                    <Button onClick={() => navigateToServiceDetail(id)} variant="light">Book: {name}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;