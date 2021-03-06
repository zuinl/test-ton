import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'flex-start',
    },
    mainContent: {
      paddingRight: 10,
      paddingLeft: 10
    },
    topText: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 12,
      marginBottom: 18
    },
    dangerText: {
      fontSize: 12,
      fontWeight: "500",
      marginTop: 16,
      color: "red",
      textAlign: "right"
    }
})

export default styles