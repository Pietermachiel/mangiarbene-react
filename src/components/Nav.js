import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="navbox" id="nav">
        <button className="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>  	
        <Link className="logo" to="/">MangiarBene</Link>
        <div className="navbox-panel" id="navPanel">
            <ul className="navbar">
                <li><Link to="/recipes">recipes</Link></li>
                <li><Link to="/books">books</Link></li>
                <li><Link to="/blog">blog</Link></li>
            </ul>
        </div>
    </nav> 
  )
  
export default Nav;