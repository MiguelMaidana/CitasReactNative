import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const Formulario =()=>{
    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput style={styles.input} 

                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create ({

    formulario :{
        backgroundColor :"#FFF",
        paddingHorizontal :20,
        paddingVertical :10,
        marginHorizontal : "2,5%"
    },

    label :{
        fontWeight :"bold",
        fontSize : 18,
        marginTop : 20
    },
    input :{
        marginTop :10,
        height :50,
        borderColor : "#e1e1e1",
        borderWidth : 1,
        borderStyle : "solid"

    }

})

export default Formulario