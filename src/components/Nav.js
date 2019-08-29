import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOn, setIsOn] = useState(false);

    function toggle() {
        isOn ? setIsOn(false) : setIsOn(true);
    }

    return (
    <header>
        <Helmet>
          <html className={ isOn ? "menu-open" : null } />
        </Helmet>
        <nav 
            className={ isOn ? "navbox" : "navbox"}
            id="nav"
        >
            <button 
                onClick={toggle}
                className={ isOn ? "hamburger navbox--menu-open" : "hamburger"} 
                aria-label="Open Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>  	
            <Link className="logo" to="/">MangiarBene</Link>
            <div 
                className={ isOn ? `navbox-panel is-visible` : `navbox-panel`} 
                id="navPanel"
                onClick={toggle}
                >
                <ul className="navbar">
                    <li><Link to="/recipes">recipes</Link></li>
                    <li><Link to="/books">books</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                </ul>
            </div>
        </nav>         
    </header>

  )
}
  
export default Nav;