import React from 'react';
//import {Link} from 'react-router-dom';
// import landing from '/images/landing.jpg';

const Home = ({hideNav}) => {
    return (
        <section onClick={hideNav} id="content" class="landing">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            
            <p><b>News :</b></p>

            <p><a href="https://www.timesartcenter.org/exhibitions/mas-alla-el-mar-canta/" target="_blank" rel="noreferrer"><em>Más allá el mar canta,</em></a> Times Art Centre in Berlin, Germany. <br/>Curated by Pablo José Ramirez. <br/>September 15 - December 18, 2021.</p>
            
            <p><a href="https://aashra.ashkalalwan.org" target="_blank" rel="noreferrer"><em>A Slight shift of Angle,</em></a> aashra, Ashkal Alwan <br/>Programmed by Noor Abed. <br/>September 15 - October 15, 2021.</p>
            
            <p><em>Plant Time,</em> 69 Campus, Beijing, China <br/>Curated by WU Jianru and ZHANG Sirui. <br/>September 4 - December 4, 2021.</p>
            
            <p><em>Act of Memory,</em> OCAT, Shenzhen, China <br/>September 29 - November 11, 2021.</p>
            
            <p>Peng Zuqiang : <em>Hesitations,</em> ANTENNA-TENNA, Shanghai. <br/>July 31 - September 5, 2021</p>
            <img className="landing-img" src="./images/poster.jpg" alt="exhibition poster"/>
            {/* <p><Link to="/nan"><em>Nan</em></Link> received a 'Special Mention' in International Feature-length Documentary Competition at Festival Film Dokumenter, 2020</p> */}

            

        </section>
    )
}

export default Home;