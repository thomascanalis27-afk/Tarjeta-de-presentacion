import { StyleSheet, View, Text, Image, Alert, Linking, StatusBar, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

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

        <Text style={styles.subtitulo}>Extra: Champions 2015</Text>
        <Text style={styles.texto}>El FC Barcelona ganó la Champions League 2015 tras una gran temporada.</Text>
        <Text style={styles.texto}>En la final jugó contra la Juventus y ganó 3-1.</Text>
        <Text style={styles.texto}>Los goles fueron de Rakitic, Suárez y Neymar.</Text>
        <Text style={styles.texto}>
          Ese equipo tenía un tridente histórico: Messi, Suárez y Neymar (MSN),
          considerado uno de los mejores ataques de la historia del fútbol.
        </Text>
        <Text style={styles.texto}>
          Además, el equipo era dirigido por Luis Enrique y logró el triplete
          (Liga, Copa del Rey y Champions).
        </Text>

        <View style={styles.botones}>
          <Pressable
            onPress={mostrarMensaje}
            onPressIn={() => console.log("Saludar: press iniciado")}
            onPressOut={() => console.log("Saludar: press soltado")}
            onLongPress={() => Alert.alert("Long press en Saludar")}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            style={({ pressed }) => [
              styles.botonWrapper,
              pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] }
            ]}
          >
            {({ pressed }) => (
              <LinearGradient
                colors={["#e040fb", "#7c4dff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.botonGradiente}
              >
                <Text style={styles.botonTexto}>
                  {pressed ? "SALUDANDO..." : "SALUDAR"}
                </Text>
              </LinearGradient>
            )}
          </Pressable>

          <View style={{ height: 16 }} />
          <Pressable
            onPress={abrirGitHub}
            onPressIn={() => console.log("GitHub: press iniciado")}
            onPressOut={() => console.log("GitHub: press soltado")}
            onLongPress={() => Alert.alert("Long press en GitHub")}
            hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}
            style={({ pressed }) => [
              styles.botonWrapper,
              pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] }
            ]}
          >
            {({ pressed }) => (
              <LinearGradient
                colors={["#00bcd4", "#1565c0"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.botonGradiente}
              >
                <Text style={styles.botonTexto}>
                  {pressed ? "ABRIENDO..." : "ABRIR GITHUB"}
                </Text>
              </LinearGradient>
            )}
          </Pressable>

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
    color: "#f9fafb",
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
    color: "#f9fafb",
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
    width: "100%",
    alignItems: "center",
  },
  botonWrapper: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffffff40",
    overflow: "hidden",
    width: "80%",
    shadowColor: "#7c4dff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
  },
  botonGradiente: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: "center",
    borderRadius: 50,
  },
  botonTexto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 2,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  }
});