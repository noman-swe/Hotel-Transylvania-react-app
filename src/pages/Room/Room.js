import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Room.css';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { name, description, img } = room;
    return (
        <div className=' col-xs-12 col-sm-6 col-md-4 gap-4 ' >
            <CardGroup>
                <Card className='room-card my-3'>
                    <Card.Img className='card-img img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description && description.slice(0, 200) + ' ...see more'}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Room;