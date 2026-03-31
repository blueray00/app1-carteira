import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.titulo}>REPÚBLICA FEDERATIVA DO BRASIL</Text>
        <Text style={styles.subtitulo}>IDENTIDADE VIRTUAL</Text>
        <Image source={require('./assets/Oliver.png')} style={styles.imagem} />
        <Text style={styles.dados}>Nome</Text>
        <Text style={styles.pessoal}>Olivier Mira Armstrong</Text>
        <Text style={styles.dados}>CPF</Text>
        <Text style={styles.pessoal}>123.456.789-00</Text>
        <Text style={styles.dados}>Data de Nascimento</Text>
        <Text style={styles.pessoal}>03/10/2009</Text>
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
    borderColor: "blue",
    borderRadius: 20,
    backgroundColor: "rgba(5, 141, 253, 0.3)",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 13,
    color: "blue",
    textAlign: "center",
  },
  dados: {
    fontSize: 12,
    color: "gray",
    textAlign: "left",
  },
  pessoal: {
    fontSize: 15,
    textAlign: "left",
  },
  imagem: {
    width: 200,
    height: 200,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 20,
  }
});
