import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import cookbook from '../api/cookbook';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async () => {
    // sends credentials for validation control
    const response = await cookbook
      .post('/auth', { email, password })
      .then((response) => {
        //
        if (response.status == 200) {
          console.log('Status 200');
          if (response.data) {
            console.log('Det finns data: ');
            console.log(response.data);
            navigation.navigate('HomeScreen');
          } else {
            // email does not exist
            console.log('Det finns ingen data');
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.status == 403) {
          // email exists, wrong password
          console.log('forbidden');
        } else {
          console.log('Status: ' + error.response.status);
        }
      });
  };
  return (
    <View>
      <Text style={styles.text} h3>
        Sign in for Zelda Cookbook
      </Text>
      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        //secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button style={styles.button} title="Sign in" onPress={() => signin()} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 10,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
