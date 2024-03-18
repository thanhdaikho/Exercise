import React, { Component } from 'react'
import { Text, View } from 'react-native'

type HeaderType = {
    user: UserType
}
const Header = () => {
    return (
        <View>
            <Text>Header</Text>
        </View>
    )
}

export default Header