import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LineGraph from '../pages/lineGraph';
import Home from '../pages/home';
import PieChart from '../pages/pieChart';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/line' component={ LineGraph } />
            <Route path='/pie' component={ PieChart } />
        </Switch>
     );
}

export default Routes;