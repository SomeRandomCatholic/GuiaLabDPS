import React, { useState, useEffect, act } from "react";
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";

const PaginaDetalle = ({ route, navigation }) => {

    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const uri = "";
    const endpoint = `${uri}/productos/${route.params?.id}`;

    useEffect(() => {

        console.log(route.params?.id);
        if (route.params?.id) {
            obtenerProducto();
        }
    }, [route.params?.id]);

    const isValidNombre = (name) => /^[A-Za-z\s]+$/.test(name);
    const isValidCantidad = (cant) => /^\d+$/.test(cant);
    const isValidPrice = (price) => /^([0-9]+\.?[0-9]{0,2})$/.test(price);

    const obtenerProducto = async () => {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();

            if (response.ok && data) {
                setProducto(data.productos[0]);
                setCargando(false);
            } else
                throw new Error("No se pudieron obtener los datos del producto");
        } catch (error) {
            console.error("Error al obtener el producto: ", error);
            setError("Error al cargar el producto. Intenta de nuevo");
            setCargando(false);
        }
    }

    const actualizar = () => {

        if (!isValidNombre(producto.nombre)) {
            Alert.alert("Error", "Nombre inválido. Debe contener solo letras y espacios");
            return;
        }

        if (!isValidCantidad(producto.cantidad)) {
            Alert.alert("Error", "Cantidad inválida. Debe contener solo números y enteros.");
            return;
        }

        if (!isValidPrice(producto.precio_costo) || !isValidPrice(producto.precio_venta)) {
            Alert.alert("Error", "Precio inválido. Debe contener solo dos decimales");
            return;
        }

        const body = {
            name: producto.nombre,
            description: producto.descripcion,
            price_costo: parseFloat(producto.precio_costo),
            price_sale: parseFloat(producto.precio_venta),
            quantity: parseInt(producto.cantidad, 10),
            image: producto.fotografia,
        };

        fetch(`${uri}/productos/${route.params?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta: " + response.statusText);
                }
                return response.json();
            })
            .then((responseJson) => {
                console.log('Respuesta del servidor: ', responseJson);
                const mensaje = responseJson.message;
                if (!mensaje) {
                    Alert.alert("Error", "Error al actualizar");
                } else {
                    Alert.alert("Actualización", mensaje);
                    navigation.goBack();
                }
            })
            .catch((error) => {
                console.error("Error al actualizar: ", error);
                Alert.alert("Error", "Error de internet!! " + error.message);
            });
    }

    const eliminar = () => {

        Alert.alert("Eliminar Producto", "¿Estás seguro de que deseas eliminar este producto?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar", onPress: () => {
                        fetch(`${uri}/productos/${route.params?.id}`, {
                            method: "Delete",
                            headers: { "Content-Type": "application/json" },
                        })
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(`Error en la respuest: ${response.statusText}`);
                                }
                                return response.json();
                            })
                            .then((responseJson) => {
                                console.log("Respuesta del servidor: ", responseJson);
                                const mensaje = responseJson.message;

                                if (!mensaje)
                                    Alert.alert("Error", "Error al eliminar");
                                else {
                                    Alert.alert("Eliminación", mensaje);
                                    navigation.goBack();
                                }
                            })
                            .catch((error) => {
                                console.error("Error al eliminar: ", error);
                                Alert.alert("Error", "Error de Internet!!" + error.message);
                            });
                    }
                }
            ],
            { cancelable: false }
        );
    }

    if (cargando) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando producto ... </Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.loadingContainer}>
                <Text>{error}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrolloview}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={actualizar}>
                        <Text style={styles.buttonText}>Actualizar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={eliminar}>
                        <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsContainer}>
                    <Input label="Nombre" value={producto.nombre} onChangeText={text => setProducto({...producto, nombre: text})}/>
                    <Input label="Descripción" value={producto.descripcion} onChangeText={text => setProducto({...producto, descripcion: text})}/>
                    <Input label="Precio de costo" value={producto.precio_costo?producto.precio_costo.toString() : ""} onChangeText={text => setProducto({...producto, precio_costo: text})}/>
                    <Input label="Precio de venta" value={producto.precio_venta ? producto.precio_venta.toString() : ''} onChangeText={text => setProducto({...producto, precio_venta: text})}/>
                    <Input label="Cantidad" value={producto.cantidad ? producto.cantidad.toString() : ""} onChangeText={text => setProducto({...producto, cantidad: text})}/>
                    <Input label="Fotografía" value={producto.fotografia} onChangeText={text => setProducto({...producto, fotografia: text})}/>
                    <Image style={styles.image} source={{uri: producto.fotografia}}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default PaginaDetalle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrolloview: {
        flex: 1,
        padding: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        flex: 1,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    detailsContainer:{
        flex: 1,
    },
    image:{
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 10,
    },
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})