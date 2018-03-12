import React from 'react'
import {View, Text} from 'react-native'

export default function(){
    return (
        <View style = {{flex: 1, backgroundColor: '#9A18DB', alignContent: 'center'}}>
            <Text style = {{color: 'white', fontSize: 30, textAlign: 'center', top: 150}}>Someone crowned your recommendation!</Text>
            <Text style = {{color: 'white', fontSize: 50, textAlign: 'center', top: 150}}> + 10 Points </Text>
        </View>

    )
}