import React, { Component, useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import CommonInput from '../../../components/TextInput';
import CommonButton from '../../../components/Button';
import auth from '@react-native-firebase/auth'
const Ex1 = ({navigation}) => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const handleSignin = () => {
        auth()
            .createUserWithEmailAndPassword(emailInputValue, passwordInputValue)
            .then(() => {
                console.log('Create user successful')
            })
            .then(() => navigation.navigate('Empty'))
            .catch(error => {
                if (error.code === 'auth/email-already in use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            })
    }
    return (
        <ScrollView>
            <View className='flex-1 p-5'>
                <Text className='font-bold text-2xl my-10 mb-24 text-black'>Login With Your Email & Password</Text>
                <View>
                    <CommonInput
                        placeholder={'Email'}
                        value={emailInputValue}
                        onChangeText={(text) => { setEmailInputValue(text) }}
                        secureTextEntry={null} />
                    <CommonInput
                        placeholder={'Password'}
                        value={passwordInputValue}
                        onChangeText={(text) => setPasswordInputValue(text)}
                        secureTextEntry={secureTextEntry} />
                </View>
                <CommonButton title={'Sign in'} onPress={handleSignin} />
            </View>
        </ScrollView>
    )
}

export default Ex1
