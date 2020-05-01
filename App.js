import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from "./componentes/Citas"

const App =() => {

  const [citas, setCitas] = useState([
    {id:"1", paciente:"Hook", propietario :"Juan", sintomas:"no duerme"},
    {id:"2", paciente:"Redux", propietario :"Miguel", sintomas:"no come"},
    {id:"3", paciente:"Native", propietario :"Tomas", sintomas:"no canta"}
  ])
  return (

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <FlatList
        data={citas}
        renderItem ={({item})=>(
         <Cita item={item} ></Cita>
        )}
        keyExtractor={cita =>cita.id}
        />

      </View>
  );
};

const styles = StyleSheet.create({

  contenedor :{
    backgroundColor:"#AA076B",
    flex:1
  },

  titulo : {
    color:"#FFF",
    marginTop : 40,
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center"
  }
})

export default App
