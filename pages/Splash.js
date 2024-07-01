import { Image, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from 'react';
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titleImage:{

    }
})
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login');
      }, 2000); 
    }, [navigation]);

    return (
        <View style={styles.container}>
                <ImageBackground resizeMode="cover" source={require("../assets/img/0.jpg")} style={{ height: '100%', width: '100%',alignItems:"center",justifyContent:"center" }}  >
            <Image source={require('../assets/img/logo.png')} style={{height:110,width:110,bottom:150}}></Image>
            </ImageBackground>
     </View>    )
}
export default SplashScreen