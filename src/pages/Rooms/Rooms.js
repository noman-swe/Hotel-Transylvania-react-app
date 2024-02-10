import React from 'react';
import useRooms from '../../hooks/useRooms';
import Room from '../Room/Room';
import { Card } from 'react-bootstrap';

const Rooms = ({ children }) => {
    const [rooms] = useRooms();
    return (
        <div>
            <div className="container p-0 mt-4">
                <Card>
                    <div className="wrapper p-4">
                        <h2 className='text-center mb-4' style={{ "color": "#555D5B", "textDecoration": "underline" }}> Our Rooms</h2>
                        <div className="row">
                            {
                                rooms.map(room => <Room room={room} key={room.id}></Room>)
                            }
                        </div>
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Rooms;