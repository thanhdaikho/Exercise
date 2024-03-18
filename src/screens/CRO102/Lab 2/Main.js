import React, { Component, useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Main = () => {
    const colors = ['white, gray, yellow, blue, red, orange']
    const [user, setUser] = useState<UserType>(null)
    const [lastTimeUpdate, setLastTimeUpdate] = useState('')
    const [footerColor, setFooterColor] = useState(colors[0])
    const handleUpdateInfor = useCallback((_user) => {
        setUser(_user)
    })
    // const handleRandomColor = useCallback(() => {
    // })
    return (
        <View>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}

export default Main
export type UserType = { 
    name: string,
    avatar: string
}