/*
 * ./src/components/BasicMap.jsx
 */

import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'

class BasicMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        maxZoom: 16,
        bearing: 0
      }
    }
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    })
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={
          this._onViewportChange.bind(this)
        }
      />
    )
  }
}

export default BasicMap
