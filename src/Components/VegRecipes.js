import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import useResults from "../hooks/useResults";

const VegRecipes = () => {
    const [results, errorMessage] = useResults();
    console.log(results);
    return (
        <View>
            <Text>Vegetarian Recipes</Text>
            <FlatList
                data={results}
                keyExtractor={( item ) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VegRecipes;