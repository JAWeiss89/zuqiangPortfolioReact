import React from 'react';
import landing from './images/landing.jpg';

const Home = () => {
    return (
        <section id="content">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            <img className="main-img" src={landing} />
            <p><b>Upcoming :</b></p>
            <p>World Premiere of <a href="./works/nan.html"><em>Nan</em></a> at <a href="https://www.idfa.nl/en/film/148171ce-6a64-4764-ad57-76b16f626d64/nan">First Appearance section, IDFA</a> , Nov.18- Dec.6, 2020</p>
            <p><a href="./works/inauguration.html"><em>Inauguration</em></a> in <a href="https://www.cinemahtx.org/event/borders-no-borders-documentary-2/">Borders | No Borders competition program</a>, Houston Cinema Arts Festival, Nov.12 - 22, 2020</p>
        </section>
    )
}

export default Home;