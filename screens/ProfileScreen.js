import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainScreen = ({ navigation }) => {

// - Variables that are defined to be used throughout the components
    const iconColor = '#000';
    const iconSize = 24;

    return (
// - ScrollView = provides a scrollable view for the content particually the settings sections
        <ScrollView>
            
{/* - View = is esssentially like a main container of all the content */}
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/avatar.jpg')} style={styles.mainImage} />

{/* - Added another view aka container to contain the overlay background and displaying the text change avatar */}
                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>Change Avatar</Text>
                    </View>
                </View>

                <Text style={{ margin: 10, fontSize: 25 }}>Kenji Liu</Text>
                <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'left', width: "100%" }}>Settings</Text>

{/* - ListItem = are then use to display various numbers of settings 
    - It provides a structured way to display content like text, icons, or other components within a list format */}
                <ListItem style={styles.listitems}>
                    <MaterialCommunityIcons name="account-edit" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Personal Information</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listitems}>
                    <MaterialCommunityIcons name="credit-card" color={iconColor} size={iconSize} />
                    
{/* ListItem.Content = is used to wrap and organize the primary content within each ListItem */}
                    <ListItem.Content>
                        <ListItem.Title>Payment Method</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listitems}>
                    <MaterialCommunityIcons name="history" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Order History</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider style={styles.listitems}>
                    <MaterialCommunityIcons name="account-multiple" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Invite Friends</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider style={styles.listitems}>
                    <MaterialCommunityIcons name="gift" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Send Gifts</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listitems}>
                    <MaterialCommunityIcons name="alphabet-latin" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Accessibility</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listitems}>
                    <MaterialCommunityIcons name="lock" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Privacy and Security</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listitems}>
                    <MaterialCommunityIcons name="information" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>About</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listitems} onPress={() => navigation.navigate('Splash')}>
                    <MaterialCommunityIcons name="exit-to-app" color={iconColor} size={iconSize} />
                    <ListItem.Content>
                        <ListItem.Title>Sign out</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    imageContainer: {
        position: 'relative',
        height: 200,
    },
    listitems: {
        width: '100%',
        marginBottom: 15,
    },
    mainImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    overlay: {
// - Makes the element cover its entire parent. It ensures the overlay fills the available space completely.
// -  Pre-defined React Native elements  that sets the position of an element to absolute and fills its parent container completely.
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 100,
    },
    overlayText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    changeAvatarButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007AFF',
        borderRadius: 10,
    },
    changeAvatarText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MainScreen;
