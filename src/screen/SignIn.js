import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation, StackActions} from '@react-navigation/native';
import HeaderTop from './Component/HeaderTop';
import {SigninUser} from '../config/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);

  const checkText = (value, name) => {
    switch (name) {
      case 'inputUsername':
        setUsername(value);
        break;
      case 'inputPassword':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_user', value);
      navigation.dispatch(StackActions.replace('Welcome'));
    } catch (e) {
      // saving error
      console.log('error');
    }
  };

  const FunctionSignIn = async () => {
    const body = {
      username,
      password,
    };
    await SigninUser(body).then(data => {
      console.log(data);
      const value = JSON.stringify(data);
      storeData(value);
    });
  };

  const ChangeShowPassword = () => {
    setShow(!show);
  };

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
            placeholder="Username"
            value={username}
            onChangeText={value => checkText(value, 'inputUsername')}
          />
          <View style={styles.inputText}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={value => checkText(value, 'inputPassword')}
              secureTextEntry={show}
            />
            <TouchableOpacity
              style={{paddingVertical: 15}}
              onPress={ChangeShowPassword}>
              {show ? (
                <Icon name="eye" type="font-awesome" color="#000" size={15} />
              ) : (
                <Icon
                  name="eye-slash"
                  type="font-awesome"
                  color="#000"
                  size={15}
                />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.login}
            onPress={() => FunctionSignIn()}>
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
            onPress={() => navigation.navigate('SignUp')}
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
  inputText: {
    width: Dimensions.get('window').width - 40,
    height: 50,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
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
