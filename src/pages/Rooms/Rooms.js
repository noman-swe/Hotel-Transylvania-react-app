import React from 'react';
import useRooms from '../../hooks/useRooms';
import Room from '../Room/Room';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Rooms = () => {
    const [rooms, setRooms] = useRooms();
    return (
        <div>
            <div className="container p-0">
                <h2 className='text-center my-4' style={{ "color": "#555D5B" }}> Our Rooms</h2>
                <div className="row ">
                    {
                        rooms.map(room => <Room room={room} key={room.id}></Room>)
                    }
                </div>
                <div className="row">
                    <div className="col-2 mx-auto">
                        <Button variant="secondary" size="lg" className='see-rooms w-100'>
                            <Link to={'/rooms'}>See Rooms</Link>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Rooms;