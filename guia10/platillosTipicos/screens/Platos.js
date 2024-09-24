import { Text, StyleSheet, View, TextInput, Button, Dimensions, FlatList, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width;

const Platos = ({ navigation }) => {

    const [platillos, setPlatillos] = useState([]);
    const [terminoBusqueda, setTermino] = useState("");
    const [bandera, setBandera] = useState(false);
    const [platillosEncontrados, setPlatilloEncontrado] = useState([]);

    useEffect(() => {
        traerPlatos();
    }, []);

    const traerPlatos = async () => {
        try {
            const response = await fetch('https://66f238f84153791915536647.mockapi.io/api/comida/comidas');
            const datos = await response.json();
            setPlatillos(datos);
        } catch (error) {
            console.log("Hubo un error ", error);
        }
    }

    const buscar = () => {
        let resultado = platillos.filter(item => item.nombre == terminoBusqueda.trim());

        if(resultado.length == 0){
            resultado = platillos.filter(item => item.tipo == terminoBusqueda.trim());
            console.log(resultado);
        }
        
        if(resultado.length == 0){
            for(let i = 0; i < platillos.length; i++){
                let ingredientes = platillos[i].ingredientes;
                let valor = ingredientes.filter(item => item === terminoBusqueda.trim());
                
                if(valor.length != 0){
                    resultado.push(platillos[i]);
                }
            }

        }
        if (resultado.length != 0){
            setPlatilloEncontrado(resultado);
            setBandera(true);
        }
        else{
            Alert.alert("Mensaje", "No se encontró el platillo típico");
            setBandera(false);
        }
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity style={styles.platoCard} onPress={() => navigation.navigate("DetallePlato", { plato: item })}>
            <View style={styles.platoInfo}>
                <Image source={{ uri: item.imagen }} style={styles.image} />
                <Text style={styles.nombre}>{item.nombre}</Text>
            </View>
        </TouchableOpacity>


    )

    return (
        <View style={styles.container}>
            <View style={styles.containersearch}>
                <TextInput placeholder='Buscar platillo' style={styles.textinput} onChangeText={texto => {
                    setTermino(texto);
                    if (texto == "")
                        setBandera(false);
                }} />
                <Button title="Buscar" onPress={buscar} />
            </View>
            {bandera == true ?
                (<>
                <FlatList
                    data={platillosEncontrados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.platoList}
                    numColumns={2}
                />
                </>
                )
                :
                (
                    <ScrollView>
                        <Text style={styles.tipos}>Desayunos</Text>
                        <FlatList
                            data={platillos.filter((item) => item.tipo == "Desayuno")}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.platoList}
                            numColumns={2}
                        />
                        <Text style={styles.tipos}>Almuerzos</Text>
                        <FlatList
                            data={platillos.filter((item) => item.tipo == "Almuerzo")}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.platoList}
                            numColumns={2}
                        />
                        <Text style={styles.tipos}>Cenas</Text>
                        <FlatList
                            data={platillos.filter((item) => item.tipo == "Cena")}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.platoList}
                            numColumns={2}
                        />
                        <Text style={styles.tipos}>Antojitos</Text>
                        <FlatList
                            data={platillos.filter((item) => item.tipo == "Antojito")}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.platoList}
                            numColumns={2}
                        />
                        <Text style={styles.tipos}>Para todo momento</Text>
                        <FlatList
                            data={platillos.filter((item) => item.tipo == "Para todo momento")}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.platoList}
                            numColumns={2}
                        />
                    </ScrollView>
                )}
        </View>
    )
}

export default Platos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    platoList: {
        padding: 10,
    },
    platoCard: {
        width: windowWidth / 2 - 15,
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    platoInfo: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
    },
    nombre: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    containersearch: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textinput: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 40,
        paddingLeft: 4,
        flex: 0.9
    },
    tipos: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});