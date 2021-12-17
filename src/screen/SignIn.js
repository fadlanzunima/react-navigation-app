import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from './Component/HeaderTop';

function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderTop
        navigation={navigation}
        title="Welcome Back!"
        goToScreen="SignInNSignUp"
      />
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          top: Dimensions.get('window').width * 0.85,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, color: '#A1A4B2', fontWeight: 'bold'}}>
          OR LOG IN WITH EMAIL
        </Text>

        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.inputText}
            placeholder="Email address"></TextInput>
          <TextInput
            style={styles.inputText}
            placeholder="Password"></TextInput>

          <TouchableOpacity style={styles.login}>
            <Text style={styles.textLogIn}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 14, color: '#3F414E'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperBtn}>
          <TouchableOpacity
            // onPress={() => navigate('SignUp')}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Helvetica-Neue',
              letterSpacing: 0.25,
            }}>
            <Text>DOESN'T HAVE AN ACCOUNT? </Text>

            <Text
              style={{
                color: '#8E97FD',
                fontFamily: 'Helvetica-Neue',
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#8E97FD',
    borderRadius: 38,
    width: Dimensions.get('window').width - 40,
    height: 63,
    marginBottom: 10,
  },
  textLogIn: {
    fontSize: 14,
    color: '#F6F1FB',
  },
  wrapperBtn: {
    position: 'absolute',
    zIndex: 1,
    width: Dimensions.get('window').width - 40,
    top: Dimensions.get('window').width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SignIn;