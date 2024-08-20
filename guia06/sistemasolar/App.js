import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Modal, Button, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [mercurio, setMercurio] = useState(false);
  const [venus, setVenus] = useState(false);
  const [tierra, setTierra] = useState(false);
  const [marte, setMarte] = useState(false);
  const [jupiter, setJupiter] = useState(false);
  const [saturno, setSaturno] = useState(false);
  const [urano, setUrano] = useState(false);
  const [neptuno, setNeptuno] = useState(false);


  return (
    <SafeAreaView style={styles.safe}>

      <Modal transparent={true} animationType='slide' visible={mercurio}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>MERCURIO</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 4,879 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 74.8 millones km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 3.3 x 10^23 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 5,430 kg/m³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 46,001,200 – 69,816,900 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 88 días terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Temperatura superficial: de -180 ºC a +430 ºC</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: ninguna</Text>
            <Text></Text>
            <Image source={require('./src/img/mercurio2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setMercurio(!mercurio)}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType='slide' visible={venus}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>VENUS</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 12,104 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 4.60 x 10^8 km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 4.87 × 10^24 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 5.24 g/cm³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 108,000,000 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 225 días terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Temperatura superficial: de -45.15 ºC a +499.85 ºC</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: ninguna</Text>
            <Text></Text>
            <Image source={require('./src/img/venus2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setVenus(!venus)}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType='slide' visible={tierra}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>TIERRA</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 12,742 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 510,072,000 km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 5.97 × 10^24 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 5.5134 g/cm³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 150,000,000 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 365.25 días terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Temperatura superficial: de -89.15 ºC a +56.7 ºC</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: 1</Text>
            <Text></Text>
            <Image source={require('./src/img/tierra2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setTierra(!tierra)}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType='slide' visible={marte}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>MARTE</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 6,794.4 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 144,798,500 km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 6.4185 × 10^23 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 3.9335 g/cm³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 	228,000,000 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 686.971 días terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Temperatura superficial: de -87 ºC a +20 ºC</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: 2 (Fobos y Deimos)</Text>
            <Text></Text>
            <Image source={require('./src/img/marte2.jpeg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setMarte(!marte)}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType='slide' visible={jupiter}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>JÚPITER</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 142,984 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 6.41 × 10^10 km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 1.899 × 10^27 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 1,336 kg/m³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 780,000,000 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 11.86 años terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Temperatura superficial: de −163.15 ºC a −75.15 ºC</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: 95 satélites naturales</Text>
            <Text></Text>
            <Image source={require('./src/img/jupiter2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setJupiter(!jupiter)}></Button>
          </View>
        </View>
      </Modal>


      <Modal transparent={true} animationType='slide' visible={saturno}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>SATURNO</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 120,536 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 4.38 × 10^16 m²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 5.688 × 10^26 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 690 kg/m³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 1,430,000,000 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 29.46 años terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: 146 satélites naturales</Text>
            <Text></Text>
            <Image source={require('./src/img/saturno2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setSaturno(!saturno)}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType='slide' visible={urano}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>URANO</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 51.118 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 8.1156 x 10^9 km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 8.686 × 10^25 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 1.274 g/cm³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 2,870,000,000 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 84 años terrestres</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: 27 satélites naturales</Text>
            <Text></Text>
            <Image source={require('./src/img/urano2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setUrano(!urano)}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType='slide' visible={neptuno}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.tituloModal}>NEPTUNO</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Diámetro: 49,572 km</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Área Superficial: 7.65 x 10^9 km²</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Masa: 1.024 × 10^26 kg</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Densidad: 1.64 g/cm³</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Distancia al Sol: 4,500,000,000 km </Text>
            <Text></Text>
            <Text style={styles.textoMo}>Año: 165 años</Text>
            <Text></Text>
            <Text style={styles.textoMo}>Lunas: 16 satélites naturales</Text>
            <Text></Text>
            <Image source={require('./src/img/neptuno2.jpg')} style={styles.img2}></Image>
            <Button title="Cerrar" onPress={() => setNeptuno(!neptuno)}></Button>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.contenedor}>
          <Image style={styles.banner} source={require("./src/img/solarsystem.jpg")} />
          <Text style={styles.titulo}>¡El Sistema Solar!</Text>
        </View>
        <View style={styles.rocosos}>
          <Text style={styles.subtitulo}>Planetas Rocosos</Text>
          <Text style={styles.texto}>Son aquellos que están formados por silicatos , cuyas atmósferas gaseosas son
            secundarias y están influidas por la actividad geológica:</Text>

          <View style={styles.planetas}>
            <TouchableHighlight style={styles.planeta} onPress={() => setMercurio(!mercurio)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>1. Mercurio</Text>
                <Image style={styles.planetaI} source={require("./src/img/mercurio1.jpg")} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.planeta} onPress={() => setVenus(!venus)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>2. Venus</Text>
                <Image style={styles.planetaI} source={require("./src/img/venus1.jpg")} />
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.planeta} onPress={() => setTierra(!tierra)}>

              <View style={styles.planeta}>
                <Text style={styles.planetaT}>3. Tierra</Text>
                <Image style={styles.planetaI} source={require("./src/img/tierra1.jpg")} />
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.planeta} onPress={() => setMarte(!marte)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>4. Marte</Text>
                <Image style={styles.planetaI} source={require("./src/img/marte.jpg")} />
              </View>
            </TouchableHighlight>
          </View>
        </View>


        <View style={styles.gaseosos}>
          <Text style={styles.subtitulo}>Gigantes Gaseosos</Text>
          <Text style={styles.texto}>Son planetas gigantes con un centro rocoso, pero cuya masa es mayoritariamente gaseosa fluida, principalmente hidrógeno y helio: </Text>
          <View style={styles.planetas}>

            <TouchableHighlight style={styles.planeta} onPress={() => setJupiter(!jupiter)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>5. Júpiter</Text>
                <Image style={styles.planetaI} source={require("./src/img/jupiter.jpg")} />
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.planeta} onPress={() => setSaturno(!saturno)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>6. Saturno</Text>
                <Image style={styles.saturno} source={require("./src/img/saturno.jpg")} />
              </View>
            </TouchableHighlight>
          </View>

        </View>

        <View style={styles.helados}>
          <Text style={styles.subtitulo}>Gigantes Helados</Text>
          <Text style={styles.texto}>Se diferencian de los gigantes gaseosos en que su composición de helio e hidrógeno es menor; y están constituidos principalmente por hielo, roca y gas:</Text>
          <View style={styles.planetas}>

            <TouchableHighlight style={styles.planeta} onPress={() => setUrano(!urano)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>7. Urano</Text>
                <Image style={styles.planetaI} source={require("./src/img/urano.png")} />
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.planeta} onPress={() => setNeptuno(!neptuno)}>
              <View style={styles.planeta}>
                <Text style={styles.planetaT}>8. Neptuno</Text>
                <Image style={styles.planetaI} source={require("./src/img/neptuno.jpg")} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  contenedor: {
    backgroundColor: "#0f1742",
  },
  banner: {
    resizeMode: 'contain',
    width: '100%',
    height: 225,
  },
  titulo: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
  },
  rocosos: {
    backgroundColor: '#422f01',
  },
  gaseosos: {
    backgroundColor: '#873201',
  },
  helados: {
    backgroundColor: '#037091',
  },
  subtitulo: {
    paddingTop: 10,
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  planeta: {
    marginBottom: 25,
    marginTop: 25,
  },
  planetaT: {
    textAlign: 'center',
    margin: 15,
    fontWeight: "bold",
    fontSize: 25,
    color: 'white',
  },
  texto: {
    padding: 15,
    fontSize: 25,
    paddingRight: 10,
    textAlign: 'justify',
    color: 'white',
  },
  planetaI: {
    width: 300,
    height: 300,
    margin: 'auto'
  },
  saturno: {
    resizeMode: 'contain',
    height: 300,
  },
  planetas: {
    backgroundColor: "black",
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  tituloModal: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  textoMo: {
    fontSize: 20,
  },
  img2: {
    width: 120,
    margin: 'auto',
    resizeMode: 'contain'
  }
});
