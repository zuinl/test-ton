import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      height: 50,
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

export default styles