import React, { Component, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import CommonButton from '../../../components/Button';

const Lab1Screen = ({navigation}) => {
    return (
        <View>
            <CommonButton title={'Ex 1'} onPress={() => {navigation.navigate('Ex1')}}/>
            <CommonButton title={'Ex 2'} onPress={() => {navigation.navigate('Ex2')}}/>
        </View>
    )
}

export default Lab1Screen
