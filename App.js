import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import SplashScreen from './src/screen/SplashScreen';
import SignInNSignUp from './src/screen/SignInNSignUp';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';
import Welcome from './src/screen/Welcome';
import Topics from './src/screen/Topics';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8C96FF" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignInNSignUp" component={SignInNSignUp} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Topics" component={Topics} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
