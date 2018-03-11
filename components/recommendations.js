import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'
import { Provider, connect } from 'react-redux'
import store, { changeInput } from '../store'

export class RecommendationsList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log('If you searched for ', this.props.category, ' originally, you will see a crown')
        console.log('Here is your array of searches ', this.props.yourSearches)
        return (
            <ScrollView style={style.recsList}>
                {this.props.markers.filter(eachPlace => eachPlace.category === this.props.category).map((eachPlace, index) => (
                    <View style={style.recButton}>
                        <Button color='black' key={index} title={eachPlace.name} />
                        { !this.props.yourSearches.includes(this.props.category) &&
                        <Button color='black' onPress={()=>{}}key={index} title='Crown'/>
                        }
                    </View>))}
            </ScrollView>
        );
    }
}

const mapProps = state => ({ currentInput: state.currentInput, markers: state.markers, yourSearches: state.yourSearches })
const mapDispatch = dispatch => ({
    changeInput: input => dispatch(changeInput(input)),
    addMarker: marker => {dispatch(addMarker(marker)); dispatch(addUserRec(marker.name))},
    pickWinner: winner => {dispatch(pickWinner(winner))}
})
export default connect(mapProps, mapDispatch)(RecommendationsList)

const style = StyleSheet.create({
    container: { flex: 1 },
    recsList: { borderColor: 'black', borderTopWidth: 2, backgroundColor: '#9A18DB' },
    recButton: { backgroundColor: 'white', borderColor: '#9A18DB', borderWidth: 1, padding: 2, borderRadius: 10, flexDirection: 'row'}

})