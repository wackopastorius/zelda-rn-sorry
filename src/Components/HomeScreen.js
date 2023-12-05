import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() =>
          navigation.navigate('VegRecipes', { screen: 'VegRecipes' })
        }
        title="Vegetarian Recipes"
      />
      <Button
        onPress={() =>
          navigation.navigate('MeatPoultryRecipes', {
            screen: 'MeatPoultryRecipes',
          })
        }
        title="Meat & Poultry Recipes"
      />
      <Button
        onPress={() =>
          navigation.navigate('SeafoodRecipes', { screen: 'SeafoodRecipes' })
        }
        title="Seafood Recipes"
      />
      <Button
        onPress={() =>
          navigation.navigate('SurfTurfRecipes', { screen: 'SurfTurfRecipes ' })
        }
        title="Surf & Turf Recipes"
      />
    </View>
  );
};

export default HomeScreen;
