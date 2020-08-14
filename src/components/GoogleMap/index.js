import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import styles from './index.module.css'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.69,
      lng: 23.33
    },
    zoom: 11
  }
 
  render() {
    return (
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyAVwkE4Fg3zOOzV1ClcsWugDJwh0_tkJF4"
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.693301}
            lng={23.335050}
            text="Here is the marked place"
          />
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default GoogleMap

