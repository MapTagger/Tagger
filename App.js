import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication} from './store'
//import InputSearch from './components/input-search.js'
import AddRecommendations from './components/add-recommendations.js'


export default class App extends React.Component {
  render() {

    return (  
      <Provider store = {store} >
        <AddRecommendations />
      </Provider>
      
    );
  }
}

  
