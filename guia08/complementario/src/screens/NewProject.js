import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import react, { useEffect, useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';


const NewProject = ({navigation}) => {
    const [imageSource, setImageSource] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [info, setInfo] = useState("");
    const [proyectos, setProyectos] = useState([]);

    const obtenerProyectos = async ()=> {

        try {
            const proyectosStorage = await AsyncStorage.getItem('proyectos');
            if (proyectosStorage) {
                setProyectos(JSON.parse(proyectosStorage));
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const registrarProyecto = () =>{
        if(imageSource === '' || descripcion === '' || info === ''){
            Alert.alert("Error", "Debes llenar todos los parámetros");
            return;
        }
        const id = proyectos.length + 1;

        const nuevoProyecto = {id: id, source: imageSource, description: descripcion, info: info};
        const nuevos = [... proyectos, nuevoProyecto];;
        setProyectos(nuevos);
        guardarProyecto(JSON.stringify(nuevos));
        setImageSource("");
        setInfo("");
        setDescripcion("");
    }

    const guardarProyecto = async (nuevos) => {
        try {
            await AsyncStorage.setItem('proyectos', nuevos);
            navigation.navigate("Home");
        
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerProyectos();
      }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevo Proyecto de Reciclaje</Text>
            <View>
                <Text>Ingresa la información correspondiente: </Text>
                <View>
                    <Text style={styles.label}>Fuente de la imagen:</Text>
                    <TextInput onChangeText={texto => setImageSource(texto)} style={styles.input} value={imageSource === "" ? '' : imageSource} />
                </View>
                <View>
                    <Text style={styles.label}>Descripción del proyecto:</Text>
                    <TextInput onChangeText={texto => setDescripcion(texto)} style={styles.input} value={descripcion === "" ? '' : descripcion} />
                </View>
                <View>
                    <Text style={styles.label}>Información del proyecto:</Text>
                    <TextInput onChangeText={texto => setInfo(texto)} multiline style={styles.input} value={info === "" ? '' : info}/>
                </View>

                <View>
                    <TouchableHighlight onPress={() => registrarProyecto()} style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Guardar Proyecto</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#1181BF',
        marginVertical: 10,
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },

});
export default NewProject;