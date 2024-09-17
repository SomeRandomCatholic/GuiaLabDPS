import ListaPaises from "./screens/ListaPaises";

export default function App() {
  return (
    <View style={styles.container}>
      <ListaPaises></ListaPaises>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
