import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";


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

const HomeScreen = ({navigation }) => {

  const [proyectos, setProyectos] = useState([]);

  const proyectosIniciales = async () => {
    try {
      await AsyncStorage.setItem('proyectos', JSON.stringify(images));
    } catch (error) {
      console.log(error);
    }
  }

  if (proyectos.length == 0) {
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

  useEffect(() => {
    obtenerProyectos();
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.bannerTitle}>Bienvenido a Reciclaje Eco</Text>
          <Text style={styles.bannerText}>
            Ayudamos a cuidar el medio ambiente a través del reciclaje. ¡Únete a
            nosotros!
          </Text>
          <Button
            title="Ir a Detalles"
            onPress={() => {
              navigation.navigate('Details');
            }}
          />
          <Text></Text>
          <Text style={styles.bannerText}>
            Puedes añadir un nuevo proyecto en la pestaña "Nuevo Proyecto"
          </Text>
          <Button
            title="Ir a Nuevo Proyecto"
            onPress={() => navigation.navigate("New Proyect")}
          />
        </View>

        <View style={styles.featured}>
          <Text style={styles.featuredTitle}>Destacado</Text>
          {
            proyectos.map((image) => (
              <TouchableOpacity key={image.id} style={styles.featuredItem}>
                <Image
                  source={{ uri: image.source }}
                  style={styles.featuredImage}
                />
                <Text style={styles.featuredItemTitle}>{image.description}</Text>
                <Text style={styles.featureditemText}>{image.info}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: 20,
    backgroundColor: "#CEFFF25",
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  bannerText: {
    fontSize: 16,
    color: "#000000",
  },
  bannerButton: {
    backgroundColor: "#ffff00",
    fontSize: 16,
    color: "#000000",
  },
  featured: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featuredItem: {
    marginBottom: 20,
  },
  featuredImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  featuredItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  featureditemText: {
    fontSize: 16,
  },
});
