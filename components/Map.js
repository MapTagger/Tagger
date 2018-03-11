import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {changeInput} from '../store'

export class Map extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      region: {
        latitude: 40.730610,
        longitude: -73.935242,
        latitudeDelta: 0.5,
        longitudeDelta: 0.1,
      }
    }
  }

  render() {

    return (
      
    <View style={style.container}>
      <MapView
        style={style.map}
        initialRegion={this.state.region}
        zoomEnabled = {true}
        scrollEnabled = {true}
      >
      {
        this.props.markers.length > 0 && this.props.markers.filter(eachMarker=>eachMarker.category===this.props.category).map((eachMarker,index)=>(
          <View style={style.container} key={index}>

      <Marker
        coordinate={eachMarker.coordinates}
        title={eachMarker.name}
      />
      </View>
      )
    )
    }

      </MapView>
      <View style={style.sideBar}>
      <ScrollView>
        {this.props.markers.filter(eachPlace=>eachPlace.category===this.props.category).map((eachPlace, index)=>(<Text key={index}>{eachPlace.name}</Text>))}
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
  map: { flex: 5 },
  sideBar: {flex: 1, borderColor: 'black', borderWidth: 3},
  communication: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})