import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { useCart } from '../../contexts/CartContext';
import useAlert from '../../utils/useAlert';

import ProductProps from '../../interfaces/Product';

import commonStyles from '../../styles/commonStyles';
import styles from './styles';

export default function ProductCard(props: ProductProps) {
  const {
    IDsList,
    addProduct,
    removeProduct
  } = useCart()
  
  const onAdd = () => {
    addProduct(props)

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

      {IDsList.includes(props.id) ?
        <Pressable style={commonStyles.dangerButton}
          onPress={onRemove}>
          <Text style={commonStyles.buttonText}>
            Remover do carrinho
          </Text>
        </Pressable>
      :
        <Pressable style={commonStyles.primaryButton}
          onPress={onAdd}>
          <Text style={commonStyles.buttonText}>
            Adicionar ao carrinho
          </Text>
        </Pressable>
      }
    </View>
  );
}