import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ProductCardProps {
    name: string,
    image?: any,
    id: any
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <View style={styles.container}>
      <Text>Oi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    padding: "1rem"
  }
});
