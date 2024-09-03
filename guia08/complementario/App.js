import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import StepsScreen from "./src/screens/StepsScreen";
import Carpeta from "./src/screens/Carpeta";


const App = () => {
  const steps = [
    { step: 1, description: 'Separa los materiales reciclables del resto de la basura.', image: 'https://scubica.s3.us-west-2.amazonaws.com/granatrio/116cbe68ebd776a3c7a4c058a3c74731.jpeg' },
    { step: 2, description: 'Lava los envases antes de reciclarlos.', image: 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/botella_de_agua_ok.jpg.webp?itok=RxfMGUsJ' },
    { step: 3, description: 'Identifica los contenedores de reciclaje de tu área.',image: 'https://assets.nabaliaenergia.com/site/blog/eres-capaz-de-distinguir-todos-los-contenedores-de-reciclaje.webp' },
    { step: 4, description: 'Coloca los materiales reciclables en los contenedores correspondientes.', image: 'https://img.freepik.com/foto-gratis/reciclaje-hombre-nino-tiro-medio_23-2148972910.jpg' },

  ]
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pasos de Reciclaje">
          {(props) => <StepsScreen {...props} steps={steps} />}
        </Stack.Screen>
        <Stack.Screen name="Carpeta" component={Carpeta}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;