import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <footer className='container pt-3 pb-1'>
            <div className="">
                <p className='text-center'>{year} copyright</p>
            </div>
        </footer>
    );
};

export default Footer;