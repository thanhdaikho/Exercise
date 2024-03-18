import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import CommonHeader from '../../../components/CommonHeader'
import SectionView from '../../../components/SectionView'
import CommonInput from '../../../components/TextInput'

const CROLab1 = () => {
    
    return (
        <ScrollView className='flex-1 mb-6'>
            <CommonHeader rightComponent={require('../../../assets/images/avt.png')} centerComponent={'Home'}/>
            <SectionView/>
            <Text className='text-3xl font-bold ml-4 my-4'>Custom Input</Text>
            <Text className='font-bold text-black text-lg ml-4'>Title *</Text>
            <CommonInput placeholder='Place holder'/>
            <Text className='font-bold text-black text-lg ml-4 mt-7'>Title *</Text>
            <CommonInput placeholder='Place holder' error={'Error'}/>
            <Text className='font-bold text-black text-lg ml-4 mt-7'>Password *</Text>
            <CommonInput placeholder='Place holder' valid={'Valid'} secureTextEntry/>
        </ScrollView>
    )
}

export default CROLab1