import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AND103 from './src/screens/AND103'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from './src/screens/MainScreen'
import Lab1Screen from './src/screens/AND103/Lab 1/Lab1Screen'
import Ex1 from './src/screens/AND103/Lab 1/Ex1'
import EmptyScreen from './src/screens/AND103/Lab 1/EmptyScreen'
import Ex2 from './src/screens/AND103/Lab 1/Ex2'
import CRO102 from './src/screens/CRO102'
import CROLab1 from './src/screens/CRO102/Lab 1/CROLab1'
import Main from './src/screens/CRO102/Lab 2/Main'
import MainLab3 from './src/screens/CRO102/Lab 3/MainLab3'
import Ex1Lab3 from './src/screens/CRO102/Lab 3/Ex1'
import Ex2Lab3 from './src/screens/CRO102/Lab 3/Ex2'
import Ex3Lab3 from './src/screens/CRO102/Lab 3/Ex3'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name='AND103' component={AND103} options={{headerShown:false}}/>
        <Stack.Screen name='Lab1AND' component={Lab1Screen} options={{headerShown:false}}/>
        <Stack.Screen name='Ex1' component={Ex1} options={{headerShown:false}} />
        <Stack.Screen name='Ex2' component={Ex2} options={{headerShown:false}} />
        <Stack.Screen name='Empty' component={EmptyScreen} options={{headerShown:false}} />
        <Stack.Screen name='CRO102' component={CRO102} options={{headerShown:false}}/>
        <Stack.Screen name='Lab1CRO' component={CROLab1} options={{headerShown:false}}/>
        <Stack.Screen name='Lab2CRO' component={Main} options={{headerShown:false}}/>
        <Stack.Screen name='Lab3CRO' component={MainLab3} options={{headerShown:false}}/>
        <Stack.Screen name='Ex1Lab3' component={Ex1Lab3} options={{headerShown:false}}/>
        <Stack.Screen name='Ex2Lab3' component={Ex2Lab3} options={{headerShown:false}}/>
        <Stack.Screen name='Ex3Lab3' component={Ex3Lab3} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
