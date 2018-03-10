import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication} from './store'
//import InputSearch from './components/input-search.js'
import GooglePlacesInput from './components/places-input.js'
import Map from './components/map.js'

//socket
import socket, { subscribeToTimer } from './api.js'


export default class App extends React.Component {

  constructor(props){
    super(props)
    
    
  }

  componentDidMount(){
    console.log('HEEELLOOO')
    subscribeToTimer(1000, (err, timestamp) => {console.log('This is a timestamp ', timestamp)})
  }


  render() {

    return (  
      <Provider store = {store} >
      <View style={{flex: 1}}>
        <View style={{flex: 2}}>
          <GooglePlacesInput/>
        </View>
        <View style={{flex: 7}}> 
          <Map style={{flex: 8}}/>
        </View>
      </View>
      </Provider>
      
    );
  }
}
//
//
const style = StyleSheet.create({
  map: {flex: 15},
})

  
