import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux';
import GooglePlacesInput from './components/places-input.js'
import InputSearch from './components/input-search.js'
import Home from './components/home.js'
import SelectedPlace from './components/selected-place.js'


export default class Routes extends React.Component {
    render() {
      return ( 
        <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="inputSearch" component={InputSearch} title="Search"/>
          <Scene key="placesInput" path={"/placesInput/:category"} component={GooglePlacesInput} title="Recommendations"/>
          <Scene key="selectedPlace" path={"/selectedPlace/:name"} component={SelectedPlace} title="Information"/>
        </Scene>
      </Router>
      )
    }
  }