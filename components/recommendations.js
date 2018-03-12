import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Provider, connect } from 'react-redux'
import store, { changeInput, pickWinner } from '../store'
import {Actions} from 'react-native-router-flux'


export class RecommendationsList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log('If you searched for ', this.props.category, ' originally, you will see a crown')
        console.log('Here is your array of searches ', this.props.yourSearches)
        console.log('These are our winners so far')
        console.log(this.props.winners)
        return (
            <ScrollView style={style.recsList}>
                {this.props.markers.filter(eachPlace => eachPlace.category === this.props.category).map((eachPlace, index) => {
                    return (
                    <View style={style.recButton} key={index}>
                        <Button onPress={() => Actions.selectedPlace({name: eachPlace.name})} color='black' title={eachPlace.name} />
                    {    this.props.yourSearches.includes(this.props.category) &&
                        <TouchableOpacity onPress={() => {this.props.pickWinner(eachPlace)}}>
                         <Image style={{height: 35, right: 12}}source={require('./tinyCrown.png')}/>
                        </TouchableOpacity>
                        // <Button onPress={() => {this.props.pickWinner(eachPlace)}} color='black' title='Crown'/>
                    }
                    </View>
                )})}
            </ScrollView>
        );
    }
}

const mapProps = state => ({ currentInput: state.currentInput, markers: state.markers, yourSearches: state.yourSearches, winners: state.winners })
const mapDispatch = dispatch => ({
    changeInput: input => dispatch(changeInput(input)),
    addMarker: marker => {dispatch(addMarker(marker)); dispatch(addUserRec(marker.name))},
    pickWinner: winner => {dispatch(pickWinner(winner))}
})
export default connect(mapProps, mapDispatch)(RecommendationsList)

const style = StyleSheet.create({
    container: { flex: 1 },
    recsList: { borderColor: 'black', borderTopWidth: 2, backgroundColor: '#9A18DB' },
    recButton: { backgroundColor: 'white', borderColor: '#5E09A8', borderWidth: 1, padding: 2, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}
    

})