import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux';
import GooglePlacesInput from './components/places-input.js'
import InputSearch from './components/input-search.js'
import Home from './components/home.js'
 
export default class Routes extends React.Component {
    render() {
      return ( 
        <Router>
        <Scene key="root">
          <Scene key="home" component={Home} />
          <Scene key="inputSearch" component={InputSearch}/>
          <Scene key="placesInput" path={"/placesInput/:category"} component={GooglePlacesInput} title="Recommendations"/>
        </Scene>
      </Router>
      )
    }
  }