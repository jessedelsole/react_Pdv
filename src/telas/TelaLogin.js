import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { gray } from 'ansi-colors';

export default class TelaLogin extends React.Component {

  state = { usuario: '', senha: '' };



  static navigationOptions = {
    title: 'Por favor informe o usuário e a senha!',
  };

  render() {
    return (

          <View style={{ justifyContent: "center", alignItems: "center", flex: 1, flexDirection: 'column' }}>

            <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <Image style={{ width: 100, height: 50 }} source={require('./../../resources/images/ReactLogo.png')} resizeMode='stretch' ></Image>
              <Text style={{ color: '#1acedd', fontWeight: 'bold', fontSize: 17 }}>React PDV </Text>
            </View>

            <View style={{ padding: 20, justifyContent: "center", alignItems: "center", flex: 1, flexDirection: 'column', margin: 30, width: '100%' }} >

              <Text style={{ fontWeight: 'bold' }}>Usuário:</Text>
              <TextInput style={{ margin: 10, width: '100%', height: 50, borderColor: '#b6b6b6', borderWidth: 1 }}
                onChangeText={usuario => this.setState({ usuario })}
              ></TextInput>
              <Text style={{ fontWeight: 'bold' }}>Senha:</Text>
              <TextInput style={{ margin: 10, width: '100%', height: 50, borderColor: '#b6b6b6', borderWidth: 1 }}
                onChangeText={senha => this.setState({ senha })}
              ></TextInput>

              <View style={{ marginTop: 30 }}>
              </View>
            </View >

            <View style={{ margin: 10, width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 11 }}>Del Sole Sistemas</Text>
              <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 11 }}>V:1.1.0</Text>
            </View>


            <View style={{ padding: 20, width: '100%' }}>
              <Button onPress={this.btnLogarClick} title='Logar' />
            </View>
          </View>
       
    );
  }

  btnLogarClick = async () => {

    await AsyncStorage.setItem('userToken', 'abc');
    if (this.state.usuario == 'jesse' && this.state.senha == 'jessman') {

      global.usuarioLogado = this.state.usuario;
      this.props.navigation.navigate('NavAplicacao');

    } else {

      alert('Login inválido!');
    }

  };
}



