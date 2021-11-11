import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi'

interface HeaderProps {
    navigation?: any,
    route?: any
}

export default function Header(props: HeaderProps) {
  const onCartClick = () => {
    if(props.route.name === "Cart") return

    props.navigation.navigate("Cart")
  }

  const goBack = () => {
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {props.navigation.canGoBack() &&
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
              3
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00bf00',
    alignItems: 'center',
    padding: "1rem"
  },
  arrowBox: {
    flex: 1
  },
  cartIconBox: {
    flex: 1,
    position: "relative",
    alignItems: "flex-end"
  },
  cartIconBoxBadge: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    position: "absolute",
    top: "-6px",
    right: "-6px",
    width: "16px",
    height: "16px",
    borderRadius: 8
  },
  cartIconBoxText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 10
  }
});
