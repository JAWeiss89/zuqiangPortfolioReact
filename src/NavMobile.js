import React from 'react';
import { Link } from 'react-router-dom';


const NavMobile = ({navHidden, toggleNav}) => {
    


    return (
        <div id="navbar-mobile" className="hidden">
            <button onClick={toggleNav} id="nav-button-mobile"><i className="fas fa-film"></i></button>
            <div onClick={toggleNav} id="films-mobile" className={navHidden ? "hidden" : undefined}>
                <Link to="/hindsights"><p>Hindsights</p></Link>
                <Link to="/cyangarden"><p>The Cyan Garden</p></Link>
                <Link to="/sightleak"><p>Sight Leak</p></Link>
                <Link to="/keepintouch"><p>keep in touch</p></Link>
                <Link to="/inauguration"><p>Inauguration</p></Link>
                <Link to="/nan"><p>Nan</p></Link>
                {/* <Link to="/remember"><p>I Don't Remember The Name</p></Link> */}
                <Link to="/accordionclass"><p>Accordion Class</p></Link>
                {/* <Link to="/spanishvignettes"><p>Spanish Vignettes</p></Link>
                <Link to="/surfacevalue"><p>Surface Value</p></Link>
                <Link to="/thehouse"><p>The House</p></Link> */}
            </div>
            <div onClick={toggleNav} id="info-mobile" className={navHidden ? "hidden" : undefined}>
                
                <Link to="/info"><p style={{fontWeight: 'bold'}}>info</p></Link>
            </div>
        </div>
    )
}

export default NavMobile;