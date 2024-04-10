import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../../components/Button'
const MainLab6 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Ex 1'} onPress={() => navigation.navigate('Ex1Lab6')}/>
            <CommonButton title={'Ex 2'} onPress={() => navigation.navigate('Ex2Lab6')}/>
        </View>
    )
}

export default MainLab6
