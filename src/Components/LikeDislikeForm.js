import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const LikeDislikeForm = () => {
    const [like, setLike] = useState("");
    const [dislike, setDislike] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Like: </Text>
            <AntDesign style={styles.button} value={like} name="like1" size={24} color="black" onPress={() => console.log("liked a thing")}/>
            <Text style={styles.text}>Dislike: </Text>
            <AntDesign style={styles.button} value={dislike} name="dislike1" size={24} color="black" onPress={() => console.log("disliked a thing")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    button: {
        color: '#488BEC'
    },
    text: {
        marginHorizontal: 5
    }
})

export default LikeDislikeForm;