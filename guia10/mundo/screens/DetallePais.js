import React from "react";
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const DetallePais = ({route, navigation}) =>{
    const {country} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Detales del País</Text>
            <View style={styles.detailsContainer}>
                <Image source={{uri: country.bandera}} style={styles.flagImage}/>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.label}>{country.nombre.espanol} ({country.codigo_pais})</Text>
                <Text style={styles.label}>Capital: {country.capital.espanol}</Text>
                <Text style={styles.label}>Población: {country.poblacion}</Text>
                <Text style={styles.label}>Región: {country.region.espanol}</Text>
                <Text style={styles.label}>Moneda: {country.monedas[0].nombre.espanol}</Text>
            </View>
            <Button title="Volver" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default DetallePais;

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
    flagImage:{
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
        borderColor: '#000000'
    }
    
})