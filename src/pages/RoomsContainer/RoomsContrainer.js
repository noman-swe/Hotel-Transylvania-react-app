import React from 'react';
import Rooms from '../Rooms/Rooms';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Room from '../Room/Room';

import single from '../../images/rooms/Single-room1.png';
import double from '../../images/rooms/double-room-3.png';
import family from '../../images/rooms/vip-3.png';


const RoomsContrainer = () => {
    const roomsInHome = [
        { id: 'single', name: 'Single Room', img: single },
        { id: 'double', name: 'Double Room', img: double },
        { id: 'family', name: 'Family Room', img: family },
    ];
    return (
        <div>
            <Rooms>
                {
                    roomsInHome.map(room => !room ? 'All are booked' : <Room 
                    room={room} 
                    key={room.id}
                    >
                        
                    </Room>)
                }
                <div className="row">
                    <div className="col-2 mx-auto text-center">
                        <Button size="lg" className='see-rooms-btn w-100 border-0
                        '>
                            <Link to={'/rooms'}>Watch Out</Link>
                        </Button>
                    </div>
                </div>
            </Rooms>
        </div>
    );
};

export default RoomsContrainer;