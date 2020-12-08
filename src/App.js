import React from 'react';
import  { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Routes from './Routes';
import './App.css';
import films from './db/films.json';


function App() {

  return (
    <div id="container">
      < BrowserRouter basename={process.env.PUBLIC_URL}>
        < Nav />
        < NavMobile />
        < Routes films={films}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
