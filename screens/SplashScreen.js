import React from 'react';
// - Components and utilities from React Native for building UI elements, styling, and handling touch events.
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// - This component gets navigation as a prop from React Navigation, allowing navigation to other screens.
const SplashScreen = ({ navigation }) => {
    return (
// - Using image background to cover the entire screen of the image
        <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Click, Sip, Relax!</Text>
                <View style={styles.buttonContainer}>

{/* -  like a clickable area that you can wrap around other components, such as text or images. It makes
        these components respond to clickings, so when a user taps on them, something happens which in this 
        case navigating to another screen. */}
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>

{/* - style={{styles.buttonTex}} =  Stucture to specifically apply the styling created in the styleSheet */}
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

// - CSS for stylings 
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5F453C',
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#907369',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
