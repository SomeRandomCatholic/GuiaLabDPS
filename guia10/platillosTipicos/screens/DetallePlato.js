import React from "react";
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const DetallePlato = ({route, navigation}) =>{
    const {plato} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Detales del Platillo</Text>
            <View style={styles.detailsContainer}>
                <Image source={{uri: plato.imagen}} style={styles.Image}/>
                <Text style={styles.label}>Nombre: {plato.nombre}</Text>
                <Text style={styles.label}>Categoría: {plato.tipo}</Text>
                <Text style={styles.label}>Ingredientes:</Text>
                {plato.ingredientes.map((item, index) => (
                    <Text>{index + 1}. {item}</Text>
                ))}
                <Text style={styles.label}>Tiempo de preparación: {plato.tiempo} minutos</Text>
                <Text style={styles.label}>Valor nutricional: {plato.calorias} cal</Text>
            </View>
            <Button title="Volver" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default DetallePlato;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailsContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 20,
        width: '80%',
    },
    label:{
        fontWeight: 'bold',
    },
    Image:{
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
        borderColor: '#000000'
    }
    
})