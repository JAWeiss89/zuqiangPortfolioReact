import React from 'react';
import { Link } from 'react-router-dom';
// import './Nav.css';

const Nav = () => {
    return (
        <header>
            <div className="navbar">
                < Link to="/">
                    <div id="my-name">
                    <h1>Peng Zuqiang</h1>
                    <h1 id="chinese">彭祖强</h1>
                </div>
                </Link>
                <div id="films">
                    <Link to="/inauguration"><p>Inauguration</p></Link>
                    <Link to="/nan"><p>Nan</p></Link>
                    <Link to="/remember"><p>I Don't Remember The Name</p></Link>
                    <Link to="/accordionclass"><p>Accordion Class</p></Link>
                    <Link to="/spanishvignettes"><p>Spanish Vignettes</p></Link>
                    <Link to="/surfacevalue"><p>Surface Value</p></Link>
                    <Link to="/thehouse"><p>The House</p></Link>
                </div>
                <div id="info">
                    <Link to="/info"><p>info</p></Link>
                </div>
            </div>
        </header>
    )
}

export default Nav;