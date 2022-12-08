import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Avatar, Input } from "react-native-elements";

const Flex = () => {
return (
<View style={[styles.container, {
flexDirection: "column"
}]}>
<View style={{ flex: 1, alignItems:'center'}}>
  <Avatar
  avatarStyle={styles.Avatar}
  size="xlarge"
  rounded
  source={{
    uri: 'https://as1.ftcdn.net/v2/jpg/03/64/62/36/1000_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg'
  }}/>
</View>
<View style={{ flex: 2, alignItems:'center'}}>
  <Input placeholder="Login"
   containerStyle={{
    height: 40,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  }}/>
  <Input placeholder="Senha"
   containerStyle={{
    height: 40,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  }}/>
  <Button title={'Login'}
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}/>
      <Button title={'Cadastre-se'} 
              buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}/>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
});

export default Flex;