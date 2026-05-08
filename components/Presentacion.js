import { StyleSheet, View, Text, Image, Alert, Linking, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function Presentacion() {
  const [tabActiva, setTabActiva] = useState("Info");

  const mostrarMensaje = () => {
    Alert.alert("Hola, soy Thomas Canalis");
  };

  const abrirGitHub = () => {
    Linking.openURL("https://github.com/");
  };

  const tabs = ["Info", "Habilidades", "Extra"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1f2937" }}>
      <StatusBar backgroundColor="#1f2937" barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* HEADER */}
        <Image
          source={{ uri: "https://images.daznservices.com/di/library/DAZN_News/f1/38/fernando-alonso-interlagos-2005_koxaatmhx5s31mu2omoyxsyu6.jpg?t=-538406268" }}
          style={styles.imagen}
        />
        <Text style={styles.titulo}>Thomas Canalis</Text>
        <Text style={styles.subtituloPerfil}>Desarrollador · Argentina · 18 años</Text>

        {/* TABS */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, tabActiva === tab && styles.tabActiva]}
              onPress={() => setTabActiva(tab)}
            >
              <Text style={[styles.tabTexto, tabActiva === tab && styles.tabTextoActivo]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* CONTENIDO INFO */}
        {tabActiva === "Info" && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>👤 Sobre mí</Text>
            <Text style={styles.cardTexto}>
              Soy estudiante y me interesa la programación, especialmente el desarrollo web y las aplicaciones.
            </Text>

            <Text style={styles.cardTitulo}>🎯 Objetivos</Text>
            <Text style={styles.cardTexto}>
              Aprender más sobre programación y trabajar en el mundo de la tecnología.
            </Text>
          </View>
        )}

        {/* CONTENIDO HABILIDADES */}
        {tabActiva === "Habilidades" && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>🛠️ Mis Habilidades</Text>
            {["⚛️  React", "🟨  JavaScript", "🐍  Python", "💻  Todo lo relacionado a programación"].map((item, index) => (
              <View key={index} style={styles.habilidadItem}>
                <Text style={styles.habilidadTexto}>{item}</Text>
              </View>
            ))}
          </View>
        )}

       {/* CONTENIDO EXTRA */}
{tabActiva === "Extra" && (
  <View style={styles.card}>
    <Text style={styles.cardTitulo}>🏆 Champions 2015</Text>
    <Text style={styles.cardTexto}>
      El FC Barcelona ganó la Champions League 2015 tras una gran temporada.
    </Text>
    <Text style={styles.cardTexto}>
      En la final jugó contra la Juventus y ganó 3-1. Los goles fueron de Rakitic, Suárez y Neymar.
    </Text>
    <Text style={styles.cardTexto}>
      Ese equipo tenía el tridente histórico MSN (Messi, Suárez y Neymar), considerado uno de los mejores ataques de la historia.
    </Text>
    <Text style={styles.cardTexto}>
      Dirigidos por Luis Enrique, lograron el triplete: Liga, Copa del Rey y Champions.
    </Text>

    {/* SEPARADOR */}
    <View style={styles.separador} />

    <Text style={styles.cardTitulo}>🏎️ Fernando Alonso - Campeón F1</Text>
    <Text style={styles.cardTexto}>
      Fernando Alonso es uno de los mejores pilotos de la historia de la Fórmula 1, considerado por muchos el más completo de todos los tiempos.
    </Text>
    <Text style={styles.cardTexto}>
      Ganó su primer campeonato mundial en 2005 con Renault, cortando la racha de 4 títulos consecutivos de Michael Schumacher.
    </Text>
    <Text style={styles.cardTexto}>
      En 2006 repitió campeón nuevamente con Renault, consolidándose como el mejor piloto del mundo con tan solo 25 años.
    </Text>
    <Text style={styles.cardTexto}>
      A lo largo de su carrera compitió en equipos como McLaren, Ferrari, Alpine y Aston Martin, siempre siendo competitivo sin importar el auto.
    </Text>
    <Text style={styles.cardTexto}>
      También intentó el triplete de la motorización ganando las 24 Horas de Le Mans en 2018 y 2019, y corrió en las 500 Millas de Indianápolis buscando la Triple Corona del automovilismo.
    </Text>
  </View>
)}

        {/* BOTONES */}
        <View style={styles.botones}>
          <Pressable
            onPress={mostrarMensaje}
            onPressIn={() => console.log("Saludar: press iniciado")}
            onPressOut={() => console.log("Saludar: press soltado")}
            onLongPress={() => Alert.alert("Long press en Saludar")}
            hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
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
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
    alignItems: "center",
    backgroundColor: "#1f2937",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f9fafb",
    marginTop: 12,
  },
  subtituloPerfil: {
    fontSize: 13,
    color: "#9ca3af",
    marginTop: 4,
    marginBottom: 24,
    letterSpacing: 1,
  },
  imagen: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#7c4dff",
    marginTop: 10,
  },

  // TABS
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    width: "100%",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  tabActiva: {
    backgroundColor: "#7c4dff",
  },
  tabTexto: {
    color: "#9ca3af",
    fontWeight: "600",
    fontSize: 14,
  },
  tabTextoActivo: {
    color: "#ffffff",
  },

  // CARD
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#374151",
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f9fafb",
    marginBottom: 8,
    marginTop: 12,
  },
  cardTexto: {
    fontSize: 14,
    color: "#d1d5db",
    lineHeight: 22,
    marginBottom: 6,
  },

  // HABILIDADES
  habilidadItem: {
    backgroundColor: "#1f2937",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#7c4dff",
  },
  habilidadTexto: {
    color: "#d1d5db",
    fontSize: 14,
    fontWeight: "500",
  },

  // BOTONES
  botones: {
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
  },
});