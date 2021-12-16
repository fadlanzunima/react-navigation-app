import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function SignUp() {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.textSignUp}>SIGN UP</Text>
        </TouchableOpacity>
        <Text
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            fontFamily: 'Helvetica-Neue',
            letterSpacing: 0.25,
          }}>
          ALREADY HAVE AN ACCOUNT?{' '}
          <Text
            style={{
              color: '#8E97FD',
              fontFamily: 'Helvetica-Neue',
            }}>
            LOG IN
          </Text>
        </Text>
      </View>
    </ScrollView>
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
  },
  wrapperBtn: {
    marginTop: 40,
    marginBottom: 25,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
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

export default SignUp;
