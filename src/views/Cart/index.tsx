import React from 'react';
import styles from './styles'
import { ScrollView, View, Text, Pressable } from 'react-native';
import Header from '../../components/Header';
import { useCart } from '../../contexts/CartContext';
import CartProductCard from '../../components/CartProductCard';

interface CartScreenProps {
  route?: any,
  navigation?: any
}

export default function Cart(props: CartScreenProps) {
  const {
    products,
    clearCart
  } = useCart()

  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        route={props.route} />

      <View style={styles.mainContent}>
        <Text style={styles.topText}>
          {products.length} produto{products.length > 1 && "s"} adicionado{products.length > 1 && "s"}:
        </Text>

        <ScrollView>
          <View>
            {products.map(product => {
              return (
                <CartProductCard {...product}
                  key={product.id} />
              )
            })}

            {products.length > 0 &&
              <Pressable onPress={clearCart}>
                <Text style={styles.dangerText}>
                  Limpar carrinho
                </Text>
              </Pressable>
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
