import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import About from "./screens/about";
import Setting from "./screens/setting";
import Product from "./screens/product";
import ProductDetail from './screens/productdetail';
import AddProduct from './screens/addproduct';
import Book from './screens/book';
import AddBook from './screens/addbook';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Nav1></Nav1>
    </NavigationContainer>
  );
}
function Nav1() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          var iconName;
          if (route.name == 'Home') {
            iconName = 'home';
            var iconColor = (focused) ? 'blue' : 'gray';
          }
          if (route.name == 'About') {
            iconName = 'help';
            var iconColor = (focused) ? 'blue' : 'gray';
          }
          if (route.name == 'Product') {
            iconName = 'cube';
            var iconColor = (focused) ? 'blue' : 'gray';
          }
          return <Ionicons name={iconName} size={30} color={iconColor} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Nav2}
        options={{ headerShown: false }} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Product" component={Nav3}
        options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function Nav2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function DrawerHome() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Main" component={Home}
        options={{ headerShown: true }} />
      <Drawer.Screen name="Books" component={Book}/>
      <Drawer.Screen name="Add Book" component={AddBook}/>
      <Drawer.Screen name="Add Product" component={AddProduct}/>
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}

function Nav3() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product List" component={Product} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
