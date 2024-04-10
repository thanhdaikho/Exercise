import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'
import CommonButton from '../../../components/Button'
const Lab6Bai1 = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text className='font-bold text-2xl mb-10'>Count: {count}</Text>
            <View className='flex-row'>
                <CommonButton title={'+1'} onPress={() => dispatch(increment())} />
                <CommonButton title={'-1'} onPress={() => dispatch(decrement())} />
            </View>
            <CommonButton title={'Reset'} onPress={() => dispatch(reset())} />
        </View>
    )

}

export default Lab6Bai1 