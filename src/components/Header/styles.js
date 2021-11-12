import { StatusBar, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      height: 50,
      width: "100%",
      flexDirection: 'row',
      backgroundColor: '#00bf00',
      alignItems: 'center',
      padding: 10,
      marginTop: StatusBar.currentHeight
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
      top: 0,
      right: 0,
      width: 16,
      height: 16,
      borderRadius: 8
    },
    cartIconBoxText: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 10
    }
});

export default styles