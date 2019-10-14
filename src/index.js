import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import AveragePrice from './components/AveragePrice/AveragePrice';
import DataSearched from './components/DataSearched/DataSearched';
import ThreeProducts from './components/ThreeProducts/ThreeProducts';

ReactDOM.render(

    //Navigation Routes
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={App}/>
            <Route exact path ='/media-de-preco' component={AveragePrice}/>
            <Route exact path ='/consultas-realizadas' component={DataSearched}/>
            <Route exact path ='/mais-procurados' component={ThreeProducts}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
