import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  FlatList
} from 'react-native';

import * as colors from './../../resources/constants/colors'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import LinhaProdutoPesquisa from '../../resources/Componentes/LinhaProdutoPesquisa';

export default class TelaPrincipal extends React.Component {
  state = {
    usuarioLogado: '',
    produtos: []
  }

  static navigationOptions = {
    header: null
  };

  produtos = [];

  componentDidMount() {

    for (i = 1; i <= 50; i++) {
      this.produtos.push({ key: i.toString(), nome: 'Produto ' + i, qtd: 0 });
    }
    this.produtos[1].qtd++

    this.setState({ produtos: this.produtos });
  }


  render() {
    return (
      <SafeAreaView style={[styles.container, { flexDirection: 'column' }]}>
        <View style={{ width: '100%', backgroundColor: colors.LightBlue, flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1.5, height: '100%', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', margin: 10 }} >React PDV - Tela de venda</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.btnMenuClick}>
              <Image style={{ width: 32, height: 32, margin: 5 }} source={require('./../../resources/images/menu.png')} ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '100%', flex: 7 }}>

          <FlatList
            style={{ flex: 1, width: '100%', margin: 2, marginRight: 50, borderColor: '#d4d4d4' }}
            data={this.state.produtos}
            renderItem={({ item }) =>
              <LinhaProdutoPesquisa
                descricaoProduto={item.nome}
                qtd={item.qtd}
                index={item.key}
                btnMaisPress={(index) => {
                 
                  this.produtos[index-1].qtd++
                  this.setState({ produtos: this.produtos })
                }}
                
                btnMenosPress={(index) => {
                 
                  if (this.produtos[index-1].qtd>0){
                    this.produtos[index-1].qtd--
                    this.setState({ produtos: this.produtos })
                  }
                }}>

              </LinhaProdutoPesquisa>}>

          </FlatList>
        </View>

        <View style={{ width: '100%', backgroundColor: 'white', flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
          <Button title='CheckOut >' 
          onPress={this.btnCheckoutClick}></Button>
        </View>

        <View style={{ width: '100%', backgroundColor: 'gray', flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 15 }}>Usuário Logado : {global.usuarioLogado} </Text>
        </View>
      </SafeAreaView>
    );
  }

  btnMenuClick = () => {
    this.props.navigation.navigate('NavMenu');
  };

  btnCheckoutClick = ()=> {
    this.props.navigation.navigate('NavCheckout')
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});