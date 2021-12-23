import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScree() {
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_user');
      console.log(value);
      if (value !== null) {
        console.log('ada');
        navigation.dispatch(StackActions.replace('Welcome'));
      } else {
        navigation.dispatch(StackActions.replace('SignInNSignUp'));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.logo}
          source={require('../assets/img/logo-app.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.icon}
          source={require('../assets/img/icon.png')}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <Image
            style={styles.bgSplash}
            source={require('../assets/img/bg-splash.png')}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.textSplash}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#3F414E',
            marginBottom: 10,
            fontFamily: 'Helvetica-Neue',
          }}>
          We are what we do
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#A1A4B2',
            fontWeight: '300',
            fontFamily: 'Helvetica-Neue',
          }}>
          Thousand of people are usign silent moon{'\n'} for smalls meditation
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapperImage: {
    position: 'relative',
    height: 'auto',
    alignItems: 'center',
    flex: 0.7,
  },
  logo: {
    position: 'absolute',
    top: Dimensions.get('window').width * 0.1,
    zIndex: 1,
    width: 168,
    height: 30,
  },
  icon: {
    position: 'absolute',
    top: Dimensions.get('window').width * 0.4,
    zIndex: 1,
    width: 332,
    height: 242,
  },
  bgSplash: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.2,
  },
  textSplash: {
    flex: 0.3,
    alignItems: 'center',
    marginTop: Dimensions.get('window').width * 0.3,
  },
});

export default SplashScree;
