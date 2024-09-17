import React, {useState, useEffect} from 'react';
import {View, Image,Text, TouchableOpacity, FlatList, Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ListaPaises = ({navigation}) =>{
    const [countries, setCountries] = useState([]);

    useEffect( () =>{
        fetchCountries();
    }, []);

    const fetchCountries = async () =>{
        try{
            const response = await fetch('https://65f9be823909a9a65b1942ac.mockapi.io/paises');
            const data = await response.json();
            setCountries(data);
        }catch(error){
            console.log("Error fetching countries", error);
        }
    }

    const renderItem = ({item}) =>{
        <TouchableOpacity style={styles.countryCard} onPress={() => navigation.navigate("DetallePais", {country:item})}>
            <View style={styles.countryInfo}>
                <Image source={{uri: item.bandera}} style={styles.flagImage}/>
                <Text style={styles.countryName}>{item.nombre.espanol}</Text>
            </View>
        </TouchableOpacity>
    }

    return(
        <View style={styles.container}>
            <FlatList
            data={countries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.countryList}
            numColumns={2} />
        </View>
    )
}

export default ListaPaises;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    countryList: {
        padding: 10,
    },
    countryCard: {
        width: windowWidth / 2 -15,
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden'
    },
    countryInfo:{
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    flagImage: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
    },
    countryName:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    }
});