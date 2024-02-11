import React from 'react';
import { Card } from 'react-bootstrap';

const Rooms = ({ children }) => {
    return (
        <div>
            <div className="container p-0 mt-4">
                <Card>
                    <div className="wrapper p-4">
                        <h2 className='text-center mb-4' style={{ "color": "#555D5B", "textDecoration": "underline" }}> Our Rooms</h2>
                        <div className="row">

                            {children}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Rooms;