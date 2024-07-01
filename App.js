import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login'
import SplashScreen from './pages/Splash'
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#262316"
    },
    titleImage: {

    }
})

const App = () => {
    return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

    )

}

export default App