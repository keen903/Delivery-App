import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// - Imported to be used as tabs icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// -Imported from their respective locatation 
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BrowseScreen from './screens/BrowseScreen';
import DetailsScreen from './screens/DetailsScreen';

// - Stack = To manage the stack navigation of the app
// = Tab = For tab-based navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DetailsTabNavigator() {
  return (

// - Customizing the bottom navigation
    <Tab.Navigator tabBarOptions={{activeTintColor: '#907369', inactiveTintColor: 'lightgray', labelStyle: {fontSize: 15, fontWeight: 'bold'},}}>
{/* - Tab screen are for the bottom navigation along with icons imported from the library */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home"  color={color} size={size} />), }} />
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<FontAwesome name="th-list" color={color} size={size} />), }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),headerTitleAlign: 'center' }} />
   </Tab.Navigator>

  );
}

// - Mananges the different screen using stack.screen
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={DetailsTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailsScreen} options={{title: 'Details', headerTitleAlign: 'center'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
