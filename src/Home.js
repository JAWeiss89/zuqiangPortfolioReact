import React from 'react';
//import {Link} from 'react-router-dom';
// import landing from '/images/landing.jpg';

const Home = ({hideNav}) => {
    return (
        <section onClick={hideNav} id="content" className="landing">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            
            <p><b>News :</b></p>

    
            {/* <p style={{margin:'0px', fontSize:'14px'}}><a href="https://site.videobrasil.org.br/en/bienal/22" target="_blank" rel="noreferrer"><em>‘Memory is an Editing Station’, 22nd videobrasil</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>São Paulo, BR</p>
            <p style={{margin:'0px', fontSize:'12px'}}>Upcoming</p>
            <p></p>


            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.automatala.org/threshold-to-threshold-peng-zuqiang-kohei-sengen" target="_blank" rel="noreferrer"><em>Passwords</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Automata, Los Angeles, US </p>
            <p style={{margin:'0px', fontSize:'12px'}}>March 26,2023</p>
            <p></p> */}

    
            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.artbasel.com/basel/basel/parcours-overview?lang=en" target="_blank" rel="noreferrer"><em>Parcours</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}> Art Basel, Basel</p>
            <p style={{margin:'0px', fontSize:'12px'}}>Jun 10 - 16, 2024 (upcoming)</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.rijksakademie.nl/en/news/2024-03-20-open-studios-2024-may-30-june-2" target="_blank" rel="noreferrer"><em>Open Studios</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}> Rijksakademie, Amsterdam</p>
            <p style={{margin:'0px', fontSize:'12px'}}>May 30 - June 2, 2024 (upcoming)</p>
            <p></p>
    
            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://timesmuseum.org/en/program/follow-the-feeling" target="_blank" rel="noreferrer"><em>Follow the Feeling</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Times Museum, Guangzhou </p>
            <p style={{margin:'0px', fontSize:'12px'}}>Mar 22 – Jun 23, 2024</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://drive.google.com/file/d/1rRlZX-D3snkqnb9pJuvFnjcHWbDZRY-A/view" target="_blank" rel="noreferrer"><em>Times Ex-tenses</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>ba̍k-nih-á film festival 2, Taipei </p>
            <p style={{margin:'0px', fontSize:'12px'}}>May 24 - 26, 2024</p>
            <p></p>
    
            {/* <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.carpark.berlin/en" target="_blank" rel="noreferrer"><em>CARPARK</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Berlin, DE</p>
            <p style={{margin:'0px', fontSize:'12px'}}>January 20 – February 19, 2023</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="http://chateaushatto.com/exhibition/oceans-of-time/" target="_blank" rel="noreferrer"><em>Oceans of Time</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Château Shatto, Los Angeles, US</p>
            <p style={{margin:'0px', fontSize:'12px'}}>December 10, 2022–February 4, 2023</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><em>Semicolons - Film Program</em></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Ellen de Bruijne PROJECTS, Amsterdam, NL</p>
            <p style={{margin:'0px', fontSize:'12px'}}>January 28 - February 3, 2023</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.kasselerdokfest.de/compilation/p-c88ab28d-64a3-1249-9b0f-f96d3070dd31" target="_blank" rel="noreferrer"><em>Kasseler Dokfest</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Kassel, DE</p>
            <p style={{margin:'0px', fontSize:'12px'}}>November 18, 2022</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.schirn.de/en/angebote/double_feature_mit_peng_zuqiang/" target="_blank" rel="noreferrer"><em>Double Feature</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Schirn Kunsthalle Frankfurt, DE</p>
            <p style={{margin:'0px', fontSize:'12px'}}>November 30, 2022</p>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.e-flux.com/live/495780/souvenirs-of-frictions-three-films-by-peng-zuqiang-nbsp-nbsp-nbsp-nbsp/" target="_blank" rel="noreferrer"><em>Souvenirs of Frictions: Three films by Peng Zuqiang </em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>e-flux screening room, New York, US</p>
            <p style={{margin:'0px', fontSize:'12px'}}>October 20, 2022</p>
            <img className="landing-img" src="./images/sideways_looking.jpg" alt="exhibition poster"/>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.25fps.hr/en/program/2022/competition" target="_blank" rel="noreferrer"><em>25FPS Festival</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Zagreb, HR</p>
            <p style={{margin:'0px', fontSize:'12px'}}>September 21-24, 2022</p>
            <img className="landing-img" src="./images/sideways_looking.jpg" alt="exhibition poster"/>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://timesmuseum.org/en/program/one-song" target="_blank" rel="noreferrer"><em>One song is very much like another, and the boat is always from afar</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Guangdong Times Museum, Guangzhou </p>
            <p style={{margin:'0px', fontSize:'12px'}}>December 4, 2021 - January 30, 2022</p>
            <img className="landing-img" src="./images/one_song.png" alt="Exhibit Flyer"/>
            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://shanghai.ocat.org.cn/en/category/exhibition-list/detail!InSolidaritywith" target="_blank" rel="noreferrer"><em>In Solidarity With _____?</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>OCAT Shanghai x KADIST, Shanghai, CN</p>
            <p style={{margin:'0px', fontSize:'12px'}}>August 27, 2022 - October 23, 2022</p>
            <img className="landing-img" src="./images/sideways_looking.jpg" alt="exhibition poster"/>
            <p></p>

            <p style={{margin:'0px', fontSize:'14px'}}><a href="https://www.cellprojects.org/exhibitions/peng-zuqiang" target="_blank" rel="noreferrer"><em>Sideways Looking</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Cell Project Space, London, UK </p>
            <p style={{margin:'0px', fontSize:'12px'}}>April 13, 2022 - June 19, 2022</p>
            <img className="landing-img" src="./images/sideways_looking.jpg" alt="exhibition poster"/>
            <p></p> */}

            
            {/* <p style={{margin:'0px', fontSize:'14px'}}><a href="http://www.macallineart.org/en/exhibitions/1076/the-elephant-escaped" target="_blank" rel="noreferrer"><em>The Elephant Escaped</em></a></p>
            <p style={{margin:'0px', fontSize:'12px'}}>Macalline Art Center, Beijing </p>
            <p style={{margin:'0px', fontSize:'12px'}}>January 15, 2022 - April 16, 2022</p>
            <img className="landing-img" src="./images/elephant_mac.jpg" alt="exhibition poster"/>
            <p></p> */}

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
