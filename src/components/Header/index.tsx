import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
    navigation?: any,
    route?: any,
    options?: any,
    back?: any
}

export default function Header(props: HeaderProps) {
  const title = getHeaderTitle(props.options, props.route.name)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bf00',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "1rem"
  },
  title: {
      color: "#FFF",
      fontWeight: "500",
      fontSize: 16,
      textTransform: "uppercase"
  }
});
