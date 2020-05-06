import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native';
import Cita from "./componentes/Citas"
import Formulario from "./componentes/Formulario"


const App =() => {

  const [citas, setCitas] = useState([])

  const[mostrarForm,guardarMostrarForm] = useState(false)

  useEffect(()=>{
    const obtenerCitasStorage = async ()=>{
      try{
        const citasStorage = await AsyncStorage.getItem("citas")
        if(citasStorage){
          setCitas(JSON.parse(citasStorage))
        }
      }catch(error){
        console.log(error)
      }
    }
  },[])



  // Elimina los pascientes del state

  const eliminaPaciente = id =>{

    const citasFiltradas = citas.filter(cita => cita.id !== id)

    setCitas(citasFiltradas)
    guardarCitasStorage(JSON.stringify(citasFiltradas))
  

  }

  //muestra u oculta el Formulario

  const mostrarFormulario =()=>{
    guardarMostrarForm(!mostrarForm)
  }

  // Ocultar Teclado

  const cerrarTeclado=()=>{
    Keyboard.dismiss()
  }


  // Almacenar las citas en storage
  const guardarCitasStorage= async (citasJSON) =>{
    try{
      await AsyncStorage.setItem("citas",citasJSON)
      console.log(citasJSON)

    }catch(error){
      console.log("Error al guardar en Storage", error)
    }

  }
   
  return (
    <TouchableWithoutFeedback onPress={()=>cerrarTeclado()}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Administrador de citas</Text>
                <View>
                        <TouchableHighlight onPress={()=>mostrarFormulario()} style={styles.btnMostrarForm}>
                            <Text style={styles.textoMostrarForm}>{mostrarForm ? "Cancelar Crear Cita" : "Crear nueva cita"}</Text>
                        </TouchableHighlight>
                </View>

            <View style={styles.contenido}>
            {
              mostrarForm ?(
                <>
                <Text style={styles.titulo}>Crear nueva Cita</Text>

                <Formulario
                  citas={citas}
                  setCitas={setCitas}
                  guardarMostrarForm={guardarMostrarForm}
                  guardarCitasStorage={guardarCitasStorage}
                />

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
      </TouchableWithoutFeedback>
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
