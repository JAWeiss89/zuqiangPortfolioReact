import React from 'react';
import  { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Routes from './Routes';
import './App.css';
import films from './db/films.json';


function App() {

  return (
    <div className="App" id="container">
      < BrowserRouter>
        < Nav />
        < NavMobile />
        < Routes films={films}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
