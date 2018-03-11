import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addPlace, changeInput, clearInput, addMarker, addUserRec, pickWinner} from '../store'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Map from './map'
import RecommendationsList from './recommendations'
 

export class GooglePlacesInput extends React.Component {
 
  
  render(){
    const category =this.props.navigation.state.params.category
return (
  <View style={style.container}>
    <View style={style.recommender}>
    <Text>Where's the best {category}</Text>
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={(row) => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log('details', details);
        console.log('data', data)
        const suggestion = {coordinates: {latitude: details.geometry.location.lat, longitude: details.geometry.location.lng}, name: data.structured_formatting.main_text, category: category, phone: details.formatted_phone_number, address: details.formatted_address, open: details.opening_hours.weekday_text }
        console.log(suggestion)
        this.props.addMarker(suggestion)
      }}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyDmLSLyyhqKjs0CbOotJSZFyG_k_xlct0M',
        language: 'en', // language of the results
        types: 'establishment' // default: 'geocode'
      }}
    />
    </View>

    <View style={style.map}>
      <Map category={category}/>
    </View>
    <View style={style.recommenderList}>
      <RecommendationsList category={category}/>
    </View>
    </View>
  );
}
}


const mapProps = state => ({currentInput: state.currentInput, markers: state.markers })
const mapDispatch = dispatch => ({
    changeInput: input => dispatch(changeInput(input)),
    addMarker: marker => {dispatch(addMarker(marker)); dispatch(addUserRec(marker.name))},
    pickWinner: winner => {dispatch(pickWinner(winner))}
})

export default connect(mapProps,mapDispatch)(GooglePlacesInput)


const style = StyleSheet.create({
  container: {flex: 1 },

  recommender: { borderColor: 'black', borderBottomWidth: 3, height: 150},
  
  map: {flex: 6},

  recommenderList: {flex: 4}
  
})
