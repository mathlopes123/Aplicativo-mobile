import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'; //opcional para chamar a API

export default function App() {
  const [selectedValue, setSelectedValue] = useState('option1'); //menu
  const [data, setData] = useState(null);//armazenar dado da API

  //função para buscar dados da API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

 useEffect(() => {
  fetchData();//chama API quando o app é carregado
 }, []);

 return (
  <View style={StyleSheet.container}>
    {/* Exibir Imagem */}
    <Image
    source={{uri: 'https://example.com/image.jpg' }}
    style={style.image}
    />

    {/* Exibir Dado da API */}
    <Text style={style.text}>Dados da API: {data ? data : 'Carregando...'}</Text>

    {/* Botão */}
    <TouchableOpacity style={style.button} onPress={() => alert('Botão pressionado!')}>
      <Text style={style.buttonText}>pressione</Text>
    </TouchableOpacity>

    {/* Menu suspenso */}
    <Picker
    selectedValue={selectedValue}
    style={style.picker}
    onValueChange={(itemValue) => setSelectedValue(itemValue)}
    >
      <Picker.item label="Opção 1" value="option1" />
      <Picker.item label="Opção 2" value="option2" />
      <Picker.item label="Opção 3" value="option3" />
    </Picker>
  </View>
 );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: 150,
  },
});