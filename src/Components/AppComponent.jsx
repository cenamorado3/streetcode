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
                <Button id="mark" variant="primary">Party!</Button>
            </React.Fragment>
         );
    }
    //gmap key
//https://maps.googleapis.com/maps/api/js?key=AIzaSyDOojBql4kbAIwff76-5lqBGOMUqGn9K0E
}
 
export default StreetCodeComponent;

  
