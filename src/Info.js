import React from 'react';

const Info = ({hideNav}) => {
    return  (   
        <section onClick={hideNav} id="content">
            <h1 id="title" className="hidden">info</h1>
            {/* <img className="main-img" src="./images/info.jpg" alt="info"/> */}
            <p>zuqiangpeng@gmail.com | <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1lmyM9UjpoS4ztlFPKtjNQ9ciHQHyG9pX--Q7KzkBAc0/edit?usp=sharing"><span>CV</span></a></p>
            <p>-</p>
            <p>Peng Zuqiang works with film, video and installation.</p>
            {/* <p>Zuqiang‘s works have been shown at exhibitions and festivals internationally including Antimatter, Dok Leipzig, Open City Documentary Festival, Connecting Space in Hong Kong, and Museum of Fine Arts, Houston. He has received fellowships and residencies from the MacDowell, Skowhegan, True/False Film Festival, and the Core Program. Zuqiang is part of the film collective Fish in a Pot 🐠.</p> */}
            {/* <p>Zuqiang’s works have been shown at exhibitions and festivals internationally including Antimatter, Open City Documentary Festival, IDFA, UCCA Beijing, and Museum of Fine Arts, Houston. He has received fellowships and residencies from the MacDowell, Skowhegan, the Core Program and the Lighthouse Works. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film.</p> */}
            {/* <p>Zuqiang’s works have been shown at exhibitions and festivals internationally including UCCA Beijing, Time Art Center Berlin, IDFA,  Open City Documentary Festival, and Antimatter. He has received fellowships and residencies from the MacDowell, Skowhegan, the Core Program and the Lighthouse Works. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film, Nan (2020)</p> */}
            <p>Recent exhibitions and screenings include Cell Project Space, Times Museum, UCCA Beijing, Times Art Center (Berlin), Museum of Fine Arts, Houston, IDFA, Antimatter, and Open City Doc Festival. He has received fellowships and residencies from IAS CEU, the MacDowell, Skowhegan, the Core Program. He received the ‘Jury Special Prize’ from the 8th Huayu Youth Award, and a ‘Special Mention’ from Festival Film Dokumenter, Yogyakarta for his first feature film, Nan (2020). He is a resident artist at Rijksakademie van beeldende kunsten from 2022.</p>
        </section>
    )
}

export default Info;
