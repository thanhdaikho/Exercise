import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CommonButton = ({onPress, title}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} className='bg-slate-600 p-4 mx-6 rounded-lg mt-4'>
                <Text className='text-white font-bold text-2xl text-center'>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CommonButton
