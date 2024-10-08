import react, { useState} from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";


const DetailsScreen = ({navigation }) => {
  
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Proyecto 1",
      manager: "Juan Pérez",
      contact: "juan@example.com",
      socialMedia: ["facebook", "x"],
    },
    {
      id: "2",
      name: "Proyecto 2",
      manager: "María González",
      contact: "maria@example.com",
      socialMedia: ["instagram", "linkedin"],
    },
    {
      id: "3",
      name: "Proyecto 3",
      manager: "Carlos Martínez",
      contact: "carlos@example.com",
      socialMedia: ["x", "linkedin"],
    },
  ]);




  const renderProjectItem = ({ item }) => (
    <View style={sytles.projectItem}>
      <View style={sytles.projectInfo}>
        <Text style={sytles.projectName}>{item.name}</Text>
        <Text>Encargado: {item.manager}</Text>
        <Text>Contacto: {item.contact}</Text>
      </View>
      <View style={sytles.socialMediaIcons}>
        {item.socialMedia.map((social, index) => (
          <Image key={index} source={getSocialMediaIcon(social)}  style={sytles.socialMediaIcon}/>
        ))}
      </View>
    </View>
  );

  const getSocialMediaIcon = (social) => {
    switch (social) {
      case "facebook":
        return require("../../assets/facebook.png");
      case "x":
        return require("../../assets/x.png");
      case "instagram":
        return require("../../assets/instagram.png");
      case "linkedin":
        return require("../../assets/linkedin.png");
      default:
        return null;
    };
  }
    return(
        <View style={sytles.container}>
            <Text style={sytles.title}>Lista de Proyectos de Reciclaje</Text>
            <FlatList 
            data={projects}
            renderItem={renderProjectItem}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
    )
};

export default DetailsScreen;

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    projectItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    projectInfo:{
        flex: 1,
    },
    projectName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    socialMediaIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialMediaIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    }
});
