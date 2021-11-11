import React from 'react';
import styles from './styles'
import { ScrollView, View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import mockProducts from '../../mock/mockProducts';

interface ProductsScreenProps {
  route?: any,
  navigation?: any
}

export default function Products(props: ProductsScreenProps) {
  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        route={props.route} />
      
      <ScrollView>
        <View style={styles.productsList}>
          {mockProducts.map(product => {
            return (
              <ProductCard {...product}
                key={product.id} />
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}
