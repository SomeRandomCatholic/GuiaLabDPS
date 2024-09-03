import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import react, { useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

const NewProject = ({proyectos, setProyectos, guardarProyecto}) => {
    const [imageSource, setImageSource] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [info, setInfo] = useState("");

    const registrarProyecto = () =>{
        if(imageSource === '' || descripcion === '' || info === ''){
            //Alert.alert("Error", "Debes llenar todos los parámetros");
            //return;
        }

        const nuevoProyecto = [{source: imageSource, description: descripcion, info: info}];
        const nuevos = [... proyectos, nuevoProyecto];
        setProyectos(nuevos);

        guardarProyecto(JSON.stringify(nuevos));

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevo Proyecto de Reciclaje</Text>
            <View>
                <Text>Ingresa la información correspondiente: </Text>
                <View>
                    <Text style={styles.label}>Fuente de la imagen:</Text>
                    <TextInput onChangeText={(texto) => setImageSource(texto)} style={styles.input} />
                </View>
                <View>
                    <Text style={styles.label}>Descripción del proyecto:</Text>
                    <TextInput onChangeText={(texto) => setDescripcion(texto)} style={styles.input} />
                </View>
                <View>
                    <Text style={styles.label}>Información del proyecto:</Text>
                    <TextInput onChangeText={(texto) => setInfo(texto)} multiline style={styles.input} />
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