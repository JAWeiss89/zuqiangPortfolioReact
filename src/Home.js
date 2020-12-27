import React from 'react';
import {Link} from 'react-router-dom';
// import landing from '/images/landing.jpg';

const Home = ({hideNav}) => {
    return (
        <section onClick={hideNav} id="content">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            {/* <img className="main-img" src="./images/landing.jpg" alt="landing"/> */}
            <p><b>News :</b></p>
            <p>Awarded 'Jury Speical Prize' at Huayu Youth Award 2020</p>

            <p><Link to="/nan"><em>Nan</em></Link> received a 'Special Mention' in International Feature-length Documentary Competition at Festival Film Dokumenter, 2020</p>

            <p>“The Final Prophet” - Shenzhen Bat STArts Festival, China, Dec.26, 2020 - Jan. 26, 2021</p>

        </section>
    )
}

export default Home;