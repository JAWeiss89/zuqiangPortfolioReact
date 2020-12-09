import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Film from './Film';
import Info from './Info';


const Routes = ( { films } ) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/info">
                <Info />
            </Route>
            <Route exact path="/:filmID">
                <Film films={films} />
            </Route>
            <Route>
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;
