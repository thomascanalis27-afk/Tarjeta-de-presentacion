import { StyleSheet, View, StatusBar } from 'react-native';
import Presentacion from './components/Presentacion,js'


export default function App(){
  return(
    <View style={styles.container}>
      <Presentacion/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 20
  }
});
