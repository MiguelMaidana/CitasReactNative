import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight, Platform } from 'react-native';
import Cita from "./componentes/Citas"
import Formulario from "./componentes/Formulario"

const App =() => {

  const[mostrarForm,guardarMostrarForm] = useState(false)

  const [citas, setCitas] = useState([
    {id:"1", paciente:"Hook", propietario :"Juan", sintomas:"no duerme"},
    {id:"2", paciente:"Redux", propietario :"Miguel", sintomas:"no come"},
    {id:"3", paciente:"Native", propietario :"Tomas", sintomas:"no canta"}
  ])


  // Elimina los pascientes del state

  const eliminaPaciente = id =>{
    setCitas((citasActuales)=>{
        return citasActuales.filter(cita => cita.id !== id)
    })

  }

  //muestra u oculta el Formulario

  const mostrarFormulario =()=>{
    guardarMostrarForm(!mostrarForm)
  }

  return (

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>
            <View>
                    <TouchableHighlight onPress={()=>mostrarFormulario()} style={styles.btnMostrarForm}>
                        <Text style={styles.textoMostrarForm}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
            </View>

        <View style={styles.contenido}>
        {
          mostrarForm ?(
            <>
            <Text style={styles.titulo}>Crear nueva Cita</Text>

            <Formulario/>
            </>
          ):(
            <>
              <Text style={styles.titulo}>{citas.length > 0 ? "Aministra tus citas" : "No hay citas, agrega una" }</Text>

              <FlatList
              style={styles.listado}
                data={citas}
                renderItem ={({item})=>(
                <Cita item={item} eliminaPaciente={eliminaPaciente} ></Cita>
                )}
              keyExtractor={cita =>cita.id}
            />
            </>
          )
        }
        
    

        </View>

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
    marginTop : Platform.OS ==="ios" ? 40 : 20,
    marginBottom :20,
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center"
  },
  contenido:{
    flex:1,
    marginHorizontal : "2,5%"


  },
  listado:{
    flex:1,
  },
  btnMostrarForm :{
    padding :10,
    backgroundColor: "#7d024e",
    marginVertical :10
},
textoMostrarForm:{
    color:"#FFF",
    fontWeight: "bold",
    textAlign:"center"
}

})

export default App
