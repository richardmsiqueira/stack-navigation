import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/index';
import Contact from './src/screens/Contact/index';
import Profile from './src/screens/Profile/index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Tela Inicial',
          headerStyle: {
            backgroundColor: '#add8e6'
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Contact" component={Contact} options={{
          title: 'Contato',
          headerStyle: {
            backgroundColor: '#add8e6'
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          headerShown: false
        }}/>
        <Stack.Screen name="Profile" component={Profile} options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#add8e6'
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          headerShown: false
        }}/>
      </Stack.Navigator>
      <StatusBar styles="auto" />
    </NavigationContainer>
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
