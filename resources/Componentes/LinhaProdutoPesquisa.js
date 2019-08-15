import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class LinhaProdutoPesquisa extends React.Component {


  render() {

    descricaoProduto = this.props.descricaoProduto;
    qtd = this.props.qtd;

    index = this.props.index;

    return (
      <View style={{
        flex: 1, height: 40, justifyContent: 'center', borderWidth: 0.3, borderBottomColor: '#d4d4d4',
        flexDirection: 'row'
      }}>

        <Text style={{ fontSize: 18, marginLeft: 10, flex: 7 }}>{descricaoProduto}</Text>
        <View style={{ flex: 1 }}>
          <Button title='+'
            onPress={() => { this.props.btnMaisPress(this.props.index) }}>
          </Button>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} ><Text>{qtd}</Text>
        </View>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Button title='-'
           onPress={() => { this.props.btnMenosPress(this.props.index) }}>
          >
          </Button>
        </View>
      </View>
    );
  }


}