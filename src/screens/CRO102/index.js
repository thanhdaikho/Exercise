import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../components/Button'

const CRO102 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Lab 1'} onPress={() => navigation.navigate('Lab1CRO')}/>
        </View>
    )
}

export default CRO102