import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input, Avatar} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Avatar
          size={"large"}
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
          }}
        />
      <Text style={{paddingTop: 60}}>Login</Text>
      <Input style={{ borderColor: "black", borderWidth:1, alignItems: "center"}}></Input>
      <Text style={{paddingTop: 10}}>Senha</Text>
      <Input style={{ borderColor: "black", borderWidth: 1,  alignItems: "center",   }}></Input>
      <Button
        title={"Login"}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title={"Cadastro"}
        onPress={() => navigation.navigate("Cadastro")}
        buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
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
