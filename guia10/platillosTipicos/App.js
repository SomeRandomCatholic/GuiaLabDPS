import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Platos from './screens/Platos';
import DetallePlato from './screens/DetallePlato';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Platos'>
          <Stack.Screen name="Platos" component={Platos}/>
          <Stack.Screen name="DetallePlato" component={DetallePlato}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}

