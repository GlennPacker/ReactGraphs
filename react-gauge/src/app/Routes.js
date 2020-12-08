import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Gauge from '../pages/gauge';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/gauge' component={ Gauge } />
        </Switch>
     );
}

export default Routes;