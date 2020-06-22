import React, { Component } from 'react';
import './Home.css';
import logo from "../streetcode_logo.png";
import Button from 'react-bootstrap/Button';
import StreetCodeComponent from './AppComponent';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends Component {
    state = { 
        clicked: false
     };
    render() { 
        return (
        <React.Fragment>
            <img src={logo} className="streetcode-logo" alt=""/>
            <div>
                <p className="message">
                Chris has cast Lorem Ipsum on you!
                <br></br>
                Roll for initiative.
                <br></br>
                Chris rolls 1d20 for 6.
                <br></br>
                <br></br>
                </p>
            </div>

            <div className="map-app">
                <StreetCodeComponent></StreetCodeComponent>
            </div>
            
        </React.Fragment>
        );
    }
}
 
export default Home;