import React from 'react';
import './footer.css';
import logo from './logo.png';

const Footer = () => {
    return(
        <div className="bottom">
            <img src={logo} className="logo" alt=""/>
            <p> all rights reserved 2019</p>
        </div>
    )
}


export default Footer;