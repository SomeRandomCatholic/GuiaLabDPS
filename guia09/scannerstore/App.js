import { LogBox, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Barcodescanner from './components/Barcodescanner';
import Listado from './components/Listado';
import WishList from './components/WishList';
import { Icon } from 'react-native-elements';


const Tab = createBottomTabNavigator();

export default function App() {

  let codigos = [];
  let wishList = [];

  const guardar = (valorN) => {

    if (codigos.filter(item => item.id == valorN).length == 0) {
      const nuevo = { id: valorN };
      codigos.push(nuevo);
    } else {
      Alert.alert("Error", "El producto ya había sido añadido.");
    }
  }

  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Escanear código" component={Barcodescanner} initialParams={{ guardar }} options={
          {
            tabBarIcon: ({ color, size }) => {
              return (<Icon name="qr-code" color={color} size={size} />)
            }
          }} />
        <Tab.Screen name="Productos escaneados" component={Listado} initialParams={{ codigos, wishList }} options={
          {
            tabBarIcon: ({ color, size }) => {
              return (<Icon name="inventory" color={color} size={size} />)
            }
          }}/>
        <Tab.Screen name="Lista de deseos" component={WishList} initialParams={{ wishList }} options={
          {
            tabBarIcon: ({ color, size }) => {
              return (<Icon name="favorite" color={color} size={size} />)
            }
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


