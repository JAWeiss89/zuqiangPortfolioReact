import React from 'react';
//import {Link} from 'react-router-dom';
// import landing from '/images/landing.jpg';

const Home = ({hideNav}) => {
    return (
        <section onClick={hideNav} id="content" className="landing">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            
            <p><b>News :</b></p>

            {/* <p style={{margin:'0px', fontSize:'14px'}}><a href="https://timesmuseum.org/en/program/one-song" target="_blank" rel="noreferrer"><em>One song is very much like another, and the boat is always from afar</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Guangdong Times Museum, Guangzhou </p>
            <p style={{margin:'0px', fontSize:'12px'}}>December 4, 2021 - January 30, 2022</p>
            <img className="landing-img" src="./images/one_song.png" alt="Exhibit Flyer"/> */}

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.cellprojects.org/exhibitions/peng-zuqiang" target="_blank" rel="noreferrer"><em>Sideways Looking</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Cell Project Space, London, UK </p>
            <p style={{margin:'0px', fontSize:'12px'}}>April 13, 2022 - June 19, 2022</p>
            <img className="landing-img" src="./images/sideways_looking.jpg" alt="exhibition poster"/>
            <p></p>

            
            <p style={{margin:'0px', fontSize:'14px'}}><a href="http://www.macallineart.org/en/exhibitions/1076/the-elephant-escaped" target="_blank" rel="noreferrer"><em>The Elephant Escaped</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Macalline Art Center, Beijing </p>
            <p style={{margin:'0px', fontSize:'12px'}}>January 15, 2022 - April 16, 2022</p>
            <img className="landing-img" src="./images/elephant_mac.jpg" alt="exhibition poster"/>
            <p></p>

            {/* <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.timesartcenter.org/events/online-screening-richard-fung-peng-zuqiang/" target="_blank" rel="noreferrer"><em>Online Screening: Transatlantic Labor, Collective Memory, and Nomadism</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Featuring video works by Richard Fung and Peng Zuqiang 彭祖强</p>
            <p style={{margin:'0px', fontSize:'12px'}}>Dec 18, 2021 – Dec 23, 2021</p> */}
            {/* <p style={{fontSize:'10px'}}>The work included in the screening, 'keep in touch', is funded in part by the City of Houston through Houston Arts Alliance”.</p>
            <img style={{height:'75px'}} src="./images/coh.png" alt="City of Houston Texas Seal"/> */}
            


            {/* <p><a href="https://www.timesartcenter.org/exhibitions/mas-alla-el-mar-canta/" target="_blank" rel="noreferrer"><em>Más allá el mar canta,</em></a> Times Art Centre in Berlin, Germany. <br/>Curated by Pablo José Ramirez. <br/>September 15 - December 18, 2021.</p>
            
            <p><a href="https://aashra.ashkalalwan.org" target="_blank" rel="noreferrer"><em>A Slight shift of Angle,</em></a> aashra, Ashkal Alwan <br/>Programmed by Noor Abed. <br/>September 15 - October 15, 2021.</p>
            
            <p><em>Plant Time,</em> 69 Campus, Beijing, China <br/>Curated by WU Jianru and ZHANG Sirui. <br/>September 4 - December 4, 2021.</p>
            
            <p><em>Act of Memory,</em> OCAT, Shenzhen, China <br/>September 29 - November 11, 2021.</p>
            
            <p>Peng Zuqiang : <em>Hesitations,</em> ANTENNA-TENNA, Shanghai. <br/>July 31 - September 5, 2021</p>
            <img className="landing-img" src="./images/poster.jpg" alt="exhibition poster"/> */}
            {/* <p><Link to="/nan"><em>Nan</em></Link> received a 'Special Mention' in International Feature-length Documentary Competition at Festival Film Dokumenter, 2020</p> */}

            

        </section>
    )
}

export default Home;
