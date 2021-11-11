import React from 'react';
import styles from './styles'
import { ScrollView, View } from 'react-native';
import Header from '../../components/Header';

interface CartScreenProps {
  route?: any,
  navigation?: any
}

export default function Cart(props: CartScreenProps) {
  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        route={props.route} />
      
      <ScrollView>
        <View style={styles.productsList}>
          
        </View>
      </ScrollView>
    </View>
  );
}
