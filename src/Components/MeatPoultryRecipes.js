import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useResults from '../hooks/useResults';
import { useFonts } from 'expo-font';
import LikeDislikeForm from './LikeDislikeForm';

const MeatPoultryRecipes = () => {
  const [results, errorMessage] = useResults('meatrecipes');
  const [fontsLoaded] = useFonts({
    'The Wild Breath of Zelda': require('../../assets/fonts/The_Wild_Breath_of_Zelda.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={{ uri: item.imageURL }} style={styles.imageStyle} />
        <LikeDislikeForm />
      </View>
    );
  };
  
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Meat & Poultry Recipes</Text>
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
  text: '#3D352F', // Dark brown
  accent: '#488BEC', // Royal blue
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'The Wild Breath of Zelda',
    fontSize: 35,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titleStyle: {
    fontFamily: 'The Wild Breath of Zelda',
    fontSize: 40,
    color: colors.text,
    marginBottom: 20,
    color: colors.accent,
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

export default MeatPoultryRecipes;
