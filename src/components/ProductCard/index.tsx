import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import { useCart } from '../../contexts/CartContext'
import useAlert from '../../utils/useAlert'

import ProductProps from '../../interfaces/Product'

import commonStyles from '../../styles/commonStyles'
import styles from './styles'

import { AntDesign } from '@expo/vector-icons'

export default function ProductCard(props: ProductProps) {
  const [quantity, setQuantity] = useState(1)

  const {
    IDsList,
    addProduct,
    removeProduct
  } = useCart()
  
  const onAdd = () => {
    addProduct({
      ...props,
      quantity
    })

    useAlert({
      title: "Adicionado",
      message: "Produto adicionado ao carrinho"
    })
  }

  const onRemove = () => {
    removeProduct(props.id)

    useAlert({
      title: "Removido",
      message: "Produto removido do carrinho"
    })
  }

  const minusQuantity = () => {
    if(quantity === 1) return

    setQuantity(quantity - 1)
  }

  const plusQuantity = () => {
    setQuantity(quantity + 1)
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
        {props.name}
      </Text>

      <Text style={styles.price}
      testID="product-price">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: props.currency }).format(props.price)}
      </Text>

      {!IDsList.includes(props.id) &&
        <View style={styles.quantityBox}>
          <Pressable onPress={minusQuantity}
            style={styles.quantityIconBox}>
            <AntDesign name="minus" size={22} color="#000" />
          </Pressable>
          <Text>
            {quantity}
          </Text>
          <Pressable onPress={plusQuantity}
            style={styles.quantityIconBox}>
            <AntDesign name="plus" size={22} color="#000" />
          </Pressable>
        </View>
      }

      {IDsList.includes(props.id) ?
        <Pressable style={commonStyles.dangerButton}
          onPress={onRemove}>
          <Text style={commonStyles.buttonText}>
            Remover do carrinho
          </Text>
        </Pressable>
      :
        <Pressable style={commonStyles.primaryButton}
          onPress={onAdd}
          testID="add-cart-button">
          <Text style={commonStyles.buttonText}>
            Adicionar ao carrinho
          </Text>
        </Pressable>
      }
    </View>
  )
}