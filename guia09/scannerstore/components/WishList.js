import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert, Button } from 'react-native';

const WishList = ({route}) => {

    let { wishList } = route.params;

    const renderProducto = ({ item }) => {

        return (
            <View style={styles.elemento} >
                <Text style={styles.titulo}>{item.nombre}</Text>
                <Text>Código del Producto: {item.id}</Text>
                <Text>Precio: ${item.precio}</Text>
                <Text>Cantidad disponible: {item.cantidad}</Text>
            </View>
        )
    }

    if (wishList.length == 0)
        return (
            <View style={styles.container}>
                <Text>Sin productos en la lista de deseos.</Text>
            </View>
        )
    else
        return (<View style={styles.container}>
            <FlatList data={wishList} renderItem={renderProducto} />
        </View>)
}

export default WishList;


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
    }
});