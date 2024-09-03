
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import NewProject from './NewProject';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


export default function Carpeta() {


    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
            <Drawer.Screen name="New Proyect" component={NewProject} />
        </Drawer.Navigator>
    );
}

