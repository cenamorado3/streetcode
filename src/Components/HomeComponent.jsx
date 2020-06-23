import React, { Component } from 'react';
import './Home.css';
import logo from "../streetcode_logo.png";
import StreetCodeComponent from './AppComponent';


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