import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
/*import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Details" component={DetailsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

*/
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen}/>
        <Tab.Screen name="Perfil" component={DetailsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}