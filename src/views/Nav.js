import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
    <div className="nav">
        <ul>
            <li>
                <Link to="/AddNewClient" className="MenuItem">הוסף לקוח חדש</Link>
                <Link to="/AddNewNote" className="MenuItem">הוסף פתק חדש</Link>
                <Link to="/ClientList" className="MenuItem">רשימת לקוחות  </Link>
            </li>
        </ul>
    </div>
    )
}

export default Nav;