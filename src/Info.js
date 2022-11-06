import React from 'react';

const Info = ({hideNav}) => {
    return  (   
        <section onClick={hideNav} id="content">
            <h1 id="title" className="hidden">info</h1>
            {/* <img className="main-img" src="./images/info.jpg" alt="info"/> */}
            <p>zuqiangpeng (at) gmail (dot) com | <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1lmyM9UjpoS4ztlFPKtjNQ9ciHQHyG9pX--Q7KzkBAc0/edit?usp=sharing"><span>CV</span></a></p>
            <p>-</p>
            <p>Peng Zuqiang works with film, video and installations, examining the affective meaning within histories, bodies, and language.</p>
            {/* <p>Zuqiang‘s works have been shown at exhibitions and festivals internationally including Antimatter, Dok Leipzig, Open City Documentary Festival, Connecting Space in Hong Kong, and Museum of Fine Arts, Houston. He has received fellowships and residencies from the MacDowell, Skowhegan, True/False Film Festival, and the Core Program. Zuqiang is part of the film collective Fish in a Pot 🐠.</p> */}
            {/* <p>Zuqiang’s works have been shown at exhibitions and festivals internationally including Antimatter, Open City Documentary Festival, IDFA, UCCA Beijing, and Museum of Fine Arts, Houston. He has received fellowships and residencies from the MacDowell, Skowhegan, the Core Program and the Lighthouse Works. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film.</p> */}
            {/* <p>Zuqiang’s works have been shown at exhibitions and festivals internationally including UCCA Beijing, Time Art Center Berlin, IDFA,  Open City Documentary Festival, and Antimatter. He has received fellowships and residencies from the MacDowell, Skowhegan, the Core Program and the Lighthouse Works. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film, Nan (2020)</p> */}
            <p>Exhibitions and screenings include Cell Project Space, E-Flux screening room, Times Museum, UCCA Beijing, 25FPS, IDFA, Antimatter, and Open City Doc Festival. He has received fellowships and residencies from IAS CEU, MacDowell, Skowhegan, and the Core Program. He is the recipient of the Present Future Prize 2022, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film, Nan (2020). A resident artist at Rijksakademie van beeldende kunsten, he lives and works in Amsterdam.</p>
        </section>
    )
}

export default Info;
