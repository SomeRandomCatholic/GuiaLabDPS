import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function Cita({ item, metodoEliminar }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.titulo}>ID: </Text>
                <Text style={styles.texto}>{item.id}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Nombre: </Text>
                <Text style={styles.texto}>{item.nombre}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Fecha: </Text>
                <Text style={styles.texto}>{item.fecha}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Hora: </Text>
                <Text style={styles.texto}>{item.hora}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Cantidad de Personas: </Text>
                <Text style={styles.texto}>{item.cantidadP}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Tipo de Sección: </Text>
                <Text style={styles.texto}>{item.tipoS}</Text>
            </View>
            <TouchableHighlight style={styles.butonR} onPress={metodoEliminar}>
                <Text style={styles.textoB}>Eliminar Reserva</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 30,
        width: 300,
        borderRadius: 5,
        padding: 10,
    },
    titulo:{
        fontSize: 20, 
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 20,
    },
    butonR: {
        backgroundColor: 'red',
        marginTop: 20,
        padding: 10,
        width: '70%',
        alignSelf: 'center',
    },
    textoB: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        
    }

})