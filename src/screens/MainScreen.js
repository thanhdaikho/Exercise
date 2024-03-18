import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../components/Button'

const MainScreen = ({navigation}) => {
    return (
        <View>
            <Text className='font-bold text-3xl text-black text-center my-6 mb-24'>FPT Polytechnic 2024</Text>
            <CommonButton title={'AND103'} onPress={() => navigation.navigate('AND103')}/>
            <CommonButton title={'CRO102'} onPress={() => navigation.navigate('CRO102')}/>
        </View>
    )
}
export default MainScreen