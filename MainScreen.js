import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const cafes = [
    { id: '1', name: 'Cafe A', location: 'New York', imageUri: 'https://media.mdia.ca/img/flowers/flower-02-md.png' },
    { id: '2', name: 'Cafe B', location: 'Los Angeles', imageUri: 'https://media.mdia.ca/img/flowers/flower-02-md.png' },
];

const recommendedCafes = [
    { id: '3', name: 'Cafe C', imageUri: 'https://media.mdia.ca/img/flowers/flower-01-md.png' },
    { id: '4', name: 'Cafe D', imageUri: 'https://media.mdia.ca/img/flowers/flower-01-md.png' },
    // Add more recommended cafes as needed
];

const MainScreen = ({ navigation }) => {
    const renderRecommendedItem = ({ item }) => (
        <ListItem bottomDivider onPress={() => navigation.navigate('CafeDetails', { cafeId: item.id })}>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <Avatar source={{ uri: item.imageUri }} size="small" />
        </ListItem>
    );

    return (
        <View style={styles.container}>
            <Image source={{ uri: cafes[0].imageUri }} style={styles.mainImage} />
            <Text style={styles.mainTitle}>{cafes[0].name}</Text>
            <Text style={styles.mainLocation}>{cafes[0].location}</Text>
            <FlatList
                data={recommendedCafes}
                keyExtractor={(item) => item.id}
                renderItem={renderRecommendedItem}
                ListHeaderComponent={<Text style={styles.header}>Recommended Cafes</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    mainImage: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginBottom: 20,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mainLocation: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});

export default MainScreen;
