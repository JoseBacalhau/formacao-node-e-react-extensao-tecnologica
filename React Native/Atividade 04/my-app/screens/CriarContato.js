import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem, Button, Input, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function CriarContatoScreen({ navigation, route }) {
    const [getnome, setnome] = useState([]);
    const [getemail,setemail] =useState([]);
    const [gettelefone,settelefone] =useState([]);

    async function inserirDados() {
      axios
        .post("http://professornilson.com/testeservico/clientes", {
          nome: getnome,
          email: getemail,
          telefone: gettelefone,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nome</Text>
      <TextInput  style={{ height:40 , width: 350,borderColor: "black", borderWidth: 1 }}
        onChange={(Text) => setnome(Text)}
        value={getnome}
      ></TextInput>
      <Text>Email</Text>
      <TextInput  style={{ height:40 , width: 350,borderColor: "black", borderWidth: 1 }}
        onChange={(Text) => setnome(Text)}
        value={getnome}
      ></TextInput>      <Text>Telefone</Text>
      <TextInput  style={{ height:40 , width: 350,borderColor: "black", borderWidth: 1 }}
        onChange={(Text) => setnome(Text)}
        value={getnome}
      ></TextInput>      <Button
        title={"Salvar"}
        onPress={() =>  inserirDados()}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        
      />
      <Button
        title={"Voltar"}
        onPress={() => navigation.navigate("Listar")}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}
