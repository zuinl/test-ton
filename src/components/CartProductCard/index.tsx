import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import { View, Text, Pressable, Image } from 'react-native';
import { useCart } from '../../contexts/CartContext';
import CartProductProps from '../../interfaces/CartProduct';
import useAlert from '../../utils/useAlert';

import styles from './styles';

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
      />

      <Text style={styles.name}>
        {`${props.name} (${props.quantity})`}
      </Text>

      <Text style={styles.price}>
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: props.currency }).format(props.price * props.quantity)}
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