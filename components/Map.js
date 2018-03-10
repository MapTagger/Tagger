import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication, changeInput} from '../store'

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

    //console.log('Look Here', store)

    return (
      
    <View style={style.container}>
      <MapView
        style={style.map}
        region={this.state.region}
        zoomEnabled = {true}
        scrollEnabled = {true}
      >
          <Marker draggable
        coordinate={{latitude: 40.716974, longitude: -73.99325499999999}}
        title='Yum'
        description='Dropping a Marker'
        onDragEnd = {()=>{}}
      />
        
      {this.props.markers.length > 0 && this.props.markers.map((eachMarker,index)=>{
        
        return(
          <View style={style.container} key={index}>

      <Marker draggable
        coordinate={eachMarker.coordinates}
        title={eachMarker.name}
        description='Dropping a Marker'
        onDragEnd = {()=>{}}
      />
      </View>
      )
    }
    )}
      </MapView>
      <View style={style.sideBar}>
        {this.props.message.map((eachMessage, index)=>(<Text key={index}>{eachMessage}</Text>))}
      </View>
    </View>
      
    );
  }
}

const mapProps = state => ({message: state.message, currentInput: state.currentInput, markers: state.markers})
const mapDispatch = dispatch => ({
    addCommunication: message => dispatch(addCommunication(message)),
    changeInput: input => dispatch(changeInput(input)),
    
})
export default connect(mapProps,mapDispatch)(Map)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5 },
  sideBar: {flex: 2, borderColor: 'black', borderWidth: 3},
  communication: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})