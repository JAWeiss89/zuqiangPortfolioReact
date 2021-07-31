import React from 'react';
//import {Link} from 'react-router-dom';
// import landing from '/images/landing.jpg';

const Home = ({hideNav}) => {
    return (
        <section onClick={hideNav} id="content">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            
            <p><b>News :</b></p>
            <p>Peng Zuqiang : <em>Hesitations,</em> ANTENNA-TENNA, Shanghai. <br/>July 31 - September 5, 2021</p>
            <img className="landing-img" src="./images/poster.jpg" alt="exhibition poster"/>
            <p><em>Más allá el mar canta,</em> Times Art Centre in Berlin, Germany. <br/>Curated by Pablo José Ramirez. <br/>September 15 - December 18, 2021.</p>
            
            {/* <p><Link to="/nan"><em>Nan</em></Link> received a 'Special Mention' in International Feature-length Documentary Competition at Festival Film Dokumenter, 2020</p> */}

            

        </section>
    )
}

export default Home;