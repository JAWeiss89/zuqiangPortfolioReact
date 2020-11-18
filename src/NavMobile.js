import React from 'react';
import { Link } from 'react-router-dom';
// import './NavMobile.css';

const NavMobile = () => {
    return (
        <div id="navbar-mobile" className="hidden">
            <button id="nav-button-mobile"><i className="fas fa-film"></i></button>
            <div id="films-mobile" className="hidden">
                <Link to="/inauguration"><p>Inauguration</p></Link>
                <Link to="/nan"><p>Nan</p></Link>
                <Link to="/remember"><p>I Don't Remember The Name</p></Link>
                <Link to="/accordionclass"><p>Accordion Class</p></Link>
                <Link to="/spanishvignettes"><p>Spanish Vignettes</p></Link>
                <Link to="/surfacevalue"><p>Surface Value</p></Link>
                <Link to="/thehouse"><p>The House</p></Link>
            </div>
            <div id="info-mobile" className="hidden">
                <Link to="/info"><p>info</p></Link>
            </div>
        </div>
    )
}

export default NavMobile;