import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
      onPress={()=> navigation.navigate('Cadastro')}
      title="Tela Inicial" />
    </View>
    
  );
}
