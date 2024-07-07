import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { FAB } from '@rneui/themed';
import { ListItem, Avatar, SearchBar } from 'react-native-elements';

// - Imported icons to be use in sticky cart icon
import { Feather } from '@expo/vector-icons';

// - These array of objects are the data that can be use when called and will display the image and content accordinglly
// - Each has unique id
const categories = [
    { id: '1', name: 'Coffee', image: require('../assets/images/category/category1.jpg') },
    { id: '2', name: 'Pastries', image: require('../assets/images/category/category2.jpg') },
    { id: '3', name: 'Sandwiches', image: require('../assets/images/category/category3.jpg') },
];

const justForYou = [
    { id: '4', name: 'Ice Matcha Latte', price: '$7.30', calories: '120 cals', image: require('../assets/images/recommends/reco2.jpg') },
    { id: '5', name: 'Caramel Machiato', price: '$5.80', calories: '150 cals', image: require('../assets/images/recommends/reco1.jpg') },
    { id: '6', name: 'Butter Pecan', price: '$6.45', calories: '200 cals', image: require('../assets/images/recommends/reco3.jpg') },
    { id: '7', name: 'Chipotle Deluxe', price: '$8.90', calories: '100 cals', image: require('../assets/images/recommends/reco4.jpg') },
    { id: '8', name: 'Cinnamon Blist', price: '$4.69', calories: '300 cals', image: require('../assets/images/recommends/reco5.jpg') },
    { id: '9', name: 'Choko Croissants', price: '$2.99', calories: '330 cals', image: require('../assets/images/recommends/reco6.jpg') },
];

// - Explanation for all variables:
// - searchText: This variable holds the current state of the search text. Initially, it is set to an empty string ('') because we are using useState('').
// setSearchText: This function allows you to update the searchText state.When you call setSearchText('new text'), it will re - render the component and update searchText to 'new text'.
const CafeListScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

// - setFilteredForYou: updates the filteredForYou state. For instance, calling setFilteredForYou(newItems) will update filteredForYou to newItems.
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const [filteredForYou, setFilteredForYou] = useState(justForYou);

// - This line updates the searchText state variable with the text parameter passed to the handleSearch function. 
//   typically used to store the current value of the search input field.
    const handleSearch = (text) => {
        setSearchText(text);
// - filter = iterates the arrate of categories 
// - toLowerCase = for case-sensitive search 
// - include() =  method was used to filter categories and justForYou arrays based on the text parameter in a case-insensitive manner, e
//   ensuring that only items with names contain the search text are included in thee result when searching.
        const filteredCategories = categories.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredCategories(filteredCategories);

        const filteredForYou = justForYou.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredForYou(filteredForYou);
    };

// - Responsible for displaying the image and context of the categories section
    const renderCategories = ({ item }) => (
        <View>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );

// - This is for the vertical item: Just for you, in a vertical structure 
    const renderFilteredForYou = ({ item }) => (
        <View style={styles.verticalItemContainer}>
            <ListItem containerStyle={styles.listItem} onPress={() => navigation.navigate('Detail')}>

{/* - Avatar = Displays an avatar pre-much an image associated with the item. The source prop specifies the image source (item.image), 
      and size="large" adjusts the avatar's size. */}
                <Avatar source={item.image} size="large" />
                
{/* - ListItem = from UI native react library */}
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>

{/* -  Displays additional details, such as calories */}
                    <ListItem.Subtitle>{item.calories}</ListItem.Subtitle>
                    <ListItem.Subtitle style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'right', width: '100%' }}>{item.price}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    );

    return (
        <View style={styles.container}>

{/* - scrollView = to enable scrolling vertically for more content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Welcome Kenji 👋</Text>

{/* - Responsible in displaying the serach bar and with the styling of the filter and general looks of the search bar */}
                <SearchBar
                    placeholder="What are you looking for?"
                    onChangeText={handleSearch}
                    value={searchText}
                    lightTheme
                    round

// - Theese three are responsible with the stylings of the container 
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBarInputContainer}
                    inputStyle={styles.searchBarInput}
                />

                <Text style={styles.subHeader}>Categories</Text>
                <FlatList

//  - The data are taken in the filtered categories which general is looping in the categories array
                    data={filteredCategories}
                    keyExtractor={item => item.id}

// - This function typically defines how each item should be displayed.
                    renderItem={renderCategories}
                    
// - Responsible for dispaying three columns for the items
                    numColumns={3}
                    contentContainerStyle={styles.flatListContent}
                    scrollEnabled={false}
                />

                <Text style={styles.subHeader}>Just For You</Text>
                <FlatList
                    data={filteredForYou}
                    keyExtractor={item => item.id}
                    renderItem={renderFilteredForYou}

// - This is responsible for removing the scroll indicator for vertical
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContentVertical}
                />
            </ScrollView>

{/* - FAB that is positioned fixed to stay in the bottom right corner of the screen. the purpose of this element in the design is to let 
      the user know that there car is emtpy and eventually will display the number of items that they have in the cart as they explore more items */}
            <View style={styles.fab}>
                <FAB
                    icon={<Feather name="shopping-cart" size={24} color="white"/>}
                    color="#907369"
                />
            </View>
        </View>
    );
};

// - Stylings needed to make the layout and design of the screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        marginTop: 50,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'left',
        paddingLeft: 20,
    },
    scrollContainer: {
        paddingBottom: 25,
    },
    flatListContent: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    flatListContentVertical: {
        paddingHorizontal: 10,
    },
    image: {
        width: 90,
        height: 90,
        margin: 15,
        borderRadius: 10,
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    listItem: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
    },
    searchBarInputContainer: {
        backgroundColor: '#fff',
    },
    searchBarInput: {
        fontSize: 16,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default CafeListScreen;
