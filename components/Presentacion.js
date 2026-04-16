import { StyleSheet, View, Text, Image, Button, Alert, Linking, StatusBar } from 'react-native';

export default function Presentación() {

  const mostrarMensaje = () => {
    Alert.alert("Hola, soy Thomas Canalis");
  };

  const abrirGitHub = () => {
    Linking.openURL("https://github.com/");
  };

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Text style={styles.titulo}>Presentación Personal</Text>

      <Image
        source={{ uri: "https://images.daznservices.com/di/library/DAZN_News/f1/38/fernando-alonso-interlagos-2005_koxaatmhx5s31mu2omoyxsyu6.jpg?t=-538406268" }}
        style={styles.imagen}
      />

      <Text style={styles.texto}>Nombre: Thomas Canalis</Text>
      <Text style={styles.texto}>Edad: 18</Text>
      <Text style={styles.texto}>País: Argentina</Text>

      <Text style={styles.subtitulo}>Sobre mí:</Text>
      <Text style={styles.texto}>
        Soy estudiante y me interesa la programación, especialmente el desarrollo web
        y las aplicaciones.
      </Text>

      <Text style={styles.subtitulo}>Habilidades:</Text>
      <Text style={styles.texto}>- React</Text>
      <Text style={styles.texto}>- JavaScript</Text>
      <Text style={styles.texto}>- Python</Text>
      <Text style={styles.texto}>- Y todo lo que sea programación</Text>

      <Text style={styles.subtitulo}>Objetivos:</Text>
      <Text style={styles.texto}>
        Aprender más sobre programación y trabajar en el mundo de la tecnología.
      </Text>

      <Button title="Saludar" onPress={mostrarMensaje} />
      <Button title="Abrir GitHub" onPress={abrirGitHub} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold"
  },
  texto: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});
