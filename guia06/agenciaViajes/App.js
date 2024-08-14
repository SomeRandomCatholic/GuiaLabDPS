import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisiblePupa, setModalVisiblePupa] = useState(false);
  const [modalVisibleIzalco, setModalVisibleIzalco] = useState(false);

  return (
    <>
      <ScrollView>

        <Modal transparent={true} animationType='slide' visible={modalVisiblePlaya} onRequestClose={() => {
          alert('Modal has been closed.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text></Text>
              <Text>El Salvador cuenta con hermosas playas a nivel de Centroamérica</Text>
              <Text></Text>
              <Button title="Cerrar" onPress={() => setModalVisiblePlaya(!modalVisiblePlaya)}></Button>
            </View>
          </View>

        </Modal>

        <Modal transparent={true} animationType='slide' visible={modalVisiblePupa} onRequestClose={() => {
          alert('Modal has been closed.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>¡Ricas Pupusas!</Text>
              <Text></Text>
              <Text>El platillo salvadoreño por excelencia</Text>
              <Text></Text>
              <Button title="Cerrar" onPress={() => setModalVisiblePupa(!modalVisiblePupa)}></Button>
            </View>
          </View>

        </Modal>

        <Modal transparent={true} animationType='slide' visible={modalVisibleIzalco} onRequestClose={() => {
          alert('Modal has been closed.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Imponentes Volcanes</Text>
              <Text></Text>
              <Text>Los volcanes de El Salvador ofrecen oportunidades únicas a los amantes del senderismo.</Text>
              <Text></Text>
              <Button title="Cerrar" onPress={() => setModalVisibleIzalco(!modalVisibleIzalco)}></Button>
            </View>
          </View>

        </Modal>


        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./src/img/bg.jpg')}></Image>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => setModalVisiblePlaya(!modalVisiblePlaya)}>
                <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')}></Image>
              </TouchableHighlight>
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')}></Image>
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')}></Image>
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')}></Image>
            </View>

            <View>
              <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')}></Image>
            </View>

          </ScrollView>

          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <TouchableHighlight onPress={() => setModalVisiblePupa(!modalVisiblePupa)}>
                <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')}></Image>
              </TouchableHighlight>
            </View>

            <View>
              <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')}></Image>
            </View>

            <View>
              <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')}></Image>
            </View>
          </View>

          <Text style={styles.titulo}>Rutas Turísticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')}></Image>
            </View>

            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')}></Image>
            </View>

            <View style={styles.listaItem}>
              <TouchableHighlight onPress={() => setModalVisibleIzalco(!modalVisibleIzalco)}>
                <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')}></Image>
              </TouchableHighlight>
            </View>

            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')}></Image>
            </View>

          </View>

        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  }
});

export default App;