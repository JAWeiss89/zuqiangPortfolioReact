import React from 'react';
import  { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Routes from './Routes';
import './App.css';



function App() {
  const films = ['Inauguration', 'Nan', 'Spanish Vignettes', 'Accordion Class', 'I dont remember the name'];

  return (
    <div className="App">
      < BrowserRouter>
        < Nav />
        < NavMobile />
        < Routes films={films}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
