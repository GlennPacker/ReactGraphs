import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import LineGraphExample from '../pages/lineGraph/LineGraphExample';
import PieChartExample from '../pages/pieChart/PieChartExample';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/line' component={ LineGraphExample } />
            <Route path='/pie' component={ PieChartExample } />
        </Switch>
     );
}

export default Routes;