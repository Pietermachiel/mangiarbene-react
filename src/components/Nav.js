import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
    const [isOn, setIsOn] = useState(false);

    const nav = ["recipes", "books", "blog"];

    function toggle() {
        isOn ? setIsOn(false) : setIsOn(true);
    }

    // console.log(props.location.pathname);

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
            <a className="logo" href="/">MangiarBene</a>
            <div 
                className={ isOn ? `navbox-panel is-visible` : `navbox-panel`} 
                id="navPanel"
                onClick={toggle}
                >
                <ul className="navbar">
                    {nav.map((nav, id) => {
                        const thenav = `/${nav}`;
                        return (
                        <li 
                            key={id}
                        >
                            <Link 
                                className={ thenav === props.location.pathname ? `nav-link active` : `nav-link` }
                                to={`/${nav}`}
                            >
                                {nav}
                            </Link>
                        </li>                            
                        )
                    })}

                    {/* <li><Link className="nav-link" to="/books">books</Link></li>
                    <li><Link className="nav-link" to="/blog">blog</Link></li> */}
                </ul>
            </div>
        </nav>         
    </header>

  )
}
  
export default withRouter(Nav);