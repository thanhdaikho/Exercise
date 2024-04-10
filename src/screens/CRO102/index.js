import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../components/Button'

const CRO102 = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Lab 1'} onPress={() => navigation.navigate('Lab1CRO')}/>
            <CommonButton title={'Lab 2'} onPress={() => navigation.navigate('Lab2CRO')}/>
            <CommonButton title={'Lab 3'} onPress={() => navigation.navigate('Lab3CRO')}/>
            <CommonButton title={'Lab 4'} onPress={() => navigation.navigate('Lab4CRO')}/>
            <CommonButton title={'Lab 6'} onPress={() => navigation.navigate('Lab6CRO')}/>
            <CommonButton title={'Lab 8'} onPress={() => navigation.navigate('Lab8')}/>

        </View>
    )
}

export default CRO102