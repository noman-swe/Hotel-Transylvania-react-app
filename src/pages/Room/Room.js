import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Room.css';

const Room = ({ room, children, handleBookNow }) => {
    const { name, description, img, category, rent } = room;
    return (
        <div className=' col-xs-12 col-sm-6 col-md-4 gap-4 ' >
            <CardGroup>
                <Card className='room-card my-3'>
                    <Card.Img className='card-img img-fluid' variant="top" src={img} />
                    <Card.Body>
                        {/* <Card.Title className=''>{name}</Card.Title> */}
                        <h3>{name}</h3>
                        <h6>
                            {
                                !rent ? ''
                                    :
                                    <span>
                                        Rent: ${rent}
                                        <small className='perday'> /per day</small>
                                    </span>
                            }
                        </h6>

                        <Card.Text>
                            {!category ? '' : <small>Category: {category}</small>}
                        </Card.Text>

                        <Card.Text>
                            {description && description.slice(0, 200) + ' ...see more'}
                        </Card.Text>
                    </Card.Body>
                    {children}
                    {rent && <Button onClick={() => handleBookNow(room.id)} variant="secondary">Book Now</Button>}
                </Card>
            </CardGroup>
        </div>
    );
};

export default Room;