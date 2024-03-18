import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../../components/Button'

const MainLab3 = ({ navigation }) => {
    return (
        <View>
            <CommonButton title={'Ex 1'} onPress={() => navigation.navigate('Ex1Lab3')} />
            <CommonButton title={'Ex 2'} onPress={() => navigation.navigate('Ex2Lab3')} />
            <CommonButton title={'Ex 3'} onPress={() => navigation.navigate('Ex3Lab3')} />
        </View>
    )
}

export default MainLab3
