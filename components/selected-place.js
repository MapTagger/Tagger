import React from 'react'
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import store, {changeInput} from '../store'
import Communications from 'react-native-communications';

 
export const SelectedPlace = (props) => {
    const name = props.navigation.state.params.name
    return (
        <View style={style.container}>
        { 
            props.markers.filter(marker => marker.name === name).map((place, index) => { 
           return (
         <View style={style.container} key={index}>
          <Text style={style.title}>{place.name}</Text>
          <Text style={style.text}>{place.address}</Text>
          <View style={style.button}>
          <Button onPress={() => Communications.phonecall(place.phone, true)} title={place.phone}/>
          </View>
          <Text style={style.text}>Hours:</Text>
          { place.open.map((day, i) => <Text style={style.hours} key={i}>{day}</Text>)

          }
        
          </View>
           )
        })
        }
        </View>
    )
}

const mapProps = state => ({currentInput: state.currentInput, markers: state.markers})
const mapDispatch = dispatch => ({
    changeInput: input => dispatch(changeInput(input)),
    
})

export default connect(mapProps,mapDispatch)(SelectedPlace)


const style = StyleSheet.create({
    container: { flex:1, backgroundColor: 'white' },
    title: { color: 'black', fontWeight: 'bold', fontSize: 30, top: 120, textAlign: 'center'},
    text: { color: 'black', fontWeight: 'bold', fontSize: 25, top: 120, textAlign: 'center'},
    hours: { fontSize: 20, top: 120, textAlign: 'center'},
    button: { top: 120 },
    image: { height: 100, width: 100, top: 140, left: 130 }
  })
