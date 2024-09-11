import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert, Button } from 'react-native';


const Listado = ({ route }) => {

    let { codigos, wishList } = route.params;
    const productos = require("../Productos.json");

    const renderProducto = ({ item }) => {

        let resultado = productos.filter(elemento => elemento.id == item.id);

        if (resultado.length == 0) {
            return (
                <View style={styles.elemento}>
                    <Text style={styles.titulo}>Sin Información</Text>
                    <Text>Producto de código {item.id} no encontrado.</Text>
                </View>
            )
        } else
            return (
                <TouchableOpacity style={styles.elemento} onLongPress={() => mostrarReseñas(resultado[0])}>
                    <View>
                    <Text style={styles.titulo}>{resultado[0].nombre}</Text>
                    <Text>Código del Producto: {resultado[0].id}</Text>
                    <Text>Marca: {resultado[0].marca}</Text>
                    <Text>Información: {resultado[0].descripcion}</Text>
                    <Text></Text>
                    <Button title="Añadir a la Lista de Deseos" onPress={() => addWishList(resultado[0])}></Button>
                    </View>
                </TouchableOpacity>
            )
    }

    const mostrarReseñas = (producto) => {
        let mensaje = "";
        producto.reseñas.forEach((element, indice) => {
            mensaje += `Reseña ${indice + 1}\nUsuario: ${element.usuario}\nComentario: ${element.comentario}\n\n`;
        });

        Alert.alert("Reseñas", mensaje);

    }

    const addWishList = producto => {

        if (wishList.filter(item => item.id == producto.id).length == 0) {
            wishList.push(producto);
            Alert.alert("Mensaje", "El producto ha sido añadido a la lista de deseos.");
        } else {
            Alert.alert("Error", "El producto ya había sido añadido a la lista de deseos.");
        }
    }

    if (codigos.length == 0)
        return (
            <View style={styles.container}>
                <Text>Sin productos escaneados</Text>
            </View>
        )
    else
        return (<View style={styles.container}>
            <Text style={styles.mensaje}>Manten presionado un producto para ver reseñas</Text>
            <Text style={styles.nota}>NOTA: La información se toma del JSON, que sirve de BD. Pruebe escaneando un código X y luego remplace alguno de las ID del JSON por ese código para ver todas las funciones</Text>
            <FlatList data={codigos} renderItem={renderProducto} />
        </View>)

}

export default Listado;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    elemento: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#fff',
        marginTop: 20,
        width: 300,
        padding: 13,
        borderRadius: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    mensaje: {
        fontSize: 20,
    },
    nota: {
        marginLeft: 20,
        marginRight: 20,
        textAlign: "justify"
    }
});