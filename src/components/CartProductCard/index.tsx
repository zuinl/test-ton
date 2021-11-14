import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import { useCart } from '../../contexts/CartContext'

import CartProductProps from '../../interfaces/CartProduct'

import useAlert from '../../utils/useAlert'

import styles from './styles'

import { AntDesign } from '@expo/vector-icons'

export default function CartProductCard(props: CartProductProps) {
  const {
    removeProduct
  } = useCart()

  const onRemove = () => {
    removeProduct(props.id)

    useAlert({
      title: "Removido",
      message: "Produto removido do carrinho"
    })
  }

  const imageSource = props.image ?
    { uri: props.image } :
    require("../../../assets/photo_placeholder.png")
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imageSource}
        testID="product-image"
      />

      <Text style={styles.name}>
        {`${props.name} (${props.quantity})`}
      </Text>

      <Text style={styles.price}
        testID="product-price">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: props.currency }).format(props.price * props.quantity)}
      </Text>

      <Pressable onPress={onRemove}
        style={styles.iconBox}
        testID="remove-icon">
        <View>
          <AntDesign name="closecircleo" size={28} color="red" />
        </View>
      </Pressable>
    </View>
  )
}