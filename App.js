import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import AND103 from './src/screens/AND103';
import Lab1Screen from './src/screens/AND103/Lab 1/Lab1Screen';
import Ex1 from './src/screens/AND103/Lab 1/Ex1';
import EmptyScreen from './src/screens/AND103/Lab 1/EmptyScreen';
import Ex2 from './src/screens/AND103/Lab 1/Ex2';
import CRO102 from './src/screens/CRO102';
import CROLab1 from './src/screens/CRO102/Lab 1/CROLab1';
import Main from './src/screens/CRO102/Lab 2/Main';
import MainLab3 from './src/screens/CRO102/Lab 3/MainLab3';
import Ex1Lab3 from './src/screens/CRO102/Lab 3/Ex1';
import Ex2Lab3 from './src/screens/CRO102/Lab 3/Ex2';
import Ex3Lab3 from './src/screens/CRO102/Lab 3/Ex3';
import Ex1Lab4 from './src/screens/CRO102/Lab 4/Ex1';
import MainLab4 from './src/screens/CRO102/Lab 4/MainLab4';
import Ex2Lab4 from './src/screens/CRO102/Lab 4/Ex2';
import store from './src/screens/CRO102/redux/store';
import MainLab6 from './src/screens/CRO102/Lab 6/MainLab6';
import RouteLab5 from './src/screens/AND103/Lab 5/RouteLab5';
import Lab5API from './src/screens/AND103/Lab 5/Lab5API';
import Lab5Search from './src/screens/AND103/Lab 5/Lab5Search';
import RouteLab6 from './src/screens/AND103/Lab 6/RouteLab6';
import Lab6Ex1 from './src/screens/AND103/Lab 6/Lab6Ex1';
import Lab6Ex2 from './src/screens/AND103/Lab 6/Lab6Ex2';
import RouteLab7 from './src/screens/AND103/Lab 7/RouteLab7';
import Lab7Ex1 from './src/screens/AND103/Lab 7/Lab7Ex1';
import Lab7Ex2 from './src/screens/AND103/Lab 7/Lab7Ex2';
import RouteLab8 from './src/screens/AND103/Lab 8/RouteLab8';
import Lab8Ex1 from './src/screens/AND103/Lab 8/Lab8Ex1';
import Lab6Bai1 from './src/screens/CRO102/Lab 6/Lab6Bai1';
import Lab6Bai2 from './src/screens/CRO102/Lab 6/Lab6Bai2';
import Lab8Main from './src/screens/CRO102/Lab 8/MainLab8';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name='AND103' component={AND103} options={{ headerShown: false }} />
          <Stack.Screen name='Lab1AND' component={Lab1Screen} options={{ headerShown: false }} />
          <Stack.Screen name='Ex1' component={Ex1} options={{ headerShown: false }} />
          <Stack.Screen name='Ex2' component={Ex2} options={{ headerShown: false }} />
          <Stack.Screen name='Empty' component={EmptyScreen} options={{ headerShown: false }} />
          <Stack.Screen name='CRO102' component={CRO102} options={{ headerShown: false }} />
          <Stack.Screen name='Lab1CRO' component={CROLab1} options={{ headerShown: false }} />
          <Stack.Screen name='Lab2CRO' component={Main} options={{ headerShown: false }} />
          <Stack.Screen name='Lab3CRO' component={MainLab3} options={{ headerShown: false }} />
          <Stack.Screen name='Ex1Lab3' component={Ex1Lab3} options={{ headerShown: false }} />
          <Stack.Screen name='Ex2Lab3' component={Ex2Lab3} options={{ headerShown: false }} />
          <Stack.Screen name='Ex3Lab3' component={Ex3Lab3} options={{ headerShown: false }} />
          <Stack.Screen name='Lab4CRO' component={MainLab4} options={{ headerShown: false }} />
          <Stack.Screen name='Ex1Lab4' component={Ex1Lab4} options={{ headerShown: false }} />
          <Stack.Screen name='Ex2Lab4' component={Ex2Lab4} options={{ headerShown: false }} />
          <Stack.Screen name='Lab6CRO' component={MainLab6} options={{ headerShown: false }} />
          <Stack.Screen name='Lab5AND' component={RouteLab5} options={{ headerShown: false }} />
          <Stack.Screen name='Lab5Ex1' component={Lab5API} options={{ headerShown: false }} />
          <Stack.Screen name='Lab5Ex2' component={Lab5Search} options={{ headerShown: false }} />
          <Stack.Screen name='Lab6AND' component={RouteLab6} options={{ headerShown: false }} />
          <Stack.Screen name='Lab6Ex1' component={Lab6Ex1} options={{ headerShown: false }} />
          <Stack.Screen name='Lab6Ex2' component={Lab6Ex2} options={{ headerShown: false }} />
          <Stack.Screen name='Lab7AND' component={RouteLab7} options={{ headerShown: false }} />
          <Stack.Screen name='Lab7Ex1' component={Lab7Ex1} options={{ headerShown: false }} />
          <Stack.Screen name='Lab7Ex2' component={Lab7Ex2} options={{ headerShown: false }} />
          <Stack.Screen name='Lab8AND' component={RouteLab8} options={{ headerShown: false }} />
          <Stack.Screen name='Lab8Ex1' component={Lab8Ex1} options={{ headerShown: false }} />
          <Stack.Screen name='Ex1Lab6' component={Lab6Bai1} options={{ headerShown: false }} />
          <Stack.Screen name='Ex2Lab6' component={Lab6Bai2} options={{ headerShown: false }} />
          <Stack.Screen name='Lab8' component={Lab8Main} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
