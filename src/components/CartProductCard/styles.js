import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 14
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left"
  },
  iconBox: {
    flex: 1,
    alignItems: "flex-end"
  }
});

export default styles