import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CommonButton from '../../../components/Button'

const RouteLab7 = ({ navigation }) => {
    return (
        <View>
            <CommonButton title={'Ex 1'} onPress={() => navigation.navigate('Lab7Ex1')} />
            <CommonButton title={'Ex 2'} onPress={() => navigation.navigate('Lab7Ex2')} />

        </View>
    )
}
export default RouteLab7