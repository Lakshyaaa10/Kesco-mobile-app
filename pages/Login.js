import React, { useState, useRef } from "react";
import { Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import OTP from '../components/OTP';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const setTimer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
};

const Login = () => {
    const [OTP, setOTP] = useState(false);
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const handleInputChange = (index, value) => {
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView>
                <View style={{ height: height / 3, width: width, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require('../assets/img/logo.png')} style={{ resizeMode: 'cover' }}></Image>
                </View>
                <View style={{ height: height * 0.6, width: "100%" }}>
                    <View style={{ height: '50%', width: '100%' }}>
                        <View style={{ height: '40%', width: '100%', justifyContent: "center", alignItems: "center" }}>
                            {!OTP && <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>{'Login'}</Text>}
                            {OTP && <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>{'OTP verification'}</Text>}
                            <Text style={{ color: '#888888', textAlign: "justify", paddingTop: 10 }}>{'Enter Your Mobile Number to Login'}</Text>
                            <Text style={{ color: 'grey' }}>{'Your Account'}</Text>
                        </View>
                        {!OTP && <View style={{ height: '12%', width: '100%', paddingLeft: 24 }}>
                            <Text >{'Phone Number'}</Text>
                        </View>}
                        {OTP && <View style={{ height: '12%', width: '100%', paddingLeft: 15, justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                            <Text style={{ color: 'orange', right: 10 }}>{'01:35'}</Text>
                        </View>}
                        <View style={{ height: '15%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {!OTP && <TextInput style={{ height: 45, width: 360, borderWidth: 1, borderColor: '#888888', borderRadius: 10 }}></TextInput>}
                            {OTP &&
                                <View style={{ height: '100%', width: '60%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                                    {inputRefs.map((inputRef, index) => (
                                        <TextInput
                                            key={index}
                                            maxLength={1}
                                            style={{ height: 50, width: 50, borderColor: 'grey', borderWidth: 1, borderRadius: 10, textAlign: "center", fontSize: 20 }}
                                            ref={inputRef}
                                            onChangeText={(value) => handleInputChange(index, value)}
                                        />
                                    ))}
                                </View>}
                        </View>
                        <View style={{ height: '35%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setOTP(true)}>
                                <View style={{ height: 50, width: 360, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    {!OTP && <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Request OTP'}</Text>}
                                    {OTP && <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Submit'}</Text>}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: '50%', width: '100%' }}>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const { width, height } = Dimensions.get("window");
export default Login;
