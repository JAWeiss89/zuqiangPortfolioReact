import React from 'react';
import { useParams } from 'react-router-dom';


const Film = ( {films} ) => {
    const {filmID} = useParams();
    const film = films.find(item => item.id === filmID)
    return (
        <section id="content">
            <h1 className="title">{film.title}</h1>
            <img className="main-img" src={film.mainimage} alt={film.title}/>
            <p id="specs">{film.specs}</p>
            <p id="details">{film.details}</p>
            {film.summaryparagraphs.map((paragraph)=> <p>{paragraph}</p>)}

            {film.videosrc &&
            <iframe src={film.videosrc} width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>            
            }

        </section>

    )
}

export default Film;