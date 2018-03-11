import React from 'react';
import  MapView, { Marker, AnimatedRegion, Animated } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {changeInput} from '../store'
import {Actions} from 'react-native-router-flux'


export class Map extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      region: {
        latitude: 40.758896,
        longitude: -73.985130,
        latitudeDelta: 0.5,
        longitudeDelta: 0.1,
      }
    }
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({region: {
      latitude: 40.758896,
      longitude: -73.985130,
      latitudeDelta: .05,
      longitudeDelta: .01,
    }})
  }, 3000)
  }


  // componentDidMount(){
  //   setTimeout(() => {
  //   this.refs.map.animateToRegion({region: {
  //     latitude: 40.730610,
  //     longitude: -73.935242,
  //     latitudeDelta: 0.55,
  //     longitudeDelta: 0.15}, duration: 100})}, 2000)
  // }

  changeRegion(coordinates){
     this.setState({
       region:{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: .05,
        longitudeDelta: .01,
       }
     })
  }


  render() {
    return (
  <View style={style.container}>
      <MapView
        style={style.map}
        initialRegion={this.state.region}
        region={this.state.region}
        zoomEnabled = {true}
        scrollEnabled = {true}
      >
      {
        this.props.markers.length > 0 && this.props.markers.filter(eachMarker => eachMarker.category === this.props.category).map((eachMarker, index) => (
          <Marker
        coordinate={eachMarker.coordinates}
        title={eachMarker.name}
        key={index}
      />
      )
    )
    }

      </MapView>
      <View style={style.sideBar}>
      <ScrollView>
        {this.props.markers.filter(eachPlace=>eachPlace.category===this.props.category).map((eachPlace, index) => (<Button onPress={() => Actions.selectedPlace({ name: eachPlace.name })} key={index} title={eachPlace.name} />))}
        </ScrollView>
      </View>
      </View>
    );
  }
}

const mapProps = state => ({currentInput: state.currentInput, markers: state.markers})
const mapDispatch = dispatch => ({
    changeInput: input => dispatch(changeInput(input)),
    
})
export default connect(mapProps,mapDispatch)(Map)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5, borderColor: 'black', borderWidth: 3},
  sideBar: {flex: 1},
  communication: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})