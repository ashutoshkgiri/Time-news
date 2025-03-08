import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './screen/SplashScreen';
//npm install @react-navigation/stack

import {createStackNavigator} from '@react-navigation/stack'
import { HomeScreen } from './screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  const Stack=createStackNavigator();


  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
     <Stack.Screen name='Splash' component={SplashScreen} />
     <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
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
