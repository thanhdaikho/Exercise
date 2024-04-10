import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../../components/Button'

const MainLab4 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Ex 1'} onPress={() => navigation.navigate('Ex1Lab4')}/>
            <CommonButton title={'Ex 2'} onPress={() => navigation.navigate('Ex2Lab4')}/>
        </View>
    )
}

export default MainLab4