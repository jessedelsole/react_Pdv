import React from 'react';
import {

  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TelaCheckout extends React.Component {

  static navigationOptions = {
    title: 'C',
  };

  render() {
    return (
      <View style={styles.container}>
       <Text>Tela checkout</Text>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });