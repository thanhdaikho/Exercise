import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

const SectionView = () => {
    const eventInfo = [
        {   
            id: 1,
            location: 'Hồ Gươm, Hà Nội',
            schedule: '9:00 AM - 12:00 PM, 12/12/2024',
            transport: 'Bus',
            time: '21:00 - 22:00',
            image: require('../assets/images/hoguom.jpg'),
        }
    ];
    const renderSection = (data, index) => {
        const {titles, events} = data
        return (
            <View key={index}>
                <Text>{title}</Text>
                <View></View>
            </View>
        )
    }
    return (
        <ScrollView className='flex-1'>
            {eventInfo.map.(renderSection)}
        </ScrollView>
    )
}

export default SectionView