import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem, Button, Input, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function ListarScreen({ navigation, route }) {
  const [list, setlist] = useState([]);

  useEffect(() => {
    function consultarDados(){

        axios.get('http://professornilson.com/testeservico/clientes')
        
        .then(function (response) {
        setlist(response.data);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }
        consultarDados();
  }, [])

  return (
    <View>
        <Button

        title={"Criar Contato"}
        onPress={() => navigation.navigate("CriarContato")}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)", alignItems:'center' }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 80,
          marginVertical: 10,
        }}
      />
      <ScrollView>
      {list.map((linha, indice) => (
        <ListItem key={indice} bottomDivider onPress={()=> navigation.navigate('AlterarDados',
        {
          nome:linha.nome,
          email:linha.email,
          telefone:linha.telefone,
          id:linha.id
        })}>
          <ListItem.Content >
            <ListItem.Title>{linha.nome}</ListItem.Title>
            <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      </ScrollView>
      
    </View>
  );
}
