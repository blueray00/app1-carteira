import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.titulo}>REPÚBLICA FEDERATIVA DO BRASIL</Text>
        <Text style={styles.subtitulo}>IDENTIDADE VISUAL</Text>
      <StatusBar style="auto" />
      </View>
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
  border: {
    width: 350,
    height: 450,
    padding: 10,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 20,
    backgroundColor: "rgba(253, 5, 5, 0.3)",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 13,
    color: "red",
    textAlign: "center",
  },

});
