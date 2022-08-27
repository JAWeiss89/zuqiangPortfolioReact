import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './Nav.css';

const Nav = ({hideNav}) => {
    return (
        <header>
            <div onClick={hideNav} className="navbar">
                < Link to="/">
                    <div id="my-name">
                    <h1>Peng Zuqiang</h1>
                    <h1 id="chinese">彭祖强</h1>
                </div>
                </Link>
                <div id="films">
                    <NavLink to="/hindsights"><p>Hindsights</p></NavLink>
                    <NavLink to="/cyangarden"><p>The Cyan Garden</p></NavLink>
                    <NavLink to="/sightleak"><p>Sight Leak</p></NavLink>
                    <NavLink to="/keepintouch"><p>keep in touch</p></NavLink>
                    <NavLink to="/inauguration"><p>Inauguration</p></NavLink>
                    <NavLink to="/nan"><p>Nan</p></NavLink>
                    {/* <NavLink to="/remember"><p>I Don't Remember The Name</p></NavLink> */}
                    <NavLink to="/accordionclass"><p>Accordion Class</p></NavLink>
                    {/* <NavLink to="/spanishvignettes"><p>Spanish Vignettes</p></NavLink>
                    <NavLink to="/surfacevalue"><p>Surface Value</p></NavLink>
                    <NavLink to="/thehouse"><p>The House</p></NavLink> */}
                </div>
                <div id="info">
                    <p>-</p>
                    
                    <NavLink to="/info"><p style={{fontWeight:'bold'}}>info</p></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Nav;