import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem,Button, Input, Avatar} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function CadastroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Email</Text>
      <Input style={{ borderColor: "black", borderWidth: 1 }}></Input>
      <Text>Senha</Text>
      <Input style={{ borderColor: "black", borderWidth: 1 }}></Input>
      <Button
        title={"Salvar"}
        onPress={() => navigation.navigate("Login")}
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
