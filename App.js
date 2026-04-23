import { StyleSheet, View, StatusBar } from 'react-native';
import Presentacion from './components/Presentacion';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Presentacion />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#121212",
    padding: 20,
  },
});