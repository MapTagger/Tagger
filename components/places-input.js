import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication, changeInput} from '../store'
import Map from './map'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
 

export class GooglePlacesInput extends React.Component {
  render(){
return (
    <View style={style.container}>
    <GooglePlacesAutocomplete
    style={style.communication}
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={(row) => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log('data', data.structured_formatting.main_text);
        console.log('latitude', details.geometry.location.lat);
        console.log('longitude', details.geometry.location.lng)
        this.props.addCommunication(data.structured_formatting.main_text)
      }}
      getDefaultValue={() => {
        return ''; // text input default value
      }}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyDmLSLyyhqKjs0CbOotJSZFyG_k_xlct0M',
        language: 'en', // language of the results
        types: 'establishment' // default: 'geocode'
      }}
      styles={{
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
 
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
          key: 'AIzaSyAmTGwNQVuIz04uoRei8bq8lK_F0yvrn4o'
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        key: 'AIzaSyDmLSLyyhqKjs0CbOotJSZFyG_k_xlct0M',
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'restaurant'
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}
 
    //   debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    //   renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
    //   renderRightButton={() => <Text>Custom text after the input</Text>}
    />
    <Map message={this.props.message} currentInput={this.props.currentInput} addCommunication={this.props.addCommunication} changeInput={this.props.changeInput} style={style} />
    </View>
  );
}
}


const mapProps = state => ({message: state.message, currentInput: state.currentInput})
const mapDispatch = dispatch => ({
    addCommunication: message => dispatch(addCommunication(message)),
    changeInput: input => dispatch(changeInput(input))
})

export default connect(mapProps,mapDispatch)(GooglePlacesInput)


const style = StyleSheet.create({
  communication: {flex: 2, borderColor: 'black', borderWidth: 3, marginTop: 10},
  container: {flex:1, height: 150}
})

// const style = StyleSheet.create({
//     container: {flex:1},
//     map: { flex: 5 },
//     sideBar: {flex: 3, borderColor: 'black', borderWidth: 3},
//     communication: {flex: 2, borderColor: 'black', borderWidth: 3}
    
//   })