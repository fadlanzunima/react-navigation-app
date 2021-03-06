import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SignInNSignUp() {
  const navigation = useNavigation();

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
          }}>
          We are what we do
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#A1A4B2',
            fontWeight: '300',
          }}>
          Thousand of people are usign silent moon{'\n'} for smalls meditation
        </Text>
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signup}>
          <Text style={styles.textSignUp}>SIGN UP </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            letterSpacing: 0.25,
          }}>
          <Text>ALREADY HAVE AN ACCOUNT? </Text>

          <Text
            style={{
              color: '#8E97FD',
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff',
    fontFamily: 'FreeSans',
  },
  wrapperImage: {
    position: 'relative',
    height: 'auto',
    alignItems: 'center',
    flex: 0.7,
  },
  logo: {
    position: 'absolute',
    top: Dimensions.get('window').width * 0.08,
    zIndex: 1,
    width: 168,
    height: 30,
  },
  icon: {
    position: 'absolute',
    top: Dimensions.get('window').width * 0.2,
    zIndex: 1,
    width: 332,
    height: 242,
  },
  bgSplash: {
    marginTop: -80,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.2,
  },
  textSplash: {
    flex: 0.3,
    alignItems: 'center',
  },
  wrapperBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -50,
    marginBottom: 20,
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
    width: Dimensions.get('window').width - 40,
    height: 63,
    marginBottom: 10,
  },
  textSignUp: {
    fontSize: 14,
    color: '#F6F1FB',
  },
});

export default SignInNSignUp;
