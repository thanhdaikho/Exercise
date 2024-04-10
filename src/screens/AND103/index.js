import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../components/Button'

const AND103 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Lab 1'} onPress={() => navigation.navigate('Lab1AND')}/>
            <CommonButton title={'Lab 5'} onPress={() => navigation.navigate('Lab5AND')}/>
            <CommonButton title={'Lab 6'} onPress={() => navigation.navigate('Lab6AND')}/>
            <CommonButton title={'Lab 7'} onPress={() => navigation.navigate('Lab7AND')}/>
            <CommonButton title={'Lab 8'} onPress={() => navigation.navigate('Lab8AND')}/>

        </View>
    )
}

export default AND103