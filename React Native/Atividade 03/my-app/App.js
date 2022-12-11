// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Button, Avatar, Input } from "react-native-elements";

// const Login = ({navigation}) => {
//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           flexDirection: "column",
//         },
//       ]}
//     >
//       <View style={{ flex: 2, alignItems: "center", paddingTop: 60 }}>
//         <Avatar
//           size={"large"}
//           rounded
//           source={{
//             uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
//           }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 3,
//           alignItems: "center",
//           paddingRight: 20,
//           paddingTop: 50,
//         }}
//       >
//         <Input
//           placeholder="Login"
//           containerStyle={{
//             height: 40,
//             width: 200,
//             marginHorizontal: 50,
//             marginVertical: 10,
//           }}
//         />
//         <Input
//           placeholder="Senha"
//           containerStyle={{
//             height: 40,
//             width: 200,
//             marginHorizontal: 50,
//             marginVertical: 10,
//           }}
//         />
//       </View>
//       <View style={{ flex: 6, alignItems: "center", paddingTop: 40 }}>
//         <Button
//           title={"Login"}
//           buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
//           containerStyle={{
//             height: 40,
//             width: 200,
//             marginHorizontal: 50,
//             marginVertical: 10,
//           }}
//         />
//         <Button
//             onPress={()=> navigation.navigate('Cadastro')}
//           title={"Cadastrar-se"}
//           buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
//           containerStyle={{
//             height: 40,
//             width: 200,
//             marginHorizontal: 50,
//             marginVertical: 10,
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   avatar: {
//     alignItens: "center",
//   },
//   Button: {
//     alignItems: "center",
//   },
// });

// export default Login;

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import LoginScreen from "./screens/login";
import CadastroScreen from "./screens/Cadastro";

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
      onPress={()=> navigation.navigate('Inicial')}
      title="Tela Inicial" />
    </View>
  );
}

// function InicialScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button 
//             onPress={()=> navigation.navigate('Home')}
//             title="Tela Home" />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;