import React from 'react';
import styles from './styles'
import { ScrollView, View, Text } from 'react-native';
import Header from '../../components/Header';
import { useCart } from '../../contexts/CartContext';
import CartProductCard from '../../components/CartProductCard';

interface CartScreenProps {
  route?: any,
  navigation?: any
}

export default function Cart(props: CartScreenProps) {
  const {
    products
  } = useCart()

  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        route={props.route} />

      <View style={styles.mainContent}>
        <Text style={styles.topText}>
          {products.length} produtos adicionados:
        </Text>

        <ScrollView>
          <View>
            {products.map(product => {
              return (
                <CartProductCard {...product}
                  key={product.id} />
              )
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
