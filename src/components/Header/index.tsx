import React from 'react';
import { View, Pressable, Text } from 'react-native';

import styles from './styles'

import { useCart } from '../../contexts/CartContext';

import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi'

interface HeaderProps {
  route?: any,
  navigation?: any
}

export default function Header(props: HeaderProps) {
  const {
    IDsList
  } = useCart()

  const onCartClick = () => {
    if(!props.navigation) return

    if(props.route?.name === "Cart") return

    props.navigation.navigate("Cart")
  }

  const goBack = () => {
    if(!props.navigation) return
    
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {props.navigation?.canGoBack() &&
        <Pressable onPress={goBack}
          style={styles.arrowBox}>
          <View>
            <FiArrowLeft size="22" color="#FFF" />
          </View>
        </Pressable>
      }

      <Pressable onPress={onCartClick}
        style={styles.cartIconBox}>
        <View>
          <FiShoppingCart size="22" color="#FFF" />

          <View style={styles.cartIconBoxBadge}>
            <Text style={styles.cartIconBoxText}>
              {IDsList.length}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}