import React from 'react';
// import landing from '/images/landing.jpg';

const Home = () => {
    return (
        <section id="content">
            <h1 id="title" className="hidden">Peng Zuqiang</h1>
            <img className="main-img" src="./images/landing.jpg" />
            <p><b>News :</b></p>
            <p>World Premier of <a href="./works/nan.html"><em>Nan</em></a> at <a href="https://www.idfa.nl/en/film/148171ce-6a64-4764-ad57-76b16f626d64/nan">First Appearance section, IDFA</a> , Nov.18 - Dec.6, 2020</p>

            <p>Asia Premier of <a href="./works/nan.html"><em>Nan</em></a> at <a href="https://ffd.or.id/film/nan/?lang=en">Festival Film Dokumenter</a>, International Feature-length Documentary Competition, Nov.25 - Dec.14, 2020</p>

            <p><a href="https://ucca.org.cn/en/exhibition/huayu-youth-award-2020/">Huayu Youth Award Exhibition</a>, UCCA Beijing, Dec.12, 2020 - Feb.21, 2021</p>

            <p><a href="./works/inauguration.html"><em>Inauguration</em></a> received 'Honorable Mention' at <a href="https://www.cinemahtx.org/event/borders-no-borders-documentary-2/">Borders | No Borders competition program</a>, Houston Cinema Arts Festival</p>
        </section>
    )
}

export default Home;