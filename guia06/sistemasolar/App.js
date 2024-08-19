import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
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
            <View style={styles.planeta}>
              <Text style={styles.planetaT}>1. Mercurio</Text>
              <Image style={styles.planetaI} source={require("./src/img/mercurio1.jpg")} />
            </View>

            <View style={styles.planeta}>
              <Text style={styles.planetaT}>2. Venus</Text>
              <Image style={styles.planetaI} source={require("./src/img/venus1.jpg")} />
            </View>

            <View style={styles.planeta}>
              <Text style={styles.planetaT}>3. Tierra</Text>
              <Image style={styles.planetaI} source={require("./src/img/tierra1.jpg")} />
            </View>
            <View style={styles.planeta}>
              <Text style={styles.planetaT}>4. Marte</Text>
              <Image style={styles.planetaI} source={require("./src/img/marte.jpg")} />
            </View>
          </View>
        </View>


        <View style={styles.gaseosos}>
          <Text style={styles.subtitulo}>Gigantes Gaseosos</Text>
          <Text style={styles.texto}>Son planetas gigantes con un centro rocoso, pero cuya masa es mayoritariamente gaseosa fluida, principalmente hidrógeno y helio: </Text>
          <View style={styles.planetas}>
            <View style={styles.planeta}>
              <Text style={styles.planetaT}>5. Júpiter</Text>
              <Image style={styles.planetaI} source={require("./src/img/jupiter.jpg")} />
            </View>

            <View style={styles.planeta}>
              <Text style={styles.planetaT}>6. Saturno</Text>
              <Image style={styles.saturno} source={require("./src/img/saturno.jpg")} />
            </View>
          </View>

        </View>

        <View style={styles.helados}>
          <Text style={styles.subtitulo}>Gigantes Helados</Text>
          <Text style={styles.texto}>Se diferencian de los gigantes gaseosos en que su composición de helio e hidrógeno es menor; y están constituidos principalmente por hielo, roca y gas:</Text>
          <View style={styles.planetas}>
            <View style={styles.planeta}>
              <Text style={styles.planetaT}>7. Urano</Text>
              <Image style={styles.planetaI} source={require("./src/img/urano.png")} />
            </View>

            <View style={styles.planeta}>
              <Text style={styles.planetaT}>8. Neptuno</Text>
              <Image style={styles.planetaI} source={require("./src/img/neptuno.jpg")} />
            </View>

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
  gaseosos:{
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
  }
});
