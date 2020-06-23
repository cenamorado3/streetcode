import React, { Component, useEffect} from 'react';
import './AppComponent.css';
import './gMap';
import Button from 'react-bootstrap/Button';

class StreetCodeComponent extends Component {
    state = { 
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="map"></div>
                <button id="mark">Party Up</button>
            </React.Fragment>
         );
    }
}
 
export default StreetCodeComponent;

  
