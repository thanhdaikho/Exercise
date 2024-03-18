import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import CommonInput from '../../../components/TextInput'
import CommonButton from '../../../components/Button'
const Ex2 = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [confirm, setConfirm] = useState(null)
    const [code, setCode] = useState('')

    useEffect(() => {
        auth().settings.appVerificationDisabledForTesting = true;
    }, []);
    const handleSigninWithPhoneNumber = async (phoneNumber) => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
            setConfirm(confirmation)
        } catch (e) {
            console.error('Error sending code: ' + e)
        }
    }
    const confirmCode = async () => {
        try {
            await confirm.confirm(code)
            navigation.navigate('Empty')
        } catch (e) {
            console.log('Invalid code: ' + e)
        }
    }

    return (
        <View className='flex-1 p-5'>
            <Text className='font-bold text-2xl my-10 mb-24 text-black'>Login With Your Email & Password</Text>
            <View className='px-10'>
                <CommonInput placeholder='Phone number' value={phoneNumber} onChangeText={(text) => { setPhoneNumber(text) }} />
                <CommonButton title={'Send Code'} onPress={() => handleSigninWithPhoneNumber(phoneNumber)} />

                <CommonInput placeholder='Confirmation Code' />
                <CommonButton title='Submit' onPress={() => confirmCode()} />

            </View>
        </View>
    )
}

export default Ex2