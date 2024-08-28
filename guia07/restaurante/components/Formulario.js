import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
import shortid from "react-id-generator";


const Formulario = ({setformAbierto, reservas, setReservas, guardarReservas}) => {

    const [nombre, setNombre] = useState("");
    const [showingDate, setShowingDate] = useState(false);
    const [showingHour, setShowingHour] = useState(false);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState();
    const [cantidadP, setCantidadP] = useState(0);
    const [tipoS, setTipoS] = useState("No fumadores")

    const confirmarFecha = (date) => {
        const opciones = { year: "numeric", month: "long", day: "2-digit" };
        setFecha(date.toLocaleDateString("es-ES", opciones));
        setShowingDate(false);
    }

    const confirmarHora = hora => {
        const opciones = { hour: "numeric", minute: "2-digit", hour12: false };
        setHora(hora.toLocaleDateString('es-ES', opciones));
        setShowingHour(false);
    }

    const guardarReservacion = () =>{

        if(nombre === "" || fecha === "" || hora === "" || cantidadP === 0 || tipoS === ""){
            Alert.alert("Error", "Debes llenar todas las entradas");
            return
        }

        const nuevaR = { nombre, fecha, hora, cantidadP, tipoS};
        nuevaR.id = shortid();
        const reservasA = [... reservas, nuevaR];
        setReservas(reservasA);
        guardarReservas(JSON.stringify(reservasA));
        setformAbierto(false);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.label}>Nombre:</Text>
                    <TextInput onChangeText={(texto) => setNombre(texto)} style={styles.input} />
                </View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Text>{fecha}</Text>
                    <Button title="Seleccionar Fecha" onPress={() => setShowingDate(true)} />

                    <DateTimePickerModal
                        isVisible={showingDate}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={() => setShowingDate(false)}
                        locale="es_ES"
                        headerTextIOS="Elige la fecha"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Text>{hora}</Text>
                    <Button title="Seleccionar Hora" onPress={() => setShowingHour(true)} />

                    <DateTimePickerModal
                        isVisible={showingHour}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={() => setShowingHour(false)}
                        locale="es_ES"
                        headerTextIOS="Elige la hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                </View>
                <View>
                    <Text style={styles.label}>Cantidad de Personas: </Text>
                    <TextInput onChangeText={texto => setCantidadP(texto)} style={styles.input} keyboardType='numeric' />
                </View>
                <View>
                    <Text style={styles.label}>Tipo de sección: </Text>
                    <View style={styles.radioview}>
                        <RadioButton value="No fumadores" status={tipoS === "No fumadores" ? 'checked' : 'unchecked'} onPress={() => setTipoS("No fumadores")} />
                        <Text style={{ fontSize: 18, }}>No fumadores</Text>
                    </View>
                    <View style={styles.radioview} >
                        <RadioButton value="Fumadores" status={tipoS === "Fumadores" ? 'checked' : 'unchecked'} onPress={() => setTipoS("Fumadores")} />
                        <Text style={{ fontSize: 18, }}>Fumadores</Text>
                    </View>
                </View>
                <Text></Text>
                <Button title="Guardar Reservación" onPress={() => guardarReservacion()}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignContent: 'flex-start',
        margin: 20,
        borderRadius: 10,
        width: '90%',
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 20,
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        paddingHorizontal: 2,
    },
    radioview: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
export default Formulario;