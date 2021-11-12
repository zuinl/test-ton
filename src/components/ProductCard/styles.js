import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 15
  },
  image: {
    width: "100%",
    height: 150
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    marginHorizontal: 6
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 8
  },
  quantityBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },
  quantityIconBox: {
    height: 25
  },
  quantityText: {
    fontWeight: "bold",
    fontSize: 14
  }
});

export default styles