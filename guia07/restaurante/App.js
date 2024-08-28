import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, Keyboard, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [formAbierto, setformAbierto] = useState(false);
  const [reservas, setReservas] = useState([]);


  useEffect(() => {
    const obtenerReservas = async () => {
      try {
        const misReservas = await AsyncStorage.getItem("misR");

        if (misReservas) {
          setReservas(JSON.parse(misReservas));
        } 
      } catch (error) {

      }
    }

    obtenerReservas();
  }, []);


  const guardarReservas = async (reservasJSON) => {
    try {
      await AsyncStorage.setItem("misR", reservasJSON);
    } catch (error) {

    }
  }

  const eliminarRegistro = id =>{
    const reservasAct = reservas.filter( registro => registro.id !== id);
    setReservas(reservasAct);
    guardarReservas(JSON.stringify(reservasAct));
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.titulo}>¡Bienvenido a 'Le Festin'!</Text>
        <TouchableHighlight onPress={() => setformAbierto(!formAbierto)}>
          <View style={styles.botonRes}>
            <Text style={styles.textoB}>{formAbierto ? "Cancelar Reservación" : "Crear Nueva Reservación"}</Text>
          </View>
        </TouchableHighlight>

        {formAbierto ? (
          <Formulario setformAbierto={setformAbierto} reservas={reservas} setReservas={setReservas} guardarReservas={guardarReservas} />)
          : (
            <>
              <Text style={styles.mensaje}>{reservas.length > 0 ? 'Rerservaciones agregadas' : 'Sin reservas'}</Text>
              <FlatList
                style={styles.lista}
                data={reservas}
                renderItem={({ item }) => <Cita item={item} metodoEliminar={() => eliminarRegistro(item.id)} />}
                keyExtractor={cita => cita.id} /> 
            </>
          )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#3d3d3d',
    marginTop: 40,
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    color: 'gold',
    fontWeight: 'bold',
    borderBottomColor: 'gold',
    borderBottomWidth: 2,
  },
  botonRes: {
    marginVertical: 20,
    width: 250,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textoB: {
    textAlign: 'center',
    fontSize: 20,
  },
  mensaje: {
    color: 'white',
    fontSize: 20,
  },
  lista:{
    marginTop: 20,
  }
});
