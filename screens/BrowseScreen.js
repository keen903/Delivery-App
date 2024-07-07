import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

// - Import icons for the location in the header
import Entypo from 'react-native-vector-icons/Entypo';

// - This will be used to horizontally scroll the popular items in the browse screen
const Popular = [
    { id: '1', name: 'Pancakes Deluxe', image: require('../assets/images/popular/p1.jpg') },
    { id: '2', name: 'Cookies N Cream', image: require('../assets/images/popular/p2.jpg') },
    { id: '3', name: 'Maple & Bacon', image: require('../assets/images/popular/p3.jpg') },
    { id: '4', name: 'Pure Black', image: require('../assets/images/popular/p4.jpg') },
    { id: '5', name: 'Peach Turnovers', image: require('../assets/images/popular/p5.jpg') },
    { id: '6', name: 'Choco Burst', image: require('../assets/images/popular/p6.jpg') },
];

// = This are used to display all the categories in a two column structure
const AllCategories = [
    { id: '4', name: 'Hot Coffee', image: require('../assets/images/all/a1.jpg') },
    { id: '5', name: 'Cold Drinks', image: require('../assets/images/all/a2.jpg') },
    { id: '6', name: 'Sandwiches', image: require('../assets/images/all/a3.jpg') },
    { id: '7', name: 'Desserts', image: require('../assets/images/all/a4.jpg') },
    { id: '8', name: 'Pastries', image: require('../assets/images/all/a5.jpg') },
    { id: '9', name: 'Salads', image: require('../assets/images/all/a6.jpg') },
];

// - Utilizing useState to update and modify items for search bar
// - Explanation to this section is the same as the HomeScreen. Please refer to that screen 
const CafeListScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredPopular, setFilteredPopular] = useState(Popular);
    const [filteredAllCategories, setFilteredAllCategories] = useState(AllCategories);

    const handleSearch = (text) => {
        setSearchText(text);
        const filteredPopular = Popular.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        const filteredAllCategories = AllCategories.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPopular(filteredPopular);
        setFilteredAllCategories(filteredAllCategories);
    };
    
// - Additionally, i added ternary operator to differiante the styles to be added on the popular or all categories 
// - The condition is styled based on the isPopular prop. If isPopular is true, it applies the styles.popularItem style; 
//    otherwise, it applies the styles.allCategoriesItem style.
// - The images for the popular items are more wider compare to the all categories and that is because that the condition 
//   isPopular is equal to true. Refer this from flatlist
    const renderContent = ({ item, isPopular }) => (
        <View style={isPopular ? styles.popularItem : styles.allCategoriesItem}>
            <Image source={item.image} style={isPopular ? styles.popularImage : styles.allCategoriesImage} />
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Entypo name="location-pin" color="red" size={30} />
                <Text style={{ fontSize: 15, textAlign: 'center', paddingBottom: 20 }}>Vancouver</Text>

                <SearchBar
                    placeholder="What are you looking for?"
                    onChangeText={handleSearch}
                    value={searchText}
                    lightTheme
                    round
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBarInputContainer}
                    inputStyle={styles.searchBarInput}
                />

                <Text style={styles.subHeader}>Popular</Text>
                <FlatList
// - Array containing the data to be render in the list. Each item in filteredCategories represents a distinct list item.
                    data={filteredPopular}
                    keyExtractor={(item) => item.id}

// - item = This prop specifies how to extract a unique key for each item in the data array. In this case, it uses the id property
//   of each item as its key. Keys help identify which items have changed, are added, or are removed, and are crucial for efficient rendering and updating of lists.
                    renderItem={({ item }) => renderContent({ item, isPopular: true })}
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                />

                <Text style={styles.subHeader}>All Categories</Text>
                <FlatList
                    data={filteredAllCategories}
                    keyExtractor={(item) => item.id}

// - Since the condition from above is false, this would then be displaying two column structure for the iamges and content 
//   and vice versa if it was true
                    renderItem={({ item }) => renderContent({ item, isPopular: false })}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false} 
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    subHeader: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        width: '100%',
        textAlign: 'center'
    },
    popularItem: {
        marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: 15,

    },
    allCategoriesItem: {
        marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: 20,

    },
    popularImage: {
        width: 220,
        height: 120, 
        borderRadius: 10,
        marginBottom: 10,
    },
    allCategoriesImage: {
        width: 160, 
        height: 120,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    searchBarContainer: {
        backgroundColor: 'none',
    },
    searchBarInputContainer: {
        backgroundColor: '#fff',
        width: '100%'
    },
    searchBarInput: {
        fontSize: 16,
    },
});

export default CafeListScreen;
