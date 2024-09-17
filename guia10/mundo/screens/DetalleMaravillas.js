import {View, StyleSheet, Text, Button, Image, ScrollView} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const DetalleMaravillas = ({route, navigation}) =>{
    const {tips} = route.params;
    console.log(tips);

    return(
        <ScrollView>
            <View style={}>
                <Text style>{tips.nombre}</Text>
                <Image source={{uri: tips.imagen}} style={}/>
                <Text style={}>Consejos para Viajer</Text>
                <View>
                    {tips.Consejos.map((tip, tipIndex) =>(
                        <Text style={} key={tipIndex}>{`${tipIndex + 1}.${tip}`}</Text>
                    ))}
                </View>

                <MapView style={} initialRegion={{latitude: tips.latitud, longitude: tips.longitud, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}>
                    <Marker coordinate={{latitude:tips.latitud, longitude: tips.longitud}} title={tips.nombre} description='Aquí está actualmente'/>
                </MapView>
                <Button title="Volver" onPress={() => navigation.goBack()}/>
            </View>
        </ScrollView>
    )
}

export default DetalleMaravillas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    tipContainer: {
        marginBottom: 20
    },


    // Aquí sigueeeee
})