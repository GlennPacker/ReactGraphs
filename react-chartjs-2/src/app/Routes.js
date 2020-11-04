import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import PieChart from '../pages/pieChart';
import LineGraphExample from '../pages/lineGraph/LineGraphExample';
import DoughnutExample from '../pages/dougnutChart/DoughnutExample';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/dougnut' component={ DoughnutExample } />
            <Route path='/line' component={ LineGraphExample } />
            <Route path='/pie' component={ PieChart } />
        </Switch>
     );
}

export default Routes;