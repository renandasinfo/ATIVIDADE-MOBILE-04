import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';



export default function App() {
  const buttons = ['CLEAR', 'DEL', '*',
   1, 2, 3,
   4, 5, 6,
   7, 8, 9,
   0,'+',
   '/', '.','-' , '=']  

  const [primeiroNumero, setPrimeiroNumero] = useState("")
  const [ultimoNumero, setUltimoNumero] = useState("")


  function calculadora(){
    const splitNumbers = primeiroNumero.split(' ')
    const PrimeiroNumero = parseFloat(splitNumbers[0])
    const UltimoNumero = parseFloat(splitNumbers[2])
    const operador = splitNumbers[1]

    switch(operador){
      case '+':
        setPrimeiroNumero((PrimeiroNumero + UltimoNumero).toString())
        return
      case '-': 
      setPrimeiroNumero((PrimeiroNumero - UltimoNumero).toString())
        return
      case '*':
        setPrimeiroNumero((PrimeiroNumero * UltimoNumero).toString())
        return
      case '/': 
        setPrimeiroNumero((PrimeiroNumero / UltimoNumero).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
      setPrimeiroNumero(primeiroNumero + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setPrimeiroNumero(primeiroNumero.substring(0, (primeiroNumero.length -1)))
        return
      case 'CLEAR':
        setUltimoNumero("")
        setPrimeiroNumero("")
        return
      case '=':
        setUltimoNumero(primeiroNumero + " = ")
        calculadora()
        return
      case '+/-':
        return
    }

    setPrimeiroNumero(primeiroNumero + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: "#6495ED",
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultText: {
      color: "black",
      margin: 10,
      fontSize: 40
    },

    historyText:{
      color:"#0f0f0f",
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: 120,
      margin: 10,
      backgroundColor: "#6495ED",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: "#6495ED",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90, 
      minHeight: 90,
      flex: 2,
    },
    textButton: {
      color: "#0f0f0f",
      fontSize: 20,
    }, 
  });

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
        </TouchableOpacity>
        <Text style={styles.historyText}>{ultimoNumero}</Text>
        <Text style={styles.resultText}>{primeiroNumero}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#FFFFFF'}]}>
          <Text style={[styles.textButton, {color: "black", fontSize: 30}]}>{button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, 
          {backgroundColor: typeof(button) === 'number'}]}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
