import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import LoginScreen from "./screens/login";
import CadastroScreen from "./screens/Cadastro";
import ListarScreen from "./screens/Listar";
import CriarContatoScreen from "./screens/CriarContato";
import AlterarScreen from "./screens/Alterar";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Listar" component={ListarScreen} />
      <Stack.Screen name="CriarContato" component={CriarContatoScreen} />      
      <Stack.Screen name="AlterarDados" component={AlterarScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;