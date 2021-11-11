import React, { useEffect, useState } from 'react';
import styles from './styles'
import { ScrollView, View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import axios from 'axios'
import useAlert from '../../utils/useAlert';

interface ProductsScreenProps {
  route?: any,
  navigation?: any
}

export default function Products(props: ProductsScreenProps) {
  const [products, setProducts] = useState([] as Array<any>)

  const getFlags = () => {
    axios.get("https://api.github.com/gists/1b6459152bfb1160a317b86395eb7013")
    .then(({ data }) => {
      let parsedProducts = JSON.parse(data.files['mockProducts.json'].content)

      setProducts(parsedProducts)
    })
    .catch(err => {
      console.error(err)

      useAlert({
        title: "Erro",
        message: "Houve um erro ao buscar as bandeiras"
      })
    })
  }

  useEffect(() => {
    getFlags()
  }, [getFlags])

  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        route={props.route} />
      
      <ScrollView>
        <View style={styles.productsList}>
          {products.map(product => {
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
