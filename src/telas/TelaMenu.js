import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class TelaMenu extends React.Component {

  static navigationOptions = {
    title: 'Menu-Principal...',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Log-Out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('NavLogin');
  };
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });