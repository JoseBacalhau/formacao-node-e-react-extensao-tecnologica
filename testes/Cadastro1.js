import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Input style={{borderColor: "black", borderWidth: 1}}></Input>
      <Text>Senha</Text>
      <Input style={{borderColor: "black", borderWidth: 1}}></Input>
      <Button
          title={"Login"}
          buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}/>
          <Button
          title={"Cadastro"}
          onPress={()=> navigation.navigate('Login')}
          buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}/>
          
      <Button title="Tela de Cadastro" 
      onPress={() => navigation.navigate('Cadastro',
      {
        quantidade:10,
        nome:"Inicial Screen"
      })} 
      />
    </View>
  );
}

