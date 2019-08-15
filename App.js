import TelaCarregando from './src/telas/TelaCarregando';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import TelaLogin from './src/telas/TelaLogin';
import TelaPrincipal from './src/telas/TelaPrincipal';
import TelaMenu from './src/telas/TelaMenu';
import TelaCheckout from './src/telas/TelaCheckout';

const NavigatorAplicacao = createStackNavigator({ NavPrincipal: TelaPrincipal,NavCheckout:TelaCheckout, NavMenu: TelaMenu });



export default createAppContainer( createSwitchNavigator(
  {
    NavCarregando   : TelaCarregando,
    NavLogin        : TelaLogin,
    NavAplicacao    : NavigatorAplicacao,
  },
  {
    initialRouteName: 'NavCarregando',
  }
));


