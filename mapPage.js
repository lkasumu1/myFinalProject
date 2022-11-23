
import { Component } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class mapPage extends Component {
  render() {
    return (
      <Map google={this.props.google} 
      
          initialCenter={{
            lat: 23.052629,
            lng: -109.703583
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDS5yFH8JQv431BIc8TItZVg743SCa9SK0")
})(mapPage)