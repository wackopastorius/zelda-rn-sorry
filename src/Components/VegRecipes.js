import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useResults from "../hooks/useResults";

const VegRecipes = () => {
    const [results, errorMessage] = useResults('vegrecipes');
    
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image
                    source={{ uri: item.imageURL }} 
                    style={styles.imageStyle}
                />
            </View>
        );
    };

    return (
        <View>
            <Text>Vegetarian Recipes</Text>
            <FlatList
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const colors = {
    background: '#E0D7C6', // Light beige
    text: '#3D352F',       // Dark brown
    accent: '#488BEC',     // Royal blue
};

const styles = StyleSheet.create({
    
    containerStyle: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    titleStyle: {
        
        fontSize: 50,
        color: colors.text,
        marginBottom: 20,
        color: colors.accent
    },
    itemContainer: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'column',
    },
    imageStyle: {
    height: 200,
    width: 300,
  },

});

export default VegRecipes;