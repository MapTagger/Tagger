import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication} from './store'
import Map from './components/Map.js'

export default class App extends React.Component {
  render() {

    return (  
      <Provider store = {store} >
        <Map />
      </Provider>
      
    );
  }
}

  
