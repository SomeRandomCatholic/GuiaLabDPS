import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Dimensions, StyleSheet, Button, Alert } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const ListaPaises = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    const [terminoBusqueda, setTermino] = useState("");
    const [paisEncontrado, setPaisEncontrado] = useState();
    const [bandera, setBandera] = useState(false);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://65f9be823909a9a65b1942ac.mockapi.io/paises');
            const data = await response.json();
            setCountries(data);

        } catch (error) {
            console.log("Error fetching countries", error);
        }
    }

    const buscar = () => {
        let resultado = countries.filter(item => item.nombre.espanol == terminoBusqueda.trim())[0];

        if(!resultado){
            resultado = countries.filter(item => item.codigo_pais == terminoBusqueda.trim())[0];
        }
        
        if (resultado){
            setPaisEncontrado(resultado);
            setBandera(true);
        }
        else{
            Alert.alert("Mensaje", "No se encontró el país");
            setBandera(false);
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.countryCard} onPress={() => navigation.navigate("DetallePais", { country: item })}>
            <View style={styles.countryInfo}>
                <Image source={{ uri: item.bandera }} style={styles.flagImage} />
                <Text style={styles.countryName}>{item.nombre.espanol}</Text>
            </View>
        </TouchableOpacity>
    );

    return (

        <View style={styles.container} >
            <View style={styles.containersearch}>
                <TextInput placeholder='Buscar por país o código' style={styles.textinput} onChangeText={texto => {
                    setTermino(texto);
                    if(texto == "")
                        setBandera(false);
                }} />
                <Button title="Buscar" onPress={buscar} />
            </View>
            {bandera == true ?
                (<TouchableOpacity style={styles.countryCard} onPress={() => navigation.navigate("DetallePais", { country: paisEncontrado })}>
                    <View style={styles.countryInfo}>
                        <Image source={{ uri: paisEncontrado.bandera }} style={styles.flagImage} />
                        <Text style={styles.countryName}>{paisEncontrado.nombre.espanol}</Text>
                    </View>
                </TouchableOpacity>)
                :
                (<FlatList
                    data={countries}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.countryList}
                    numColumns={2} // Muestra dos países por fila
                />)}

        </View>
    )
}

export default ListaPaises;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    countryList: {
        padding: 10,
    },
    countryCard: {
        width: windowWidth / 2 - 15,
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    countryInfo: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    flagImage: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
    },
    countryName: {
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

});