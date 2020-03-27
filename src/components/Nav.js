import React from 'react';
// import logo from '../img/Nordic2.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav>
            <ul>
                <Link to="/">
                    <li className="homeLink">Home</li>
                </Link>
                <Link to="/searchbyname" >
                    <li>Search with Name!</li>
                </Link>
                <Link to="/neverending" >
                    <li>Never Ending Jokes!</li>
                </Link>
            </ul>
        </nav>
    );
}