import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../../components/Button'

const RouteLab8 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Ex 1'} onPress={() => navigation.navigate('Lab8Ex1')} />
        </View>
    )
}

export default RouteLab8
    