import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import { View, Text, Pressable, Image } from 'react-native';
import { useCart } from '../../contexts/CartContext';

import ProductProps from '../../interfaces/Product';
import useAlert from '../../utils/useAlert';

import styles from './styles';

export default function CartProductCard(props: ProductProps) {
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
      />

      <Text style={styles.name}>
        {props.name}
      </Text>

      <Pressable onPress={onRemove}
        style={styles.iconBox}>
        <View>
          <FiXCircle size="26" color="red" />
        </View>
      </Pressable>
    </View>
  );
}