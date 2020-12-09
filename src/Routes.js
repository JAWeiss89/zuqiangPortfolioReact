import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Film from './Film';
import Info from './Info';


const Routes = ( { films, hideNav } ) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home hideNav={hideNav}/>
            </Route>
            <Route exact path="/info">
                <Info hideNav={hideNav}/>
            </Route>
            <Route exact path="/:filmID">
                <Film hideNav={hideNav} films={films} />
            </Route>

        </Switch>
    )
}

export default Routes;
