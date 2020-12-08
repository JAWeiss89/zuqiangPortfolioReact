import React from 'react';
// import  { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Routes from './Routes';
import './App.css';
import films from './db/films.json';


function App() {

  return (
    <div id="container">
      {/* < BrowserRouter> */}
      < HashRouter >
        < Nav />
        < NavMobile />
        < Routes films={films}/>
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
