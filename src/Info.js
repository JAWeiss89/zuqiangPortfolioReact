import React from 'react';

const Info = ({hideNav}) => {
    return  (   
        <section onClick={hideNav} id="content">
            <h1 id="title" className="hidden">info</h1>
            {/* <img className="main-img" src="./images/info.jpg" alt="info"/> */}
            <p>pengzuqiangstudio (at) gmail.com | <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1lmyM9UjpoS4ztlFPKtjNQ9ciHQHyG9pX--Q7KzkBAc0/edit?usp=sharing"><span>cv</span></a></p>
            <p><a href="http://antenna-space.com/en/artists/pengzuqiang/">Antenna Space</a> | <a href="https://vdb.org/artists/peng-zuqiang">VDB</a></p>

            <p>-</p>
            <p>Peng Zuqiang works with film, video and installations.</p>
            {/* <p>Zuqiang‘s works have been shown at exhibitions and festivals internationally including Antimatter, Dok Leipzig, Open City Documentary Festival, Connecting Space in Hong Kong, and Museum of Fine Arts, Houston. He has received fellowships and residencies from the MacDowell, Skowhegan, True/False Film Festival, and the Core Program. Zuqiang is part of the film collective Fish in a Pot 🐠.</p> */}
            {/* <p>Zuqiang’s works have been shown at exhibitions and festivals internationally including Antimatter, Open City Documentary Festival, IDFA, UCCA Beijing, and Museum of Fine Arts, Houston. He has received fellowships and residencies from the MacDowell, Skowhegan, the Core Program and the Lighthouse Works. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film.</p> */}
            {/* <p>Zuqiang’s works have been shown at exhibitions and festivals internationally including UCCA Beijing, Time Art Center Berlin, IDFA,  Open City Documentary Festival, and Antimatter. He has received fellowships and residencies from the MacDowell, Skowhegan, the Core Program and the Lighthouse Works. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film, Nan (2020)</p> */}
            <p> Recent solo presentations include Fondazione Sandretto (2023), Kevin Space (2023), Cell Project Space (2022), E-Flux screening room (2022). Group exhibitions and screenings include videobrasil (2023), Alchemy Film and Moving Image Festival (2024,2023), 25FPS (2022). He is a recipient of the Present Future prize at Artissima (2022), and the Dialog Award at EMAF (2023, 2024). A resident artist at Rijksakademie van beeldende kunsten (2022-24), he lives and works in Amsterdam.</p>
        </section>
    )
}

export default Info;
