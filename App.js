import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Components/HomeScreen";
import { StyleSheet} from "react-native";
import VegRecipes from "./src/Components/VegRecipes";
import MeatPoultryRecipes from "./src/Components/MeatPoultryRecipes"
import SurfTurfRecipes from "./src/Components/SurfTurfRecipes";
import SeafoodRecipes from "./src/Components/SeafoodRecipes";
import SigninScreen from "./src/Components/SigninScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Breath of the Wild: Cookbook "}}>
          <Stack.Screen name="SigninScreen" component={SigninScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="VegRecipes" component={VegRecipes} />
          <Stack.Screen name="MeatPoultryRecipes" component={MeatPoultryRecipes} />
          <Stack.Screen name="SurfTurfRecipes" component={SurfTurfRecipes} />
          <Stack.Screen name="SeafoodRecipes" component={SeafoodRecipes} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  
});


