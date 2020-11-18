import React from 'react';
import { useParams } from 'react-router-dom';

const Film = ( {films} ) => {
    //let film = films.find();
    const { film } = useParams();
    console.log(films);
    return (
        <h2>This is the film {film} </h2>
    )
}

export default Film;