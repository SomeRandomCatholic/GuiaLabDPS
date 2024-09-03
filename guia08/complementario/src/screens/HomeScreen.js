import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";



export default function HomeScreen(route, navigation) {

  //const {proyectos, setProyectos, obtenerProyectos} = navigation.params || {};
  
  //obtenerProyectos();
  const {firstParameter} = route.params || {};
  console.log(easy);
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
            onPress={() => navigation.navigate("Details")}
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
          /*proyectos.map((image) => (
            <TouchableOpacity key={image.id} style={styles.featuredItem}>
              <Image
                source={{ uri: image.source }}
                style={styles.featuredImage}
              />
              <Text style={styles.featuredItemTitle}>{image.description}</Text>
              <Text style={styles.featureditemText}>{image.info}</Text>
            </TouchableOpacity>
          ))*/} 
        </View>
      </View>
    </ScrollView>
  );
}

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
