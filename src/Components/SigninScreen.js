import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import cookbook from "../api/cookbook";
import useResults from "../hooks/useResults";

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState(" "); 
    const [password, setPassword] = useState(" ");
    
    const signin = (email, password) => {
        //get all users
        const [users, errorMessage] = useResults("/users");
        
        //loop through users and render email and passwords
        

        try {
            if (email === 'mikal@smaland.com' &&
                password === '123456') {
                    
                    navigation.navigate("HomeScreen");
            } else {
                console.log("Something went wrong!");
            }
        } catch (err) {
            console.log(err);
        };
    }
    return (
        <View>
            <Text style={styles.text} h3>Sign in for Zelda Cookbook</Text>
            <Input label="Email"
                   value={email}
                   autoCapitalize="none"
                   autoCorrect={false}
                   onChangeText={setEmail}
            />
            <Input label="Password"
                   value={password}
                   autoCapitalize="none"
                   autoCorrect={false}
                   //secureTextEntry={true}
                   onChangeText={setPassword}
            />
            <Button style={styles.button} 
                    title="Sign in"     
                    onPress={() => signin(email, password)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        height: 30,
        marginHorizontal: 10,
        marginVertical: 5
    },
    text: {
        marginHorizontal: 10, 
        marginVertical: 20
    },
    button: {
        marginHorizontal: 10
    }
});

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
}

export default SigninScreen;