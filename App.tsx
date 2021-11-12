import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Products from './src/views/Products';
import Cart from './src/views/Cart';
import { CartContextProvider } from './src/contexts/CartContext';
import Header from './src/components/Header';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator()

export default function App() {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Products"
          screenOptions={{
            headerMode: "float",
            header: (props: any) => <Header {...props} />
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

      <StatusBar style="light"
        backgroundColor="#008f00" />
    </CartContextProvider>
  );
}
