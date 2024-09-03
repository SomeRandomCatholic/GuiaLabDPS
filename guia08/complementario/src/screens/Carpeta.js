import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import NewProject from './NewProject';
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const images = [
    {
        id: 1,
        source:
            "https://img.freepik.com/vector-gratis/seminario-web-concepto-ecologia-diseno-plano_23-2149849805.jpg?t=st=1710429154~exp=1710432754~hmac=c7572519e4a7ce837e9d25cc1e61af6dc36a8e44ad5c9e811b91669fedb406a0&w=1060",
        description: "Reduce, reutiliza, Recicla",
        info: "Descubre como puedes contribuir al cuidado del medio ambiente con simples acciones en tu hogar",
    },
    {
        id: 2,
        source:
            "https://img.freepik.com/vector-gratis/ninos-plantando-arboles-utilizando-energia-renovable-naturaleza-energia-solar-panel-solar-turbina-eolica_1150-43076.jpg?t=st=1710428866~exp=1710432466~hmac=01a424413ed4cd6bed139bb08c5ff1e75e8827a32c76cc7eff6a0a23d88b3510&w=1060",
        description: "Reciclaje en tu Comunidad",
        info: "Conoce programas de reciclaje en tu area, y participa activamente para mejorar tu entorno.",
    },
];

export default function Carpeta() {
    const [proyectos, setProyectos] = useState([]);

    
    const proyectosIniciales = async () => {
        try {
            await AsyncStorage.setItem('proyectos', JSON.stringify(images));
        } catch (error) {
            console.log(error);
        }
        console.log("Me he ejecutado");
    }

    if(proyectos.length == 0){
        proyectosIniciales();
    }

    const obtenerProyectos = async () => {
        try {
            const proyectosStorage = await AsyncStorage.getItem('proyectos');
            if (proyectosStorage) {
                setProyectos(JSON.parse(proyectosStorage));
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const guardarProyecto = async (nuevos) => {
        try {
            await AsyncStorage.setItem('proyectos', nuevos);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerProyectos();

    }, []);

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} initialParams={{ firstParameter: 2}} />
                <Drawer.Screen name="Details" component={DetailsScreen} />
                <Drawer.Screen name="New Proyect" component={NewProject} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

