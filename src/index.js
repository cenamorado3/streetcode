import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Components/HomeComponent';
import StreetCodeComponent from './Components/AppComponent';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
       <Router>
        <Switch>
          <Route exact path="/streetcode">
            <StreetCodeComponent />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();