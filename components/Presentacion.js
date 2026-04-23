import { StyleSheet, View, Text, Image, Button, Alert, Linking, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Presentacion() {

  const mostrarMensaje = () => {
    Alert.alert("Hola, soy Thomas Canalis");
  };

  const abrirGitHub = () => {
    Linking.openURL("https://github.com/");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
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

        {/* EXTRA */}
        <Text style={styles.subtitulo}>Extra: Champions 2015</Text>

        <Text style={styles.texto}>
          El FC Barcelona ganó la Champions League 2015 tras una gran temporada.
        </Text>

        <Text style={styles.texto}>
          En la final jugó contra la Juventus y ganó 3-1.
        </Text>

        <Text style={styles.texto}>
          Los goles fueron de Rakitic, Suárez y Neymar.
        </Text>

        <Text style={styles.texto}>
          Ese equipo tenía un tridente histórico: Messi, Suárez y Neymar (MSN),
          considerado uno de los mejores ataques de la historia del fútbol.
        </Text>

        <Text style={styles.texto}>
          Además, el equipo era dirigido por Luis Enrique y logró el triplete
          (Liga, Copa del Rey y Champions).
        </Text>

        <View style={styles.botones}>
          <Button title="Saludar" onPress={mostrarMensaje} />
          <View style={{ height: 10 }} />
          <Button title="Abrir GitHub" onPress={abrirGitHub} />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2937",
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color:"#f9fafb",
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
    color:"#f9fafb",
  },
  texto: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
    color: "#d1d5db",
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  botones: {
    marginTop: 20,
    width: "100%"
  }
});