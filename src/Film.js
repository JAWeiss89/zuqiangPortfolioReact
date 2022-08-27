import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Film = ( {films, hideNav} ) => {
    const {filmID} = useParams();
    const film = films.find(item => item.id === filmID)
    const [imageFeatured, setImageFeatured] = useState(film.mainimage);

    const handleImageClick = (event) => {
        setImageFeatured(event.target.attributes.source.value);
    }
    
    useEffect(() => {
        setImageFeatured(film.mainimage);
    }, [filmID, film.mainimage])

    return (
        <section onClick={hideNav} id="content">
            <h1 className="title">{film.title}</h1>
            <img className="main-img" src={imageFeatured} alt={film.title}/>
            {film.photocredit &&
            <p id="photocredit">{film.photocredit}</p>}
            {film.images &&
            <div className="image-bar">
                {film.images.map((image, i) => {
                    return (
                        <img src={image} source={image} onClick={handleImageClick} key={`${film.title}-${i}`} alt={`${film.title}-${i}`}  />
                    )
                })}
            </div>
            }
            <p id="specs">{film.specs}</p>
            <p id="details">{film.details}</p>
            {film.summaryparagraphs.map((paragraph, i)=> <p key={i}>{paragraph}</p>)}
            
            {film.videosrc &&
            <iframe src={film.videosrc} title={film.title} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" ></iframe>            
            }

        </section>

    )
}

export default Film;