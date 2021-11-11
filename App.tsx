import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Header from './src/components/Header';

import Products from './src/views/Products';
import Cart from './src/views/Cart';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Products"
        screenOptions={{
          header: Header
        }}
      >
        <Stack.Screen name="Products" component={Products}
          options={{
            title: "Produtos"
          }} />
        <Stack.Screen name="Cart" component={Cart}
          options={{
            title: "Carrinho"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
