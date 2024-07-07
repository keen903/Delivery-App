import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { CheckBox, Slider } from '@rneui/themed';

const cafes = [
    { id: '1', name: 'Ice Match Latte', location: 'BCIT Cafe 101', image: 'https://media.mdia.ca/img/flowers/flower-02-md.png' },
    { id: '2', name: 'Cafe B', location: 'Los Angeles', image: 'https://media.mdia.ca/img/flowers/flower-02-md.png' },
];

const ItemDetails = ({ navigation }) => {
    const [check1, setCheck1] = useState(false);
    const [sizeSelectedIndex, setSizeSelectedIndex] = useState(0);
    const [milkSelectedIndex, setMilkSelectedIndex] = useState(0);
    const [sugarLevel, setSugarLevel] = useState(0);

// - Two arrays containing  string elements that are used for customizing item in the details screens
    const sizes = ['Small', 'Medium', 'Large'];
    const milkTypes = ['Oat', 'Almond', 'Soy'];

// - This is responsible for propting pop up when clicking the "add to cart" button, informing user to read the allergies information prior to payment
    const handleAddToCart = () => {
        if (!check1) {
            Alert.alert('Notice', 'Please confirm that you have read the allergy information.');
            return;
        }
    };

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/recommends/reco2.jpg')} style={styles.imgbg}>
                        <View style={styles.titleBlur}>

{/* - Here, cafe[0].location = Essentially indicates the index of the first item in the cafe. Which is the Ice matcha latte
      its specified "location" so it will display the location text instead.  Index number always starts with 0 */}
                            <Text style={styles.mainLocation}>{cafes[0].location}</Text>
                            <Text style={styles.mainTitle}>{cafes[0].name}</Text>
                        </View>
                    </ImageBackground>

                    <View style={styles.allergiesContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Description</Text>
                        <Text style={styles.allergiesText}>
                            "Match Latte: A delectable dessert featuring layers of matcha-infused sponge cake. Contains gluten, dairy, and eggs; please inquire about nut allergies."
                        </Text>
                    </View>

                    <View style={styles.sizeContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>Drink Size</Text>
                        <View style={styles.sizeOptionsContainer}>

{/* - Map = essentailly is used to iterate over and execute a function on each element of the array */}
                            {sizes.map((size, index) => (

// - React native elements = checkbox for customizing items 
                                <CheckBox
                                    key={index}
                                    title={size}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checked={sizeSelectedIndex === index}
                                    onPress={() => setSizeSelectedIndex(index)}
                                    containerStyle={styles.checkboxItem}
                                    checkedColor="#907369"
                                />
                            ))}
                        </View>
                    </View>

                    <View style={styles.sizeContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>Milk Type</Text>
                        <View style={styles.sizeOptionsContainer}>
                            {milkTypes.map((milk, index) => (
                                <CheckBox
                                    key={index}
                                    title={milk}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checked={milkSelectedIndex === index}
                                    onPress={() => setMilkSelectedIndex(index)}
                                    containerStyle={styles.checkboxItem}
                                    checkedColor="#907369"
                                />
                            ))}
                        </View>
                    </View>

    {/* Sugar Level Slider */}
                    <View style={styles.sliderContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>Sugar Level</Text>
                        <Slider
                            value={sugarLevel}
                            onValueChange={(value) => setSugarLevel(value)}
                            maximumValue={100}
                            step={30}
                            allowTouchTrack
                            trackStyle={{ height: 3}}
                            thumbStyle={{ height: 20, width: 20, backgroundColor: '#907369' }}
                        />
                        <Text>{sugarLevel} % Sugar </Text>
                    </View>

                    <View style={styles.frequentlyBoughtContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Frequently bought together</Text>

{/* - Used scrollview = to horizontially scroll the items from left to right. To save some space for the bottom content */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 30, marginRight: 30 }}>
                            <Image source={require('../assets/images/recommends/reco3.jpg')} style={styles.image} />
                            <Image source={require('../assets/images/all/a4.jpg')} style={styles.image} />
                            <Image source={require('../assets/images/all/a2.jpg')} style={styles.image} />
                            <Image source={require('../assets/images/popular/p6.jpg')} style={styles.image} />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

{/* - TochableOpacity = pre-much acts like a button with the difference of having a feedback when clieked. Beneficial to provide user with visual feedback about their actions  */}
            <View style={styles.Cta}>
                <TouchableOpacity style={{ padding: 13, alignItems: 'center' }} onPress={handleAddToCart}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Add to cart $6.50</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        alignItems: 'center',
    },
    titleBlur: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: '30%',
        justifyContent: 'center',
        position: 'absolute',
        top: 280,
    },
    Cta: {
        width: '90%',
        backgroundColor: '#907369',
        borderRadius: 200,
        alignSelf: 'center',
        marginBottom: 20,
    },
    imgbg: {
        position: 'relative',
        width: '100%',
        height: 400,
        justifyContent: 'center',
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
    },
    mainLocation: {
        fontSize: 18,
        color: 'white',
        marginLeft: 20,
    },
    allergiesContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    allergiesText: {
        fontSize: 14,
        color: 'black',
    },
    frequentlyBoughtContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    image: {
        width: 105,
        height: 100,
        resizeMode: 'cover',
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    checkboxItem: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        margin: 0,
        padding: 0,
    },
    sizeContainer: {
        marginVertical: 10,
        width: '90%',
    },
    sizeOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    sliderContainer: {
        width: '90%',
        marginVertical: 10,
    },
});

export default ItemDetails;
