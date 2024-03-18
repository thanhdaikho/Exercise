import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../components/Button'

const AND103 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Lab 1'} onPress={() => navigation.navigate('Lab1AND')}/>
        </View>
    )
}

export default AND103