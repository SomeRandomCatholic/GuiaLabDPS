import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Card } from '@rneui/themed';


const datos = require('./datos.json');

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Contenido Calórico de las Comidas Típicas Salvadoreñas</Text>
      <ScrollView>
        {datos.map((elemento, indice) => {
          return (
            <Card key={indice}>
              <View style={styles.tarjeta}>
                <Image style={styles.image} source={{ uri: elemento.imagen }}></Image>
                <View style={styles.info}>
                  <Card.Title>{elemento.nombre}</Card.Title>
                  <Text>{elemento.calorias} cal/unidad</Text>
                </View>
              </View>
            </Card>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
  },
  tarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 180,
    height: 180,
  },
  info:{
    alignItems: 'center',
  }
});
