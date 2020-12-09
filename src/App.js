import React, {useState} from 'react';
import  { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Routes from './Routes';
import './App.css';
import films from './db/films.json';


function App() {
  const [navHidden, setNavHidden] = useState(true);
  const toggleNav = () => {
    setNavHidden(!navHidden);
  }
  const hideNav = () => {
    setNavHidden(true);
  }
  return (
    <div id="container" >
      < BrowserRouter >
        < Nav hideNav={hideNav}/>
        < NavMobile toggleNav={toggleNav} navHidden={navHidden}/>
        < Routes films={films} hideNav={hideNav}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
